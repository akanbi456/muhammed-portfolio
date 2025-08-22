import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaFacebook, FaGithub, FaLinkedin, FaReact, FaNodeJs, FaCode, FaPalette } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import Navbar from '../component/Navbar';
import About from '../component/About';
import muhammed from '../assets/muhammed.jpg'
import Skills from '../component/Skills';
import Footer from '../component/Footer';
import Contact from '../component/Contact';
import Project from '../component/Project';
const RollingBall = ({ size = 20, color = "bg-blue-500", delay = 0, duration = 10 }) => (
  <motion.div
    className={`absolute ${color} rounded-full opacity-20`}
    style={{ width: size, height: size }}
    animate={{
      x: [0, window.innerWidth - size, 0],
      y: [0, window.innerHeight - size, 0],
      rotate: [0, 360, 720],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

// Floating shape animation
const FloatingShape = ({ children, delay = 0 }) => (
  <motion.div
    className="absolute opacity-10"
    animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
    transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

// Rolling text animation
const RollingText = ({ text, className = "" }) => (
  <motion.div
    className={`absolute text-6xl font-bold opacity-5 select-none ${className}`}
    animate={{ x: [window.innerWidth, -200], rotate: [0, 360] }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
  >
    {text}
  </motion.div>
);

const Header = () => {
  return (
    <div>
      <Navbar />
      <section id='home' className="relative flex items-center justify-center min-h-screen overflow-hidden bg-white">
        {/* Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Rolling Balls */}
        {[30, 20, 25, 15, 35].map((size, i) => (
          <RollingBall
            key={i}
            size={size}
            color={["bg-blue-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-cyan-500"][i]}
            delay={i}
            duration={12 + i * 2}
          />
        ))}

        {/* Floating Shapes */}
        <FloatingShape delay={0}>
          <div className="w-16 h-16 transform rotate-45 bg-gradient-to-r from-blue-400 to-purple-400" />
        </FloatingShape>
        <FloatingShape delay={2}>
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-red-400" />
        </FloatingShape>
        <FloatingShape delay={4}>
          <div className="w-20 h-20 rounded-lg bg-gradient-to-r from-green-400 to-blue-400" />
        </FloatingShape>

        {/* Rolling Text */}
        <RollingText text="DEVELOPER" className="top-1/4 left-8" />
        <RollingText text="CREATIVE" className="top-2/3 right-8" />

        {/* Main Content */}
        <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
            {/* Left Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6 text-5xl font-bold text-white md:text-7xl"
                >
                  Muhammed
                </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-4 text-xl text-gray-600 md:text-2xl dark:text-gray-300"
              >
                Full Stack Developer
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-md mb-8 text-gray-500 dark:text-gray-400"
              >
                I build beautiful and responsive web applications with clean code and creative design.
              </motion.p>
              <motion.div
                className="flex flex-wrap items-center justify-center gap-4 sm:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
               <a href="#project">
               <button className="px-6 py-2 text-white transition rounded bg-violet-600 hover:bg-violet-700">
                  View My Work
                </button></a> 
                <a href="#contact">
                   <button  className="px-6 py-2 border rounded text-violet-600 border-violet-600 hover:bg-violet-100">
                  Get in Touch
                </button>
                </a>
               
              </motion.div>
              <div className="flex justify-center mt-6 space-x-4 md:justify-start">
                <FaFacebook className="text-2xl text-violet-600 hover:text-violet-800" />
             <a href="https://github-"><FaGithub className="text-2xl text-violet-600 hover:text-violet-800" /></a>  
             <a href="https://www.linkedin.com/in/akanbi-muhammed-33600a37a/">
              <FaLinkedin className="text-2xl text-violet-600 hover:text-violet-800" />
             </a> 
               
              </div>
              <div className="mt-8 animate-bounce">
                <FaArrowDown className="w-6 h-6 mx-auto text-gray-500" />
              </div>
            </motion.div>

            {/* Avatar with Orbiting Icons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex items-center justify-center flex-1"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  {/* Orbiting Icons */}
                  {[FaReact, SiNextdotjs, SiTypescript, FaNodeJs].map((Icon, i) => {
                    const positions = [
                      { x: 120, y: 0 },
                      { x: -120, y: 0 },
                      { x: 0, y: 120 },
                      { x: 0, y: -120 }
                    ];
                    return (
                      <motion.div
                        key={i}
                        className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full shadow"
                        style={positions[i]}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon className="text-sm text-violet-600" />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Avatar / Initials */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="relative z-10 flex items-center justify-center w-64 h-64 text-5xl font-bold text-white rounded-full shadow-xl bg-gradient-to-br from-purple-600 to-blue-600"
                >
                  <img src={muhammed} alt="" />
                </motion.div>

                {/* Decorative Extras */}
                <motion.div
                  className="absolute top-0 right-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-80"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <FaCode className="text-white" />
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-80"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <FaPalette className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />
      <Skills />
      <Project/>
     
      <Contact/>
      
      
      <Footer/>
       
    </div>
  );
};

export default Header;
