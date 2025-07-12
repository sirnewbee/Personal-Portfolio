import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Kawin Cheong</h3>
              <p className="text-gray-400 dark:text-gray-500">
                Building digital experiences that make a difference.
              </p>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-forest-600 dark:bg-forest-700 rounded-full hover:bg-forest-700 dark:hover:bg-forest-600 transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          </div>
          
          <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 dark:text-gray-500 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Kawin Cheong
            </p>
            <p className="text-gray-500 dark:text-gray-600 text-sm mt-2">
              © 2024 Kawin Cheong. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;