import React from 'react';
import Footer from '../Footer/Footer';
import Wrapper from '../Main/Wrapper.js';
import { useMainContext } from '../../context/MainContext';

function Container() {
  const { isDark } = useMainContext();
  return (
    <div className={isDark}>
      <main className="main">
        <Wrapper />
        <Footer />
      </main>
    </div>
  );
}

export default Container;
