import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Hero from './components/hero';
import NavBar from './components/navBar';
import Skills from './components/skills';
import Tabs from './components/project';
import Works from './components/work';

import { ThemeProvider } from 'styled-components';

const theme = {
  text_primary: '#000000',
  text_secondary: '#555555',
  card: '#FFFFFF',
  // Add more theme properties as needed
};




function App() {
  return (
    <ThemeProvider theme={theme}>
    <div >
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Works/>
      <Tabs/>
      <Contact/>
    </div>
    </ThemeProvider>
  );
}

export default App;
