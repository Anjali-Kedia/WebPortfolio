import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { skills } from '../data/constants.js';

const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
  return {
    initial: {
      y: direction === "up" ? 60 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
      },
    },
  };
};

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center relative z-10">
      <div className="flex flex-col items-center justify-between w-full max-w-[1100px] gap-3 relative">
        <div className="text-center mt-5 text-4xl font-bold text-primary sm:mt-3 sm:text-[32px] border-b-4 border-[#FFDDDB] text-white">
          SKILLS
        </div>
        <div className="text-center text-[18px] max-w-[600px] text-secondary sm:text-[16px] text-white">
          Here are some technologies that I have worked with.
        </div>
        <div className="flex flex-wrap justify-center mt-5 gap-7 w-full text-white">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              initial="hidden"
              animate="visible"
              className="w-full max-w-[500px]"
            >
              <Tilt 
                tiltMaxAngleX={45}
                tiltMaxAngleY={45}
                scale={1}
                transitionSpeed={450}
                className="w-full bg-black border-2 border-[#FFDDDB] shadow-md shadow-[#FFDDDB] rounded-2xl p-5"
              >
                <div className="text-center text-[28px] font-semibold text-secondary mb-5">
                  {skill.title}
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-5">
                  {skill.skills.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-[16px] font-medium text-primary/80 border-2 border-[#FFDDDB] rounded-xl p-3 sm:text-[14px] sm:p-2">
                      <img src={item.image} alt={item.name} className="w-6 h-6"/>
                      {item.name}
                    </div>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
