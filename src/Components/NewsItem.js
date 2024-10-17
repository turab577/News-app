import React from 'react';
import defaultImage from './news.jpg';

const NewsItem = ({ title, description, imageUrl, newsUrl,author,date }) => {
  return (
    <div className="card my-3 h-3">
      <img src={imageUrl || defaultImage} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-body-danger text-bg-danger">By {!author?"Unkown": author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} target='-blank' className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItem;