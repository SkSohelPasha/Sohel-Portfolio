import React from 'react';
import myPhoto from './assets/PortfolioImage.jpeg';

interface HeroProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`floating-circle absolute top-20 left-20 w-32 h-32 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'} rounded-full`}></div>
        <div className={`floating-circle absolute top-40 right-32 w-24 h-24 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/5'} rounded-full animation-delay-10s00`}></div>
        <div className={`floating-circle absolute bottom-32 left-1/4 w-40 h-40 ${isDarkMode ? 'bg-pink-500/10' : 'bg-pink-500/5'} rounded-full animation-delay-2000`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Profile Image */}
          <div className="scroll-animate slide-in-from-left flex justify-center lg:justify-start">
            <div className="w-80 h-80 md:w-96 md:h-96 relative">
              <img 
                src={myPhoto} 
                alt="My Photo" 
                className="w-full h-full rounded-full object-cover border-8 border-blue-500 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 animate-pulse animation-delay-100"></div>
            </div>
          </div>

          {/* Right Side - Name and Details */}
          <div className="text-center lg:text-left">
            <h1 className="scroll-animate slide-in-from-right animation-delay-200 text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Sk.Sohel Pasha
              </span>
            </h1>

            <p className="scroll-animate slide-in-from-right animation-delay-400 text-xl md:text-2xl lg:text-3xl mb-8 text-gray-600 dark:text-gray-300 font-medium">
              Front-end Developer & UI/UX Designer
            </p>

<p className={`text-lg md:text-xl mb-12 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-black-700'} max-w-2xl lg:max-w-none`}>
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              I bring ideas to life through code and design, crafting solutions that make a difference.
            </p>

            <div className="scroll-animate slide-in-from-right animation-delay-800 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white hover:scale-105 text-lg ${isDarkMode ? 'hover:bg-blue-500' : ''}`}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;