import React from 'react'
import { skills } from './data/skills'
import { FaCode, FaPaintBrush, FaMobileAlt, FaGlobe } from 'react-icons/fa'

const Skills = () => {
  return (
    <div>
      <section id="skill" className="px-4 py-20 bg-muted/50">
        <div className="container max-w-4xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center">Skills & Technologies</h2>

          <div className="grid gap-8 mb-12 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary">
                  <div
                    className="h-2 transition-all duration-1000 rounded-full bg-primary"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={skill.level}
                  readOnly
                  className="w-full accent-primary"
                />
              </div>
            ))}
          </div>

          <div className="grid gap-6 text-center md:grid-cols-4">
            <div className="p-6 bg-white shadow dark:bg-gray-800 rounded-xl">
              <FaCode className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-white">Frontend</h3>
              <p className="text-sm text-white text-muted-foreground">React, Vue, Angular</p>
            </div>
            <div className="p-6 bg-white shadow dark:bg-gray-800 rounded-xl">
              <FaPaintBrush className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-white">Design</h3>
              <p className="text-sm text-white text-muted-foreground">UI/UX, Figma, Adobe</p>
            </div>
            <div className="p-6 bg-white shadow dark:bg-gray-800 rounded-xl">
              <FaMobileAlt className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-white">Mobile</h3>
              <p className="text-sm text-white text-muted-foreground">React Native, PWA</p>
            </div>
            <div className="p-6 bg-white shadow dark:bg-gray-800 rounded-xl">
              <FaGlobe className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-white">Web</h3>
              <p className="text-sm text-white text-muted-foreground">HTML, CSS, JavaScript,React Js</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
