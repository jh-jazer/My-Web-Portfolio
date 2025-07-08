import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaPaintBrush, FaStar, FaCubes, FaPencilRuler, FaCodeBranch, FaLaptopCode } from 'react-icons/fa';
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
      <p>
        <strong>Programming & Scripting:</strong> Proficient in JavaScript, HTML, CSS, Python, and Java — suitable for both web development and academic computing tasks.
      </p>
    </div>
    <div className="flex items-start text-gray-300">
      <FaCubes className="text-blue-400 text-3xl mr-4 mt-1" />
      <p>
        <strong>Frameworks & Libraries:</strong> Experienced in React, Tailwind CSS, Flask, Vite, and Node.js — enabling full-stack web development and rapid prototyping.
      </p>
    </div>
    <div className="flex items-start text-gray-300">
      <FaPencilRuler className="text-blue-400 text-3xl mr-4 mt-1" />
      <p>
        <strong>Design & UI/UX:</strong> Skilled in Figma, Canva, and Adobe Photoshop — with a strong sense for user-centered interface design and digital creativity.
      </p>
    </div>
    <div className="flex items-start text-gray-300">
      <FaCodeBranch className="text-blue-400 text-3xl mr-4 mt-1" />
      <p>
        <strong>Version Control & Collaboration:</strong> Familiar with Git and GitHub — supporting agile workflows, collaboration, and project management.
      </p>
    </div>
    <div className="flex items-start text-gray-300">
      <FaLaptopCode className="text-blue-400 text-3xl mr-4 mt-1" />
      <div>
       <p className="font-bold">Tech Versatility:</p>
       
    <ul className="list-disc list-inside">
      <li>Comfortable with both frontend and backend workflows</li>
      <li>Experience in cross-functional development and design roles</li>
      <li>Strong foundation in problem-solving and adaptability</li>
      <li>Developed 2D and 3D games using Godot — combining programming, UI design, and logic systems</li>
    </ul>
    </div>
    </div>

    {/* NEW SECTION: Other Skills */}
    <div className="flex items-start text-gray-300">
      <FaStar className="text-blue-400 text-3xl mr-4 mt-1" />
       <div>
        <p className="font-bold">Other Skills & Interests:</p>
        <ul className="list-disc list-inside">
          <li>
            Typing speed: 
            <a href="https://monkeytype.com/profile/E_Dyiy" target="_blank" className="underline text-blue-300 hover:text-blue-200"> 90+ WPM
            </a>
          </li>
          <li>
            Chess: 
             in top 0.3% globally in rapid chess (
            <a href="https://www.chess.com/member/jcedjank/stats/rapid" target="_blank" className="underline text-blue-300 hover:text-blue-200">
              Chess.com
            </a>)
          </li>
          <li>
  Grew an Instagram account to 
  <a href="https://www.instagram.com/jh_evan/" target="_blank" className="underline text-blue-300 hover:text-blue-200"> 3,500+ followers
  </a> in 2024 by applying strategic content creation and engagement techniques
</li>

        </ul>
      </div>
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
I strive to continuously expand my expertise across the diverse domains of Computer Science and Information Technology — from software development and UI/UX design to systems thinking and data-driven problem solving. With a strong foundation in both technical and creative disciplines, I’m committed to building clean, functional, and user-centered solutions that reflect innovation, efficiency, and thoughtful design.        </motion.p>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Skills;
