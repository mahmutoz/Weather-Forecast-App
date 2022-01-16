import React, { createContext, useContext, useState, useEffect } from 'react';

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [search, setSearch] = useState('Kocaeli');
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') || '');

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
  }, [isDark]);

  const values = {
    search,
    setSearch,
    weatherData,
    setWeatherData,
    loading,
    setLoading,
    isDark,
    setIsDark,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
