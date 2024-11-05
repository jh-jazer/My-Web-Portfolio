import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logoi.png';
import nightmod1 from '../assets/nightmod1.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNightModeClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className='h-[96px] glass px-8 text-gray-300 max-w-[1200px] flex justify-between items-center mx-auto mt-3 z-50 relative'>
      <Link to="/">
        <img src={logo} alt='logo' className='logo' />
      </Link>

      <ul className='hidden md:flex'>
        <li className='p-3 hover:text-white transition duration-300'>
          <Link to="/AboutPage">ABOUT</Link>
        </li>
        <li className='p-3 hover:text-white transition duration-300'>
          <Link to="/ProjectsPage">PROJECTS</Link>
        </li>
        <li className='p-3 hover:text-white transition duration-300'>
          <Link to="/ContactsPage">CONTACT</Link>
        </li>
        <img 
          className='icon cursor-pointer' 
          src={nightmod1} 
          alt='night mode toggle' 
          onClick={handleNightModeClick}
        />
      </ul>

      <div onClick={handleNav} className='block md:hidden text-gray-300 fixed right-10 top-8 z-50'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>

      <div className={nav ? 'text-gray-300 z-40 fixed left-0 top-0 w-full bg-[#232323] ease-in-out duration-500' : 'fixed left-[100%] z-40'}>
        <ul className='p-8 text-4xl ml-20 z-50'>
          <li className='p-2'><Link to="/">Home</Link></li>
          <li className='p-2'><Link to="/AboutPage">About</Link></li>
          <li className='p-2'><Link to="/ProjectsPage">Projects</Link></li>
          <li className='p-2'><Link to="/ContactsPage">Contact</Link></li>
        </ul>
      </div>

      {/* Message for night mode feature */}
      {showMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-300 p-4 rounded shadow-lg z-50">
          This feature is still in development!
        </div>
      )}
    </div>
  );
};

export default Navbar;
