import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WelcomeAlert from './components/Alert';


function App() {

  return (
    <>
      <div>
        <WelcomeAlert />
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App;