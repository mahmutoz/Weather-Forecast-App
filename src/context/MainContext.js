import React, { createContext, useContext, useState } from 'react';

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [search, setSearch] = useState('Kocaeli');
  const [weatherData, setWeatherData] = useState([]);
  const [isLatLon, setIsLatLon] = useState(false);
  const [loading, setLoading] = useState(false);

  const values = {
    search,
    setSearch,
    weatherData,
    setWeatherData,
    isLatLon,
    setIsLatLon,
    loading,
    setLoading,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
