import React from 'react';
import Navbar from './navbar';
import ShortNavBar from './navbar';
import Home from './home';
import About from './about';
import Skills from './skills';
import Project from './project';
import Contact from './contact';
import useWindowSize from './shortNavbar'
// 배포 링크  https://portfolio-c75f3.web.app/

function App() {
  let windowSize: any = useWindowSize();
  return (
    <div className="App">
      {windowSize > 768 ? <Navbar /> : <ShortNavBar />}
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
