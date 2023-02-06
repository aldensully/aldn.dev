import { motion, Variants } from 'framer-motion';
import React from 'react';

function Projects() {
  const cardVariants: Variants = {
    offscreen: {
      // x: order === 'end' ? -300 : 300,
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "keyframes",
        ease: 'easeIn',
        duration: 0.1
      }
    }
  };
  return (
    <div className='bg-bg min-h-screen w-full flex'>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={cardVariants}>
          <div className='w-full items-center justify-center min-h-screen flex' >
            <text className='text-text font-bold text-lg'>alsj falsd fhasjd falsd fad </text>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects;