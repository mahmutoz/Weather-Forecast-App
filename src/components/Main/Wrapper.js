import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Info from '../Navbar/Info';
import Main from './Main';

function Wrapper() {
  return (
    <div className="wrapper">
      <div className="block lg:hidden p-4 bg-sky-100 dark:bg-gray-700">
        <Info />
      </div>
      <Sidebar />
      <Main />
    </div>
  );
}

export default Wrapper;
