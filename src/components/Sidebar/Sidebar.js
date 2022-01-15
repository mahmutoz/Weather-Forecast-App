import React from 'react';
import SearchBar from './SearchBar';
import Info from '../Navbar/Info';
import CurrentWeather from './CurrentWeather';

function Sidebar() {
  return (
    <aside className="mx-auto p-8 max-w-xs">
      <SearchBar />
      <CurrentWeather />
    </aside>
  );
}

export default Sidebar;
