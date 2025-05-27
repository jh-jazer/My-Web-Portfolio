import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import { Link } from "react-router-dom";

const About = () => {
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
            About Me
          </motion.h1>
          <div className="border-l-2 mt-[40px] border-gray-400 h-40 mx-6"></div>
          <motion.div className="text-xl mt-[120px] text-left text-gray-300 leading-relaxed tracking-wide hidden md:block" variants={fadeIn}>
            <p className="ml-4">
              I'm dedicated to designing visually captivating and highly functional web interfaces, combining creativity with a deep understanding of development.
            </p>
          </motion.div>
        </div>
           <div>
          <p className="text-lg text-gray-300 text-left leading-relaxed tracking-wide">
            Hello! I'm <span className="text-blue-400 font-semibold">Ernesto Jr. C. Desabille</span> — or just EJ. I'm currently a third-year Computer Science student with a strong focus on <span className="text-blue-400">front-end development</span>, <span className="text-blue-400">web design</span>, and <span className="text-blue-400">graphic design</span>.
            <br /><br />
          </p>
          </div>

       

        {/* Section 3: Hobbies */}
        <motion.section className="my-16" variants={fadeIn}>
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Hobbies & Passions</h2>
          <p className="text-lg text-gray-300 text-left leading-relaxed tracking-wide">
            When I'm not coding, I turn to art. I'm a visual artist passionate about both digital and traditional media.
            I love sketching, painting, and exploring new visual styles that blend technology and expression.
            <br /><br />
            Art allows me to tell stories beyond code — a brushstroke or a color gradient can speak volumes. My work often merges clean design with personal emotion, whether it's on a digital canvas or a physical sketchpad.
          </p>
        </motion.section>

        {/* Link to Projects */}
        <motion.div className="flex justify-center mt-8" variants={fadeIn}>
          <p className="text-base text-white">
            <Link to="/skills" className="font-bold hover:text-blue-500 transition duration-200">
              See My Skills &rarr;
            </Link>
          </p>
        </motion.div>

        {/* Final Statement */}
       
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
