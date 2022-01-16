import React from 'react';
import AllForecast from './AllForecast';
import Highlights from './Highlights';
import Info from '../Navbar/Info';

function Main() {
  return (
    <div className="bg-sky-50 dark:bg-gray-800 flex-1 px-12 py-8">
      <div className="hidden lg:block">
        <Info />
      </div>
      <AllForecast />
      <Highlights />
    </div>
  );
}

export default Main;
