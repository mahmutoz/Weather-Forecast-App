import React from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';

function Sidebar() {
  return (
    <aside className="p-8 max-w-xs">
      <SearchBar />
      <CurrentWeather />
    </aside>
  );
}

export default Sidebar;
