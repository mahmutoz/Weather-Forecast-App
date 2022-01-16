import React, { createContext, useContext, useState, useEffect } from 'react';

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [search, setSearch] = useState(
    localStorage.getItem('city') || 'Kocaeli'
  );
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.getItem('isDark') || '');
  const [isCelcius, setIsCelcius] = useState(
    localStorage.getItem('isCelcius') || 'metric'
  );

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    localStorage.setItem('city', search);
    localStorage.setItem('isCelcius', isCelcius);
  }, [isDark, isCelcius, search]);

  const values = {
    search,
    setSearch,
    weatherData,
    setWeatherData,
    loading,
    setLoading,
    isDark,
    setIsDark,
    isCelcius,
    setIsCelcius,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
