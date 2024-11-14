import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logoi.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const navbarRef = useRef(null); // Ref for the navbar

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNightModeClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
  };

  // Close the dropdown if clicked outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNav(false); // Close the navbar menu
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='h-[96px] glass px-8 text-gray-300 max-w-[1200px] flex justify-between items-center mx-auto mt-3 z-50 relative' ref={navbarRef}>
      <Link to="/">
        <img src={logo} alt='logo' className='logo' />
      </Link>

      <ul className='hidden md:flex'>
        <li className='p-3 hover:text-white transition duration-300'>
          <Link to="/about">ABOUT</Link>
        </li>
        <li className='p-3 hover:text-white transition duration-300'>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li className='p-3 hover:text-white transition duration-300'>
          <Link to="/contacts">CONTACT</Link>
        </li>
      
      </ul>

      <div onClick={handleNav} className='block md:hidden text-gray-300 fixed right-10 top-8 z-50'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>

      {/* Mobile Menu - Adjusted top position */}
      {nav && (
        <div className='fixed top-0 left-0 w-full h-full bg-[#232323] text-gray-300 z-50 ease-in-out duration-500 flex justify-center items-center pt-[150px]'>
          <div className='w-full'>
            <ul className='text-center text-3xl font-semibold px-8'>
              <li className='p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'>
                <Link to="/" onClick={handleNav} className="block">Home</Link>
              </li>
              <li className='p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'>
                <Link to="/about" onClick={handleNav} className="block">About</Link>
              </li>
              <li className='p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'>
                <Link to="/projects" onClick={handleNav} className="block">Projects</Link>
              </li>
              <li className='p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'>
                <Link to="/contacts" onClick={handleNav} className="block">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      )}

     
    </div>
  );
};

export default Navbar;
