import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useMainContext } from '../../context/MainContext';
import { useWeather } from '../../hooks/useWeather';

function SearchBar() {
  const { search, setSearch } = useMainContext();

  useWeather(search);
  return (
    <div className="flex items-center bg-white dark:bg-gray-500 border border-gray-200 dark:border-gray-900 rounded-2xl overflow-hidden">
      <label
        className="flex items-center justify-center w-8 h-8 pl-2 bg-white dark:bg-gray-700"
        htmlFor="src"
      >
        <IoSearchOutline
          size={20}
          className="pr-1 text-gray-700 dark:text-gray-300"
        />
      </label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        id="src"
        type="search"
        className="h-8 outline-none bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-100 text-sm px-2 w-full"
        placeholder="Search for places..."
        autoComplete="off"
      />
    </div>
  );
}

export default SearchBar;
