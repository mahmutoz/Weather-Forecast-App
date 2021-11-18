import React, { createContext, useContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const values = {
    id: 1,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext);
