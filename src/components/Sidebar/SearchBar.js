import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useMainContext } from '../../context/MainContext';
import { useWeather } from '../../hooks/useWeather';

function SearchBar() {
  const { setSearch } = useMainContext();

  useWeather();
  return (
    <div className="searchbar">
      <label className="searchbar-label" htmlFor="src">
        <IoSearchOutline size={20} className="searchbar-icon" />
      </label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        id="src"
        type="search"
        className="searchbar-input"
        placeholder="Search for places..."
        autoComplete="off"
      />
    </div>
  );
}

export default SearchBar;
