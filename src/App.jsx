import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Element, Events, scrollSpy } from 'react-scroll';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import SinglePost from './pages/Blog/SinglePost';
import ToTopButton from './components/ToTopButton/ToTopButton';
import './App.css';

// Komponent strony głównej wykorzystujący one-page scroll
const MainPage = () => {
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

// Główny komponent aplikacji z konfiguracją routingu
const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Strona główna z one-page scroll */}
          <Route path="/" element={<MainPage />} />
          {/* Strona bloga */}
          <Route path="/blog" element={<Blog />} />
          {/* Pojedynczy wpis blogowy */}
          <Route path="/blog/:slug" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
