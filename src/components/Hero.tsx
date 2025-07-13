import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-forest-50 dark:from-gray-900 dark:via-gray-900 dark:to-forest-950">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 pt-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-forest-700 to-forest-900 dark:from-forest-600 dark:to-forest-800 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              KC
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-forest-700 to-forest-900 dark:from-primary-400 dark:to-forest-400 bg-clip-text text-transparent">
                Kawin Cheong
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              I create functional, and user-centered digital experiences. 
              Passionate about clean code, innovative design, and solving complex problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-3 bg-forest-700 dark:bg-forest-600 text-white rounded-lg font-semibold hover:bg-forest-800 dark:hover:bg-forest-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Learn More
            </button>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/sirnewbee"
              target='_blank'
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-forest-600 dark:hover:text-primary-400"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kawin-cheong-96bb63158/"
              target='_blank'
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-forest-600 dark:hover:text-primary-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:cheong.kawin@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-forest-600 dark:hover:text-primary-400"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 dark:text-gray-500 hover:text-forest-600 dark:hover:text-primary-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;