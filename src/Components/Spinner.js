import React from 'react';
import loading from './loading.gif';

const Spinner = () => {
  return (
    <div className="text-center justify-content-center">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Spinner;
