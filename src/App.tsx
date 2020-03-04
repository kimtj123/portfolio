import React from 'react';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Skills from './skills';
import Project from './project';
import Contect from './contect';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contect />
    </div>
  );
}

export default App;
