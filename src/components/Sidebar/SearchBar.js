import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useMainContext } from '../../context/MainContext';
import { useWeather } from '../../hooks/useWeather';

function SearchBar() {
  const { search, setSearch } = useMainContext();
  useWeather(search);
  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <label
        className="flex items-center justify-center w-8 h-8 pl-2"
        htmlFor="src"
      >
        <IoSearchOutline size={20} color="#999" />
      </label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        id="src"
        type="search"
        className="h-8 outline-none text-gray-600 text-sm px-2 w-full"
        placeholder="Search for places..."
        autoComplete="off"
      />
    </div>
  );
}

export default SearchBar;
