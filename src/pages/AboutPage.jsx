import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import React from 'react';
import Footer from '../components/Footer';

const About = () => {
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
        <div className="flex items-center mb-10 mt-0">
          <motion.h1 className="text-5xl text-left ml-[20%] mr-7 font-extrabold text-gray-100" variants={slideIn}>
            About Me
          </motion.h1>
          <div className="border-l-2 mt-[40px] border-gray-400 h-40 mx-6"></div>
          <motion.div className="text-xl mt-[120px] text-left text-gray-300 leading-relaxed tracking-wide hidden md:block" variants={fadeIn}>
            <p className="ml-4">
              I'm dedicated to designing visually captivating and highly functional web interfaces, combining creativity with a deep understanding of development.
            </p>
          </motion.div>
        </div>

        <motion.div className="text-lg text-left ml-8 mb-[100px] text-gray-300 leading-relaxed tracking-wide" variants={fadeIn}>
          <p>
            Hi, I'm <span className="text-blue-400">Ej Desabillle</span>, a Computer Science student with a passion for front-end development, web design, and graphic design. I bring ideas to life using frameworks and tools that allow for seamless, aesthetic user experiences.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 gap-6 ml-[20%] mt-[50px] mb-[100px] justify-center" variants={fadeIn}>
          <div className="flex text-gray-300 text-left items-center ">
            <FaCode className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Programming Languages:</strong> JavaScript, HTML, CSS, Python, Java</span>
          </div>
          <div className="flex text-gray-300 text-left items-center ">
            <FaTools className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Frameworks:</strong> React, Tailwind CSS, Flask, Vite, Node.js</span>
          </div>
          <div className="flex text-gray-300 text-left items-center ">
            <FaPaintBrush className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Design Tools:</strong> Figma, Canva, Adobe Photoshop</span>
          </div>
          <div className="flex text-gray-300 text-left items-center ">
            <FaTools className="text-blue-400 text-3xl mr-3" />
            <span> <strong>Version Control:</strong> Git, GitHub</span>
          </div>
        </motion.div>

        <motion.p className="text-lg text-gray-300 leading-relaxed tracking-wide mb-6" variants={fadeIn}>
          I strive for clean, minimalist designs that emphasize functionality and elegance. With a commitment to innovation and reliability, I'm excited to bring projects to life with precision and creativity.
        </motion.p>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
