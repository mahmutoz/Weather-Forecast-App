import React from 'react';
import Footer from '../Footer/Footer';
import Wrapper from '../Main/Wrapper.js';
import { useMainContext } from '../../context/MainContext';

function Container() {
  const { isDark } = useMainContext();
  return (
    <div className={isDark}>
      <div className="grid place-items-center min-h-screen p-4 lg:p-16 bg-gradient-to-tr from-sky-100 to-sky-300 dark:bg-gradient-to-tr dark:from-gray-700 dark:to-gray-900">
        <Wrapper />
        <Footer />
      </div>
    </div>
  );
}

export default Container;