import './style.css';
import { MainProvider } from './context/MainContext';
import React from 'react';

function App() {
  return (
    <MainProvider>
      <div className="p-2 bg-indigo-500">Deneme</div>
    </MainProvider>
  );
}

export default App;
