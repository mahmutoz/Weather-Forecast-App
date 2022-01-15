import React from 'react';
import AllForecast from './AllForecast';
import Highlights from './Highlights';

function Main() {
  return (
    <div className="bg-gray-200 flex-1 px-12 py-5">
      <AllForecast />
      <Highlights />
    </div>
  );
}

export default Main;
