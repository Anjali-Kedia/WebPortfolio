import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Hero from './components/hero';
import NavBar from './components/navBar';
import Skills from './components/skills';
import Projects from './components/work';
import Tabs from './components/project';




function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      {/* <Projects/> */}
      <Tabs/>
      <Contact/>
    </div>
  );
}

export default App;
