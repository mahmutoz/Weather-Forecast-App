import React, { createContext, useContext, useState } from 'react';

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [search, setSearch] = useState('Kocaeli Province');
  const [weatherData, setWeatherData] = useState([]);

  const values = {
    search,
    setSearch,
    weatherData,
    setWeatherData,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
