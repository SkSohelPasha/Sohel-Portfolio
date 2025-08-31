import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { scrollToSection, scrollToTop } from './utils/scrollUtils';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Use custom hook for scroll animations
  useScrollAnimation(setActiveSection, setShowScrollTop);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const themeClasses = isDarkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <Navigation
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        toggleDarkMode={toggleDarkMode}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={handleScrollToSection}
      />

      <Hero 
        isDarkMode={isDarkMode}
        scrollToSection={handleScrollToSection}
      />

      <About isDarkMode={isDarkMode} />

      <Education isDarkMode={isDarkMode} />

      <Experience isDarkMode={isDarkMode} />

      <Skills isDarkMode={isDarkMode} />

      <Projects isDarkMode={isDarkMode} />

      <Contact isDarkMode={isDarkMode} />

      <Footer 
        isDarkMode={isDarkMode}
        scrollToSection={handleScrollToSection}
      />

      <ScrollToTop 
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />
    </div>
  );
}

export default App;