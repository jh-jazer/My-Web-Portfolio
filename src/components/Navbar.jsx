import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logoi.png';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentPath = location.pathname;

  // Helper function to set active class
  const linkClass = (path) => 
    path === currentPath 
      ? 'p-3 text-white font-bold border-b-2 border-blue-500 transition duration-300'
      : 'p-3 hover:text-white transition duration-300 text-gray-300';

  const mobileLinkClass = (path) =>
    path === currentPath
      ? 'p-6 bg-blue-600 rounded-lg font-bold transition-colors'
      : 'p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-gray-300';

  return (
    <div
      className='h-[96px] glass px-8 text-gray-300 max-w-[1200px] flex justify-between items-center mx-auto mt-3 z-50 relative'
      ref={navbarRef}
    >
      <Link to="/">
        <img src={logo} alt='logo' className='logo' />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        <li className={linkClass('/')}>
          <Link to="/">HOME</Link>
        </li>
        <li className={linkClass('/about')}>
          <Link to="/about">ABOUT</Link>
        </li>
        <li className={linkClass('/skills')}>
          <Link to="/skills">SKILLS</Link>
        </li>
        <li className={linkClass('/projects')}>
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li className={linkClass('/contacts')}>
          <Link to="/contacts">CONTACT</Link>
        </li>
          <li className={linkClass('/resume')}>
          <Link to="/resume">RESUME</Link>
        </li>
      </ul>

      {/* Mobile menu button */}
      <div onClick={handleNav} className='block md:hidden text-gray-300 fixed right-10 top-8 z-50'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className='fixed top-20 mt-12 left-0 w-full h-full bg-[#232323] text-gray-400 z-50 ease-in-out duration-500 flex justify-center items-center pt-[150px]'>
          <div className='w-full'>
            <ul className='text-center text-3xl font-semibold px-8'>
              <li className={mobileLinkClass('/')}>
                <Link to="/" onClick={handleNav} className="block">Home</Link>
              </li>
               <li className={mobileLinkClass('/about')}>
                <Link to="/about" onClick={handleNav} className="block">About</Link>
              </li>
              <li className={mobileLinkClass('/skills')}>
                <Link to="/skills" onClick={handleNav} className="block">Skills</Link>
              </li>
              <li className={mobileLinkClass('/projects')}>
                <Link to="/projects" onClick={handleNav} className="block">Projects</Link>
              </li>
              <li className={mobileLinkClass('/contacts')}>
                <Link to="/contacts" onClick={handleNav} className="block">Contact</Link>
              </li>
                  <li className={mobileLinkClass('/resume')}>
                <Link to="/resume" onClick={handleNav} className="block">Resume</Link>
              </li>
                {/* Close Option */}
              <li>
                <button
                  onClick={handleNav}
                  className="mt-8 p-4 text-xl bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full"
                  aria-label="Close Menu"
                >
                  Close
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
