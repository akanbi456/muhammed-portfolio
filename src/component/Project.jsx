import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import {Projects} from './data/Projects'
const Project = () => {
  return (
    <section id="project" className="px-4 py-16 bg-gray-50 dark:bg-gray-900">
      
          <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl">My Projects</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A selection of my recent work, showcasing my skills and passion for frontend development.
            </p>
          </div>
        </div>
        <div className="grid items-start max-w-5xl gap-6 py-12 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {Projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition bg-white shadow-lg dark:bg-gray-800 rounded-2xl hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    Live Demo <FaExternalLinkAlt className="ml-1" />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:underline"
                  >
                    Code <FaGithub className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}

export default Project