import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-gray-100 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="text-lg font-semibold text-gray-800 dark:text-white">
            &copy; 2025 <em>Muhammed</em>. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/YourUsername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/akanbi-muhammed-33600a37a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400" />
            </a>
           <a href="mailto:muhammedakanbi041@gmail.com" target='blank' rel='noopener noreferrer'>
  <FaEnvelope className="w-5 h-5 text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400" />
</a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
