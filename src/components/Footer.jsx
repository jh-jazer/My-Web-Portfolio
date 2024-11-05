
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 glass text-gray-300 py-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/jh_evan" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/ernesto-jr-desabille-93a783336" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a href="https://github.com/jh-jazer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://twitter.com/@ErnestoDes63860" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebookF className="text-2xl" />
          </a>
        </div>
        <p className="mt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} Ej Desabillle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

