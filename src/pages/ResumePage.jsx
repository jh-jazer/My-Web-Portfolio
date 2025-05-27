import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="glass-projects py-20 px-4 min-h-screen">
        <h2 className="text-4xl font-bold text-white text-center mb-6">My Resume</h2>

        {/* Download CV button */}
        <div className="text-center mb-8">
          <a
            href="/resume.pdf"
            download
            className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Download Curriculum Vitae (CV)
          </a>
        </div>

        {/* Embedded Resume */}
        <div className="flex justify-center">
          <iframe
            src="/resume.pdf"
            title="Resume"
            width="100%"
            height="800px"
            className="border-2 border-gray-300 rounded-md w-full max-w-4xl"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
