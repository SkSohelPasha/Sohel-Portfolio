import React from 'react';

interface ExperienceProps {
  isDarkMode: boolean;
}

interface ExperienceItem {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200 shadow-lg';

  const experiences: ExperienceItem[] = [
    {
      title: 'Frontend Developer',
      period: '2024 - Present',
      description: 
      [
        'Led development of responsive web applications serving for users',
        '. Mentored junior developers and established coding standards',
        '. Implemented modern frontend architectures reducing load time by 60%',
        '. Collaborated with design team to create pixel-perfect user interfaces'
      ],
      technologies: ['HTML5', 'CSS3', 'Java Script', 'React.js', 'Bootstrap']
    },
    {
      title: 'UI/UX Designer',
      period: '2024 - Present',
      description:[
        'Designed user interfaces for client-facing web applications',
        '. Conducted user research and usability testing to improve user experience',
        '. Created design systems and component libraries for consistent branding',
        '. Collaborated with development teams to ensure design implementation'
      ],

      technologies: ['Figma', 'Framer', 'Wireframing', 'Typography', '3D Animations']
    },

    {
      title: 'AI tools Exploration',
      period: '2024 - Present',
      description:[
        'A techie who can design, build, and experiment with AI-powered apps.',
        '. Explored AI agent creation using Relevance AI and Lindy',
        '. Deployed and tested AI-powered assistants for workflows',
        '. Integrated automation tools like Retell AI and Zapier'
      ],

      technologies: ['AI tools', 'Prompting', 'Chatbot Training', 'Testing', 'Deployment']
    }
  ];

  return (
    <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="scroll-animate slide-in-from-bottom text-4xl md:text-5xl font-bold mb-6">
            Experience
          </h2>
          <div className="scroll-animate slide-in-from-bottom animation-delay-200 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className={`scroll-animate slide-in-from-left ${index === 0 ? 'animation-delay-200' : index === 1 ? 'animation-delay-400' : 'animation-delay-600'} mb-12 last:mb-0`}>
              <div className={`p-8 rounded-xl ${cardClasses} border transition-all duration-300 hover:shadow-xl`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  </div>
                  <div className={`mt-2 md:mt-0 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {exp.period}
                  </div>
                </div>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-6 leading-relaxed`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;