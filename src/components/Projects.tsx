import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200 shadow-lg';

  const projects: Project[] = [
    {
      title: 'News-Hub',
      description: 'A front-end news aggregation platform with real-time updates, user authentication, and personalized feeds.',
      image: 'https://images.pexels.com/photos/3708525/pexels-photo-3708525.jpeg',
      technologies: ['React', 'Tailwind CSS', 'API'],
      github: 'https://github.com/SkSohelPasha/News_Hub.git',
      live: 'https://sksohelpasha.github.io/News_Hub/'
    },
    {
      title: 'WellHaven-Health Services',
      description: 'A collaborative health services platform with an AI Assistant, Patient Management, and Online appointment booking Website.',
      image: 'https://i.pinimg.com/1200x/33/d8/a1/33d8a18e344538f97f60e4283b194632.jpg',
      technologies: ['React.js', 'AI Assistant', 'Tailwind CSS'],
      github: 'https://github.com/SkSohelPasha/HealthCare-Services.git',
      live: 'https://sksohelpasha.github.io/HealthCare-Services/'
    },
    {
      title: 'Human Resource Management System Design using UI/UX',
      description: 'A comprehensive HR management platform with employee tracking, payroll management, and performance evaluation.',
      image: 'https://i.pinimg.com/1200x/e4/b6/80/e4b680260515c9a4fc7385753b7e8c47.jpg',
      technologies: ['Figma', 'Prototype', 'Design to code','Wireframing', 'User Flows'],
      github: '#',
      live: 'https://nougat-great-07845497.figma.site'
    },
    {
      title: 'Banking Website Redesign',
      description: 'A comprehensive banking website redesign with a focus on user experience and modern design principles.',
      image: 'https://i.pinimg.com/1200x/fa/c2/73/fac2732bc056e81c9cf5528f2b0f6778.jpg',
      technologies: ['Figma', 'Prototype', 'Design to code','Wireframing', 'User Flows'],
      github: '#',
      live: 'https://wifi-ruby-66711661.figma.site/login'
    },
    {
      title: 'My New LLM Chatbot- Latia AI',
      description: 'An AI-powered chatbot for personalized learning experiences and student support.',
      image: 'https://i.pinimg.com/736x/48/b9/c3/48b9c3fa98a4f786b073345dd4d2c2f3.jpg',
      technologies: ['AI tools', 'Prompting', 'Chatbot Training', 'Designing', 'Zero code'],
      github: '#',
      live: 'https://app.agentx.so/shared-chat/?agent=688b07465ec85578f8b87708'
    },
    {
      title: 'A Job Application AI Assistant',
      description: 'An AI-powered assistant to help users with job applications, resume building, and interview preparation.',
      image: 'https://i.pinimg.com/1200x/a3/9a/dc/a39adcb5721589d3412530fbda1beee7.jpg',
      technologies: ['Relevance.ai', 'AI tools', 'Prompting', 'Zero code'],
      github: '#',
      live: 'https://app.relevanceai.com/agents/f1db6c/c9fe8a35-1ec3-4ef5-ab5f-98ffa98366ab/14e8dd1c-dc6b-409d-bcf7-d994bad1ad3b/embed-chat?starting_message_prompts=Hello%21+How+can+I+Assist+you+today%3F&hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Check+Job+openings&hide_logo=false&hide_description=false'
    }
  ];

  const getAnimationDelay = (index: number): string => {
    const delays = ['animation-delay-200', 'animation-delay-400', 'animation-delay-600', 'animation-delay-800', 'animation-delay-1000', 'animation-delay-1200'];
    return delays[index] || '';
  };

  const shouldShowGithub = (title: string): boolean => {
    const lower = title.toLowerCase();
    return !lower.includes('ui/ux') && !lower.includes('design') && !lower.includes('ai');
  };

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="scroll-animate slide-in-from-bottom text-4xl md:text-5xl font-bold mb-6">
            Projects
          </h2>
          <div className="scroll-animate slide-in-from-bottom animation-delay-200 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`scroll-animate scale-in ${getAnimationDelay(index)} group`}>
              <div className={`rounded-xl overflow-hidden ${cardClasses} border transition-all duration-300 hover:shadow-xl hover:scale-105`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-4 leading-relaxed`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {shouldShowGithub(project.title) && project.github !== '#' && (
                      <a 
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    )}
                    <a 
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
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

export default Projects;