import React from 'react';import { Link } from 'react-router-dom';
import Profile from '../assets/Profile.png';
import { TypeAnimation } from 'react-type-animation';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='relative grid gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8'>
      <div className="green-orb"></div>

      <div className='glass-hero px-5 z-10'>
        <div className='m-2 grid lg:grid-cols-12 md:grid-cols-12 gap-4'>
          <div className='lg:col-span-1'></div>

          <div className='lg:col-span-3 md:col-span-5 min-h-[200px]'>
            <h1 className='md:hidden text-center text-white text-[70px] font-extrabold md:text-[180%] lg:text-[400%] md:mr-[5%] md:mt-[15%] md:mb-[5%] lg:ml-[5%] lg:mr-[5%] lg:mt-[5%] lg:mb-[5%]'>
              Hey I'm Ej
            </h1>

            <img
              className='block mx-auto floating mb-[10%] md:mr-[50%] md:mb-[10%] md:mt-[25%] lg:mt-[35%] lg:mb-[15%] mt-[5%] z-[-1] md:w-[226px] w-[50%]'
              src={Profile}              alt='Profile'            />
          </div>

          <div className='lg:col-span-8 md:col-span-5 min-h-[200px]'>
            <h3 className='text-white ml-[17%] md:ml-[10%] lg:mt-[11%] md:mt-[5%] text-3xl sm:text-2xl md:text-5xl lg:text-7xl font-bold'>
              <span className='glitch-text'>
                <TypeAnimation
                  sequence={[
                    "Full-Stack Dev",
                    1000,
                    "Web Designer",
                    1000,
                    "Visual Artist",
                    1000,
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h3>
           <div>
            <p className="font-roboto bottom-0 leading-loose tracking-widest md:ml-[10%] lg:ml-[6%] lg:mr-[0%] lg:mt-[5%] md:mr-[0%] ml-[15%] mr-[10%] mt-[10%] text-base text-white">
              I’m passionate about turning ideas into <span className="font-bold cursor-pointer hover:text-blue-500 ml-2 mr-2">
                <Link to="/projects">PROJECTS</Link>
              </span> and bringing them to life through code. While I’m still growing my experience, I’m eager to learn, adapt, and explore new areas across the tech world. Whether it's software development, web technologies, or something entirely new, I’m committed to building my skills and making a meaningful contribution. 
              <span className="font-bold cursor-pointer hover:text-blue-500 ml-2 mr-2">
                <Link to="/contacts">CONTACT</Link>
              </span> me — I’d love to connect and see how I can grow with your team.
            </p>
          </div>

            <div>
              <p className='font-roboto bottom-0 leading-loose tracking-widest md:ml-[10%] lg:ml-[6%] lg:mr-[0%] lg:mb-[5%] lg:mt-[5%] md:mr-[0%] ml-[15%] mr-[10%] mt-[10%] text-base text-white'>
                <span className="font-bold ml-2 cursor-pointer hover:text-blue-500">                  <Link to="/about">See More About Me</Link>
                </span>                <span className="arrow ml-3 cursor-pointer hover:text-blue-500">&rarr;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
