import React, { useEffect } from 'react';
import { Element, Events, scrollSpy } from 'react-scroll';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import ToTopButton from './components/ToTopButton/ToTopButton';
import './App.css';

const App = () => {
  useEffect(() => {
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <div className="container">
      <Header />
      <main>
        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
      </main>
      <ToTopButton />
      <Footer />
    </div>
  );
};

export default App;
