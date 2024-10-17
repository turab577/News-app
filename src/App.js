import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  return (

    <div>
      <Router>
        <LoadingBar
          height={4}
          color='#f11946'
          progress={progress}
        />
        <Navbar/>

        <Routes>
          <Route path="/" element={<NewsComponent setProgress={setProgress} key="general" pageSize={pageSize} category="general" country="us" />} />
          <Route exact path="/home" element={<NewsComponent setProgress={setProgress} key="general" pageSize={pageSize} category="general" country="us" />} />
          <Route exact path="/sports" element={<NewsComponent setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" country="us" />} />
          <Route exact path="/technology" element={<NewsComponent setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" country="us" />} />
          <Route exact path="/science" element={<NewsComponent setProgress={setProgress} key="science" pageSize={pageSize} category="science" country="us" />} />
          <Route exact path="/health" element={<NewsComponent setProgress={setProgress} key="health" pageSize={pageSize} category="health" country="us" />} />
          <Route exact path="/business" element={<NewsComponent setProgress={setProgress} key="business" pageSize={pageSize} category="business" country="us" />} />
          <Route exact path="/entertainment" element={<NewsComponent setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" country="us" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
