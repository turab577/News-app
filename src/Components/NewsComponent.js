import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props) => {
  const [Progress , setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [articles, setArticles] = useState([]);
  const [pageSize] = useState(5);

  useEffect(() => {
    updateNews();
   
  }, []);

  const first = (eve) => {
    return eve.charAt(0).toUpperCase() + eve.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f4defad3932412c88b45570871a559f&page=${page}&pageSize=${pageSize}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
    setProgress(100);
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3f4defad3932412c88b45570871a559f&page=${page + 1}&pageSize=${pageSize}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    setArticles(articles.concat(parsedData.articles || []));
  };

  return (
    <div className="container">
      <h2 className="text-center" style={{ margin: 40, marginTop:''}}>
        newsDaily---Top Headlines - {first(props.category)}
      </h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles?.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles && Array.isArray(articles) ? (
              articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) +'   ...': ""}
                    description={
                      element.description
                        ? element.description.slice(0, 74)+ " ....."
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              ))
            ) : (
              <div>No articles available</div>
            )}
          </div>
        </div>
      </InfiniteScroll>

      {!loading && articles.length === totalResults && (
        <p className="text-center">No more articles to display</p>
      )}
    </div>
  );
};

NewsComponent.propTypes = {
  setProgress: PropTypes.func,
  country: PropTypes.string.isRequired, 
  category: PropTypes.string.isRequired,
};

export default NewsComponent;
