import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import cvsuImg from '../assets/cvsu 1.jpg';  
import gameImg from '../assets/game.jpg';// Import the new project image
import Footer from '../components/Footer';
import { SiReact, SiTailwindcss, SiFigma, SiPython } from 'react-icons/si';
import { FaGamepad } from 'react-icons/fa'; // Use FaGamepad for game dev


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
        >
          <img 
            src={cvsuImg} 
            alt="Cvsu Dashboard Design project thumbnail" 
            className="w-full h-40 object-cover rounded-lg mb-4" 
          />
          <h3 className="text-xl text-white font-semibold mb-2">CvSU Bacoor Portal</h3>
          <p className="text-gray-300 mb-4">
is a responsive university portal built with React and Tailwind CSS. It provides an easy-to-use interface for managing courses, grades, and announcements, offering a clean, efficient hub for students and staff.          </p>

          {/* 🔧 Technology Icons Section */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center text-gray-300 gap-2">
              <SiReact size={24} title="React" />
              <SiTailwindcss size={24} title="Tailwind CSS" />
              <SiFigma size={24} title="Figma" />
            </div>
          </div>

          <a 
            href="https://cvsu-system.vercel.app/" 
            className="text-blue-500 hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </motion.div>

        <motion.div 
  className="bg-gray-800 p-6 rounded-lg shadow-lg"
  whileHover={{ scale: 1.05 }}
  initial="hidden"
  animate="visible"
  variants={cardVariants}
>
  <img 
    src={gameImg} 
    alt="World: Last Light game thumbnail" 
    className="w-full h-40 object-cover rounded-lg mb-4" 
  />
  <h3 className="text-xl text-white font-semibold mb-2">World Last Light</h3>
  <p className="text-gray-300 mb-4">
A narrative-driven 2D game made in Godot. You play as a burned-out student isekai’d into a collapsing world. Features custom combat, UI, and immersive story design focused on survival and mental resilience.  </p>

  {/* 🔧 Technology Icons Section */}
  <div className="flex items-center gap-4 mb-4">
    <div className="flex items-center text-gray-300 gap-2">
      <FaGamepad size={24} title="Godot Engine" />
      <SiPython size={24} title="GDScript" />
      <SiFigma size={24} title="Figma" />
    </div>
  </div>

  <a 
    href="https://github.com/jh-jazer/worldlastlight.git" 
    className="text-blue-500 hover:underline" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    View Project
  </a>
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
              <img src={image} alt={`Art project ${index + 1}`} className="w-full h-50 object-cover rounded-lg" />

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
