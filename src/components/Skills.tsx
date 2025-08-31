import React from 'react';
import { Code, Palette, Smartphone,} from 'lucide-react';

interface SkillsProps {
  isDarkMode: boolean;
}

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: Skill[];
  color: string;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
  const cardClasses = isDarkMode 
    ? 'bg-gray-800 border-gray-700' 
    : 'bg-white border-gray-200 shadow-lg';

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', level: 95, color: 'from-orange-500 to-red-500' },
        { name: 'CSS3', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-yellow-500' },
        { name: 'React.js', level: 90, color: 'from-cyan-400 to-cyan-500' },
        { name: 'Bootstrap', level: 85, color: 'from-green-400 to-green-500' },
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Figma', level: 88, color: 'from-purple-500 to-pink-500' },
        { name: 'Framer', level: 82, color: 'from-pink-500 to-purple-600' },
        { name: 'Wireframing', level: 75, color: 'from-blue-600 to-blue-800' },
        { name: 'Illustrator', level: 70, color: 'from-orange-500 to-yellow-500' },
        { name: 'Wireframing', level: 85, color: 'from-gray-500 to-gray-200' },
        { name: 'Prototyping', level: 87, color: 'from-indigo-500 to-purple-500' },
      ]
    },
    {
      title: 'AI tools Exploring',
      icon: Smartphone,
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'Chat gpt', level: 80, color: 'from-cyan-400 to-blue-500' },
        { name: 'Claude', level: 75, color: 'from-blue-400 to-cyan-500' },
        { name: 'Bolt.new', level: 70, color: 'from-gray-600 to-gray-300' },
        { name: 'Cursor & more', level: 72, color: 'from-green-500 to-green-600' },
      ]
    }
  ];

  const getAnimationDelay = (categoryIndex: number, skillIndex: number): string => {
    const totalDelay = categoryIndex * 200 + skillIndex * 100;
    return `animation-delay-${Math.min(totalDelay, 1500)}`;
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="scroll-animate slide-in-from-bottom text-4xl md:text-5xl font-bold mb-6">
            Skills & Technologies
          </h2>
          <div className="scroll-animate slide-in-from-bottom animation-delay-200 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="scroll-animate slide-in-from-bottom animation-delay-400 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`scroll-animate slide-in-from-bottom ${getAnimationDelay(categoryIndex, 0)}`}>
              <div className={`p-8 rounded-xl ${cardClasses} border transition-all duration-300 hover:shadow-xl`}>
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out skill-bar`}
                          style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="scroll-animate slide-in-from-bottom animation-delay-1000 mt-16 text-center">
          <div className={`inline-flex items-center space-x-8 px-8 py-4 rounded-full ${cardClasses} border`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">30+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500">1+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-500">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;