import React, { useState } from 'react';
import Navbar from './navbar';
// import ShortNavBar from './shortNavbar';
import Home from './home';
import About from './about';
import Skills from './skills';
import Project from './project';
import Contact from './contact';
import useWindowSize from './sub-component/getWidth'
// 배포 링크  https://portfolio-c75f3.web.app/

function App() {
  let windowSize: any = useWindowSize();
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
