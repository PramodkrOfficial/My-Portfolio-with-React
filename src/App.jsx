import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Contact1 from './components/Contact1';

function App() {

  // alert ("Welcome to the my website");

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact1 />
        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  )
}

export default App;