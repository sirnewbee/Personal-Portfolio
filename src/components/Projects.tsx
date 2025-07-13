import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sectorsift",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and secure payment processing.",
      image: "https://drive.google.com/thumbnail?id=1w08tzYKI2vDtA-4_uq3UQ_ccP2oRZu-2&sz=w800",
      technologies: ["React", "Laravel", "MySQL", "Stripe", "JWT", "Gemini", "Google Places", "Google Search", "Tailwind CSS", "GCP"],
      liveUrl: "https://login.sectorsift.com/",
      githubUrl: "https://github.com/sirnewbee/Sectorsift-Frontend",
      date: "2023"
    },
    {
      id: 2,
      title: "Felix Sales Queue",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and secure payment processing.",
      image: "https://drive.google.com/thumbnail?id=1y3F5S-O7AxhLV9-WgbPzAoFiZtPEbdLO&sz=w800",
      technologies: ["React", "Laravel", "MySQL", "Gemini", "OpenAI", "AWS"],
      liveUrl: "https://felix.sectorsift.com/",
      githubUrl: "https://github.com/sirnewbee/Felix-Sales-Queue",
      date: "2025"
    },
    {
      id: 3,
      title: "ZoomRPM",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
      image: "https://drive.google.com/thumbnail?id=1kmgDQn7tGmpTzJ9RzGDX1QVuwG4GVdIc&sz=w800",
      technologies: ["React", "Laravel", "Tailwind CSS", "MySQL", "GCP", "SQL"],
      liveUrl: null,
      githubUrl: "https://github.com/sirnewbee/ZoomRPM",
      date: "2022"
    },
    {
      id: 4,
      title: "ManagedPMO",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical data visualization. Integrates with multiple weather APIs.",
      image: "https://drive.google.com/thumbnail?id=19mk7Yhf83hp8yu9-M24m81XsCF2Yck4i&sz=w800",
      technologies: ["Jquery", "Laravel", "MySQL", "GCP"],
      liveUrl: "https://pmo.mandanibay.com/login-mandanibay.html",
      githubUrl: "https://github.com/sirnewbee/ManagedPMO---Frontend",
      date: "2019"
    },
    {
      id: 5,
      title: "Jomalia Shipping Lines",
      description: "A modern, responsive portfolio website with smooth animations and optimized performance. Built with React and deployed on Netlify.",
      image: "https://drive.google.com/thumbnail?id=1TUm_eQ6LKfBPZYhcbXmtJlp7B8ZxUThv&sz=w800",
      technologies: ["React", "Laravel", "Ant Design", "MySQL", "GCP"],
      liveUrl: null,
      githubUrl: "https://github.com/sirnewbee/JomaliaShipping",
      date: "2023"
    },
    {
      id: 6,
      title: "Catch the Dot",
      description: "A modern, responsive portfolio website with smooth animations and optimized performance. Built with React and deployed on Netlify.",
      image: "https://drive.google.com/thumbnail?id=1n6VVZkFLY78I4J3kvxiE_BpMovjK_s2t&sz=w800",
      technologies: ["React"],
      liveUrl: "https://sirnewbee.github.io/reactjs-catch-dot/",
      githubUrl: "https://github.com/sirnewbee/reactjs-catch-dot",
      date: "2021"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-forest-600 to-forest-800 dark:from-primary-400 dark:to-forest-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-forest-100 dark:bg-forest-900 text-forest-800 dark:text-forest-200 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    {
                      project.liveUrl ?
                      <>
                        <a 
                          href={project.liveUrl ? project.liveUrl : undefined}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 bg-forest-700 dark:bg-forest-600 text-white rounded-lg hover:bg-forest-800 dark:hover:bg-forest-700 transition-colors duration-200 font-medium"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </>
                      :
                      <></>
                    }
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://github.com/sirnewbee"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;