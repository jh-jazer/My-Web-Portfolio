import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaCode, FaPaintBrush, FaMusic, FaPen, FaCameraRetro } from 'react-icons/fa';
import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <Navbar />
      <motion.div
        className="glass-projects max-w-4xl mx-auto p-8 mt-10 rounded-lg text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Flex container for About Me heading and vertical line */}
        <div className="flex items-center mb-10 mt-0">
          <motion.h1 className="text-5xl text-left ml-[150px] mr-7 font-extrabold text-gray-100" variants={slideIn}>
            About Me
          </motion.h1>
          {/* Vertical line */}
          <div className="border-l-2 mt-[40px] border-gray-400 h-40 mx-6"></div>
          {/* Text on the right side of the vertical line, hidden on tablet and smaller devices */}
          <motion.div className="text-xl mt-[120px] text-left text-gray-300 leading-relaxed tracking-wide hidden md:block" variants={fadeIn}>
            <p className="ml-4">I’m a hobbyist / generalist, developing my skills  <br />  in various fields to reach my full potential.</p>
          </motion.div>
        </div>

        <motion.div className="text-lg text-left ml-8 mb-[100px] text-gray-300 leading-relaxed tracking-wide" variants={fadeIn}>
          <p>
           Hi there! I'm <span className="text-blue-400">Ej Desabillle</span>, a passionate Computer Science student from the Philippines. I love merging technology and creativity to develop innovative solutions that make a difference.
          </p>
        </motion.div>
        

        <motion.div className="grid grid-cols-1 gap-6 ml-[150px] mt-[50px] mb-[100px] justify-center" variants={fadeIn}>
          <div className="flex text-gray-300 text-left items-center ">
            <FaCode className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Programming:</strong> Java, Python, HTML, CSS, JavaScript</span>
          </div>
          <div className="flex text-gray-300 text-left items-center ">
            <FaPaintBrush className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Design Tools:</strong> Figma</span>
          </div>
          <div className="flex text-gray-300 text-left items-center ">
            <FaMusic className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Music:</strong> Guitar and Piano</span>
          </div>
          <div className="flex text-gray-300 text-left items-center ">
            <FaPen className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Writing:</strong> Fictional Novels</span>
          </div>
          <div className="flex text-gray-300 text-left items-center ">
            <FaCameraRetro className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Photography:</strong> Practical interest in photochromic lenses</span>
          </div>
        </motion.div>

        
        <motion.p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-6" variants={fadeIn}>
          I believe in the power of minimalism. My designs focus on simplicity and elegance, allowing ideas to shine through without unnecessary clutter. I strive to inspire others and create connections through my work.
        </motion.p>

      
       
      </motion.div>
      <Footer />
    </div>
  );
  
};

export default About;
