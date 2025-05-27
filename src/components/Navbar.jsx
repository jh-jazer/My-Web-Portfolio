import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logoi.png';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation(); // Current route

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

  return (
    <div className='h-[96px] glass px-8 text-gray-300 max-w-[1200px] flex justify-between items-center mx-auto mt-3 z-50 relative' ref={navbarRef}>
      <Link to="/">
        <img src={logo} alt='logo' className='logo' />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex'>
        {currentPath !== '/' && (
          <li className='p-3 hover:text-white transition duration-300'>
            <Link to="/">HOME</Link>
          </li>
        )}
        {currentPath !== '/about' && (
          <li className='p-3 hover:text-white transition duration-300'>
            <Link to="/about">ABOUT</Link>
          </li>
        )}
        {currentPath !== '/projects' && (
          <li className='p-3 hover:text-white transition duration-300'>
            <Link to="/projects">PROJECTS</Link>
          </li>
        )}
        {currentPath !== '/contacts' && (
          <li className='p-3 hover:text-white transition duration-300'>
            <Link to="/contacts">CONTACT</Link>
          </li>
        )}
      </ul>

      {/* Mobile menu button */}
      <div onClick={handleNav} className='block md:hidden text-gray-300 fixed right-10 top-8 z-50'>
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className='fixed top-0 left-0 w-full h-full bg-[#232323] text-gray-400 z-50 ease-in-out duration-500 flex justify-center items-center pt-[150px]'>
          <div className='w-full'>
            <ul className='text-center text-3xl font-semibold px-8'>
              {currentPath !== '/' && (
                <li className='p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'>
                  <Link to="/" onClick={handleNav} className="block">Home</Link>
                </li>
              )}
              {currentPath !== '/about' && (
                <li className='p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'>
                  <Link to="/about" onClick={handleNav} className="block">About</Link>
                </li>
              )}
              {currentPath !== '/projects' && (
                <li className='p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'>
                  <Link to="/projects" onClick={handleNav} className="block">Projects</Link>
                </li>
              )}
              {currentPath !== '/contacts' && (
                <li className='p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors'>
                  <Link to="/contacts" onClick={handleNav} className="block">Contact</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
