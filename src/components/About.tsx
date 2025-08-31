import React from 'react';
import { Award, Calendar, User } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200 shadow-lg';

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="scroll-animate slide-in-from-bottom text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>
          <div className="scroll-animate slide-in-from-bottom animation-delay-200 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
<div className={`scroll-animate slide-in-from-left text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            <p className="mb-6">
              I'm a passionate Front-end Developer and Ui/Ux desiginer with over 1 years of experience in creating 
              digital solutions that make a difference. My journey in tech started with a curiosity 
              about how things work, and it has evolved into a career dedicated to building 
              innovative web applications and user experiences.
            </p>
            <p className="mb-6">
              I specialize in modern web technologies including React.js, and cloud platforms. 
              My approach combines technical expertise with creative problem-solving to deliver 
              solutions that are not only functional but also beautiful and user-friendly.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community through 
              blog posts and mentoring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className={`scroll-animate scale-in text-center p-6 rounded-xl ${cardClasses} border transition-all duration-300 hover:scale-105`}>
              <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">5+</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </div>
            <div className={`scroll-animate scale-in animation-delay-200 text-center p-6 rounded-xl ${cardClasses} border transition-all duration-300 hover:scale-105`}>
              <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1</h3>
              <p className="text-gray-600 dark:text-gray-400">Year Experience</p>
            </div>
            <div className={`scroll-animate scale-in animation-delay-400 text-center p-6 rounded-xl ${cardClasses} border transition-all duration-300 hover:scale-105`}>
              <User className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">10+</h3>
              <p className="text-gray-600 dark:text-gray-400">AI tools Explore</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;