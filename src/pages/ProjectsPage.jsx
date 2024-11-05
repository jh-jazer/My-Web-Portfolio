import Navbar from '../components/Navbar';
import { motion } from 'framer-motion'; 
import startupImg from '../assets/startupext.png'; 
import deeptokImg from '../assets/deeptok.png'; 
import fastfoodImg from '../assets/fastfood.png'; 
import Footer from '../components/Footer';

import React from 'react';

const ProjectsPage = () => {
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="glass-projects my-20 px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <img 
              src={startupImg} 
              alt="InspireSpace" 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />

            <h3 className="text-xl text-white font-semibold mb-2">InspireSpace</h3>
            <p className="text-gray-300 mb-4">
              A dynamic online platform designed to ignite creativity and foster collaboration among hobbyists. It serves as a hub for discovering new interests, sharing ideas, and connecting with like-minded individuals, empowering users to explore their passions and unleash their creative potential.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Built with: HTML, CSS, JavaScript</a>
          </motion.div>

          {/* Project Card 2 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <img 
              src={deeptokImg} 
              alt="Deeptok" 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />

            <h3 className="text-xl text-white font-semibold mb-2">Deeptok</h3>
            <p className="text-gray-300 mb-4">
              A responsive web application designed to generate unique questions that inspire deep and meaningful conversations, fostering connection and engagement among users.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Built with: Vite, React, Tailwind CSS</a>
          </motion.div>

          {/* Project Card 3 */}
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <img 
              src={fastfoodImg} 
              alt="Fastfood" 
              className="w-full h-40 object-cover rounded-lg mb-4" 
            />

            <h3 className="text-xl text-white font-semibold mb-2">Fastfood Management System</h3>
            <p className="text-gray-300 mb-4">
              It enables efficient management of menu items, order processing, and customer interactions. The system features a user-friendly interface that allows staff to quickly take orders, update inventory, and process payments, enhancing the overall customer experience.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Built with: Java</a>
          </motion.div>
         
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default ProjectsPage;
