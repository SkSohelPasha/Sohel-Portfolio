import React from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <footer className={`py-12 border-t ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
      <div className="container mx-auto px-6 text-center">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Sk.Sohel Pasha
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} mb-4 leading-relaxed`}>
              Front-end Developer and Ui/Ux designer passionate about creating innovative digital solutions. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
  href="https://www.linkedin.com/in/shaik-s-68717b268/"
  target="_blank"
  rel="noopener noreferrer"
className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300`}>
  <Linkedin className="w-5 h-5" />
</a>

<a
  href="https://github.com/SkSohelPasha"
  target="_blank"
  rel="noopener noreferrer"
className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300 text-left`}>
  <Github className="w-5 h-5" />
</a>

<a
  href="https://x.com/SkSohelPasha"
  target="_blank"
  rel="noopener noreferrer"
className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300 text-left`}>
  <Twitter className="w-5 h-5" />
</a>

<a
  href="https://www.instagram.com/sk.sohelpasha/"
  target="_blank"
  rel="noopener noreferrer"
className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300 text-left`}>
  <Instagram className="w-5 h-5" />
</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300 text-left`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-800'}`}>
              <li>Web Development</li>
              <li>Mobile Apps designing</li>
              <li>UI/UX Design</li>
              <li>AI Tools Explore</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} mb-4 md:mb-0`}>
            © 2024 Sk.Sohel Pasha. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300`}>
              Privacy Policy
            </a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300`}>
              Terms of Service
            </a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300`}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;