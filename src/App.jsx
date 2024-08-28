import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import './App.css'; // Importing CSS as usual

const App = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', (args) => {
      console.log("begin", args);
    });

    Events.scrollEvent.register('end', (args) => {
      console.log("end", args);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <div className="container"> {/* Direct use of class name */}
        <Header />
        <main>
          <Element name="home" className="element"> {/* Direct use of class name */}
            <Home />
          </Element>
          <Element name="projects" className="element"> {/* Direct use of class name */}
            <Projects />
          </Element>
          <Element name="contact" className="element"> {/* Direct use of class name */}
            <Contact />
          </Element>
        </main>
        <button 
          className="toTopButton" 
          onClick={scrollToTop}
        >
          To Top
        </button>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
