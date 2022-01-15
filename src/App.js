import './style.css';
import { MainProvider } from './context/MainContext';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Info from './components/Navbar/Info';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <MainProvider>
      <main className="container h-full grid grid-flow-row lg:grid-flow-col justify-center bg-white rounded-3xl overflow-hidden">
        <div className="block lg:hidden p-4">
          <Info />
        </div>
        <Sidebar />
        <Main />
      </main>
      <Footer />
    </MainProvider>
  );
}

export default App;
