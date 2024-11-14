import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import startupImg from '../assets/startupext.png';
import deeptokImg from '../assets/deeptok.png';
import fastfoodImg from '../assets/fastfood.png';
import Footer from '../components/Footer';
import React from 'react';

// Import art project images
import art1 from '../assets/art1.png';
import art2 from '../assets/art2.png';
import art3 from '../assets/art3.png';
import art4 from '../assets/art4.png';
import art5 from '../assets/art5.png';
import art6 from '../assets/art6.png';
import art7 from '../assets/art7.png';
import art8 from '../assets/art8.png';
import art9 from '../assets/art9.png';
import art10 from '../assets/art10.png';
import art11 from '../assets/art11.png';
import art12 from '../assets/art12.png';

const ProjectsPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const artImages = [art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11, art12];
  const likes = [308, 280, 233, 263, 214, 778, 753, 684, 671, 642, 514, 694];

  // Handler to alert "in development" message
  const handleDevProjectClick = () => {
    alert("This project is still in development.");
  };

  // Handler to open Instagram on art project click
  const handleArtProjectClick = () => {
    window.open("https://www.instagram.com/jh_evan", "_blank");
  };

  return (
    <div>
      <Navbar />
      
      <div className="glass-projects my-20 px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Dev Projects
        </h2>

        {/* Development Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            onClick={handleDevProjectClick}
          >
            <img src={startupImg} alt="InspireSpace" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">InspireSpace</h3>
            <p className="text-gray-300 mb-4">A dynamic online platform designed to ignite creativity and foster collaboration among hobbyists...</p>
            <a href="#" className="text-blue-500 hover:underline">Built with: HTML, CSS, JavaScript</a>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            onClick={handleDevProjectClick}
          >
            <img src={deeptokImg} alt="Deeptok" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">Deeptok</h3>
            <p className="text-gray-300 mb-4">A responsive web application designed to generate unique questions that inspire deep and meaningful conversations...</p>
            <a href="#" className="text-blue-500 hover:underline">Built with: Vite, React, Tailwind CSS</a>
          </motion.div>

          <motion.div 
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            onClick={handleDevProjectClick}
          >
            <img src={fastfoodImg} alt="Fastfood" className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl text-white font-semibold mb-2">Fastfood Management System</h3>
            <p className="text-gray-300 mb-4">It enables efficient management of menu items, order processing, and customer interactions...</p>
            <a href="#" className="text-blue-500 hover:underline">Built with: Java</a>
          </motion.div>
        </div>

        {/* Art Projects Section */}
        <h2 className="text-4xl font-bold text-white text-center my-10">
          Art Projects
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-2 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              onClick={handleArtProjectClick}
            >
              <img src={image} alt={`Art ${index + 1}`} className="w-full h-50 object-cover rounded-lg" />
              
              {/* Like overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{likes[index]} Likes</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
