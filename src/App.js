import React from 'react';
import About from './components/about';
import Hero from './components/hero';
import NavBar from './components/navBar';
import Skills from './components/skills';
import Projects from './components/work';




function App() {
  return (
    <div >
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
