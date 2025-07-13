import React from 'react';
import { Code, Database, Globe, Smartphone, Palette, Cog } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-forest-600 dark:text-primary-400" />,
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 75 },
        { name: "JavaScript", level: 95 },
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "Backend",
      skills: [
        { name: "PHP", level: 92 },
        { name: "Laravel", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Express.js", level: 60 },
        { name: "Python", level: 50 },
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-forest-700 dark:text-forest-400" />,
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "REST APIs", level: 90 },
        { name: "WebSocket", level: 75 },
        { name: "PWA", level: 78 },
        { name: "Stripe", level: 80 },
        { name: "OpenAI", level: 97 },
        { name: "Gemini", level: 97 },
        { name: "Anthropic", level: 97 },
      ]
    },
    {
      icon: <Cog className="w-8 h-8 text-gray-700 dark:text-gray-400" />,
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 70 },
        { name: "GCP", level: 80 },
        { name: "CI/CD", level: 82 },
        { name: "AWS", level: 50 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-forest-600 to-forest-800 dark:from-primary-400 dark:to-forest-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-200">
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-forest-600 to-forest-800 dark:from-primary-400 dark:to-forest-400 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Other Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Slack', 'Sass', 'Google Suites', 'Office365', 'Figma', 'Jira', 'Slack', 'VS Code', 'Postman', 'YouTrack'].map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-md hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;