import React from 'react';
import './App.css';

import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DevSetup from './components/DevSetup';

function App() {
  return (
    <div className="App">
      <h1>Syed Anvar's Portfolio</h1>
      <BasicInfo />
      <Work />
      <Skills />
      <Resources />
      <DevSetup />
    </div>
  );
}

export default App;
