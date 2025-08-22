import React from 'react'
import { motion } from 'framer-motion'

import muhammed from '../assets/muhammed.jpg'

const About = () => {
  return (
    <section id="about" className="relative px-4 py-20 bg-white dark:bg-gray-900 md:px-10">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
             
          <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl dark:text-white">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            I'm a frontend developer with a strong passion for creating intuitive and dynamic user interfaces.
            With over <span className="font-semibold text-violet-600">X years</span> of experience, I specialize in
            building responsive web applications using modern technologies like <span className="font-semibold">React, Next.js</span>,
            and <span className="font-semibold">Tailwind CSS</span>. I love solving complex problems and continuously
            learning new tools to improve my craft. My goal is to deliver high-quality code and exceptional
            user experiences.
          </p>
        </motion.div>

          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={muhammed}
            alt=""
            className="object-cover w-full h-auto max-w-lg shadow-xl rounded-xl aspect-video"
          />
        </motion.div>
     
      </div>
    </section>
  )
}

export default About
