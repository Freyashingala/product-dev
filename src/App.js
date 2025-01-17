import React from 'react';
import './App.css';

import Header from './components/header';
import Introduction from './components/introduction';
import About from './components/about';

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <div id="about">
        <About />
      </div>
    </>
  );
}

export default App;
