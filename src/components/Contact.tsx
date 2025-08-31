import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="scroll-animate slide-in-from-bottom text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <div className="scroll-animate slide-in-from-bottom animation-delay-200 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className={`scroll-animate slide-in-from-bottom animation-delay-400 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} max-w-2xl mx-auto`}>
            I'm always open to discussing new opportunities, creative projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="scroll-animate slide-in-from-left">
            <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
    <Mail className="w-6 h-6 text-white" />
  </div>
  <div>
    <p className="font-semibold">Email</p>
    <a
      href="mailto:sohelpasha019@gmail.com"
      className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300`}
    >
      sohelpasha019@gmail.com
    </a>
  </div>
</div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                    <a
                      href="tel:+918501858505"
                      className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-blue-500 transition-colors duration-300`}
                    >
                      +91 8501858505
    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Khammam, Telangana</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
  href="https://www.linkedin.com/in/shaik-s-68717b268/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white hover:scale-110 transition-transform duration-300"
>
  <Linkedin className="w-6 h-6" />
</a>
                <a
  href="https://github.com/SkSohelPasha"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg text-white hover:scale-110 transition-transform duration-300"
>
  <Github className="w-6 h-6" />
</a>
                <a
  href="https://x.com/SkSohelPasha"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg text-white hover:scale-110 transition-transform duration-300"
>
  <Twitter className="w-6 h-6" />
</a>
                <a
  href="https://www.instagram.com/sk.sohelpasha/"
  target="_blank"
  rel="noopener noreferrer"
  className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-white hover:scale-110 transition-transform duration-300"
>
  <Instagram className="w-6 h-6" />
</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-animate slide-in-from-right">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;