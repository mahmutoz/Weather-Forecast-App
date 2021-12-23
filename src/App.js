import './style.css';
import { MainProvider } from './context/MainContext';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
    <MainProvider>
      <main className="container h-full flex bg-white rounded-3xl overflow-hidden">
        <Sidebar />
        <Main />
      </main>
    </MainProvider>
  );
}

export default App;
