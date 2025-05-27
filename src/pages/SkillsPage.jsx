import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Skills = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
      <div>
      <Navbar />
      <motion.div
        className="glass-projects max-w-5xl mx-auto p-8 mt-10 rounded-lg text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
         <div className="flex items-center mb-10 mt-0">
          <motion.h1 className="text-5xl text-left ml-[20%] mr-7 font-extrabold text-gray-100" variants={slideIn}>
            Skills
          </motion.h1>
          <div className="border-l-2 mt-[40px] border-gray-400 h-40 mx-6"></div>
          <motion.div className="text-xl mt-[120px] text-left text-gray-300 leading-relaxed tracking-wide hidden md:block" variants={fadeIn}>
            <p className="ml-4">
"The future belongs to those who learn more skills and combine them in creative ways."
— Robert Greene            </p>
          </motion.div>
        </div>
        <motion.section className="mb-16 text-left" variants={fadeIn}>
          <div className="space-y-5 ml-6">
            <div className="flex items-start text-gray-300">
              <FaCode className="text-blue-400 text-3xl mr-4 mt-1" />
              <p><strong>Programming Languages:</strong> JavaScript, HTML, CSS, Python, Java</p>
            </div>
            <div className="flex items-start text-gray-300">
              <FaTools className="text-blue-400 text-3xl mr-4 mt-1" />
              <p><strong>Frameworks & Libraries:</strong> React, Tailwind CSS, Flask, Vite, Node.js</p>
            </div>
            <div className="flex items-start text-gray-300">
              <FaPaintBrush className="text-blue-400 text-3xl mr-4 mt-1" />
              <p><strong>Design Tools:</strong> Figma, Canva, Adobe Photoshop</p>
            </div>
            <div className="flex items-start text-gray-300">
              <FaTools className="text-blue-400 text-3xl mr-4 mt-1" />
              <p><strong>Version Control:</strong> Git, GitHub</p>
            </div>
          </div>
        </motion.section>
  

        {/* Link to Projects */}
        <motion.div className="flex justify-center mt-8" variants={fadeIn}>
          <p className="text-base text-white">
            <Link to="/projects" className="font-bold hover:text-blue-500 transition duration-200">
              See My Projects &rarr;
            </Link>
          </p>
        </motion.div>

       {/* Final Statement */}
        <motion.p className="text-lg text-gray-300 leading-relaxed tracking-wide mt-12" variants={fadeIn}>
          I strive for clean, minimalist designs that emphasize functionality and elegance. With a commitment to innovation and creativity, I aim to craft experiences that truly resonate.
        </motion.p>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Skills;
