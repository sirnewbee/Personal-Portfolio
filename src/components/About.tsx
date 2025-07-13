import React from 'react';
import { Code, Palette, Rocket, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-forest-600 dark:text-primary-400" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: <Palette className="w-8 h-8 text-forest-700 dark:text-primary-500" />,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user experiences"
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary-600 dark:text-primary-400" />,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />,
      title: "Passion",
      description: "Genuinely love what I do and it shows in my work"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-forest-600 to-forest-800 dark:from-primary-400 dark:to-forest-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Hello! I'm a passionate developer who loves creating digital experiences.
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With 7 years of experience in web development, I specialize in creating 
                modern, responsive, and user-friendly applications. I have a strong background 
                in both front-end and back-end technologies, allowing me to build complete 
                solutions from concept to deployment.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, working out, skateboarding, or simply having a barbeque with my friends. 
                I try to find the balance of what is necessary, and what keeps my body and mind healthy.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-forest-100 dark:bg-forest-900 text-forest-800 dark:text-forest-200 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium">
                  Detail Oriented
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">Mandaue City, Philippines</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300">7+ years in web development</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h4>
                <p className="text-gray-600 dark:text-gray-300">Open to new opportunities</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg dark:hover:shadow-2xl transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{highlight.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;