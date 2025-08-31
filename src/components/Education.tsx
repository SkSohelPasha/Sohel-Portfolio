import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationProps {
  isDarkMode: boolean;
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description: string;
  achievements: string[];
  coursework: string[];
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200 shadow-lg';

  const education: EducationItem[] = [
    {
      degree: 'Bachelor of Computer Science and Technology in AIML',
      school: 'Vijaya Engineering College,Thanikella',
      period: '2022 - 2026',
      description: 'Comprehensive study of software development principles, data structures, and computer systems.',
      achievements: ['Websites creation','Web Design', 'Mini ML project', 'AI course completion'],
      coursework: ['Data Structures', 'Object-Oriented Programming', 'Web Development', 'Computer Networks']
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="scroll-animate slide-in-from-bottom text-4xl md:text-5xl font-bold mb-6">
            Education
          </h2>
          <div className="scroll-animate slide-in-from-bottom animation-delay-200 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className={`scroll-animate slide-in-from-right ${index === 0 ? 'animation-delay-200' : index === 1 ? 'animation-delay-400' : 'animation-delay-600'} mb-12 last:mb-0`}>
              <div className={`p-8 rounded-xl ${cardClasses} border transition-all duration-300 hover:shadow-xl`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />
                      <h3 className="text-2xl font-bold">{edu.degree}</h3>
                    </div>
                    <p className="text-xl text-purple-500 font-semibold mb-2">{edu.school}</p>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} leading-relaxed mb-4`}>
                      {edu.description}
                    </p>
                  </div>
                  <div className={`mt-2 md:mt-0 md:ml-6 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {edu.period}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-yellow-500" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} text-sm flex items-center`}>
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-green-500" />
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="px-2 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;