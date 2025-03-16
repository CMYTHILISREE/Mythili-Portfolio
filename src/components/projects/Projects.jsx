import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import todo from '../../assets/todo.jpg';
import shoppy from '../../assets/shoppy.jpg';
import youtube from '../../assets/youtube.jpg';
import backend from '../../assets/backend.jpg';
import weather from '../../assets/weather.jpg';
import student from '../../assets/student.jpg';

export default function Projects() {
  const projects = [
    { 
      id: 1, image: todo, title: 'To-Do List App', 
      description: 'A simple and interactive to-do list app with local storage support.', 
      githubLink: 'https://github.com/CMYTHILISREE/To-Do-List'
    },
    { 
      id: 2, image: shoppy, title: 'Shoppy Globe (E-commerce)', 
      description: 'A feature-rich online shopping platform with cart, checkout, and payment integration.', 
      githubLink: 'https://github.com/CMYTHILISREE/ShoppyGlobe-React'
    },
    { 
      id: 3, image: youtube, title: 'YouTube Clone', 
      description: 'A full-fledged video-sharing platform with search, playback, and user authentication.', 
      githubLink: 'https://github.com/CMYTHILISREE/YoutubeClone'
    },
    { 
      id: 4, image: weather, title: 'Weather Forecast App', 
      description: 'A real-time weather forecast app using OpenWeather API with interactive UI.', 
      githubLink: 'https://github.com/CMYTHILISREE/Weather-Forecast-Project'
    },
    { 
      id: 5, image: student, title: 'Student Registration (CRUD)', 
      description: 'A form with Create, Read, Update, and Delete operations for student data management.', 
      githubLink: 'https://github.com/CMYTHILISREE/Student-Registration-System'
    },
    { 
      id: 6, image: backend, title: 'Backend Projects', 
      description: 'Includes RESTful APIs, database management, authentication, and more.', 
      githubLink: 'https://github.com/CMYTHILISREE/SHOPPYGLOBE-Backend'
    },
  ];

  return (
    <section id="projects" className="relative overflow-hidden flex flex-col text-white body-font bg-gray-900 py-24">
      <div className="container px-5 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-400">My Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="p-4"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="h-full border-2 border-orange-400 shadow-lg border-opacity-60 rounded-lg overflow-hidden bg-gray-800">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover object-center" />
                <div className="p-6">
                  <h2 className="text-xl font-medium text-orange-400 mb-1">{project.title}</h2>
                  <p className="leading-relaxed mb-3">{project.description}</p>
                  <div className="flex justify-center">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                      className="text-gray-300 hover:text-white flex items-center space-x-2">
                      <FaGithub /> <span>GitHub Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
