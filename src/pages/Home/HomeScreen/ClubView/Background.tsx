import React from 'react'
import ReactCSSTransitionGroup from 'react-transition-group';
import { motion } from 'framer-motion'
import LogoTriangle from './LogoTriangle';
import { IClubTheme } from './helpers/ClubViewTypes';


interface BackgroundProps {
  clubTheme: IClubTheme
}

const Background = ({ clubTheme }: BackgroundProps) => {
  return (
    <motion.div
      key={clubTheme.name}
      className='wh-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 0.5, 0.8, 1], transition: { duration: 0.5, delay: 0.4 } }}
      exit={{ opacity: [1, 0.8, 0.5, 0.2], transition: { duration: 0.3 } }}
    >
      <div className='z-0 transition duration-150 ease-in-out wh-full'>
        <svg id="stripes-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="svg-stripes-pattern-49155" patternTransform="rotate(47)" width="100%" height="247" x="0" y="0" patternUnits="userSpaceOnUse">
              <g>
                <rect x="0" y="0" width="100%" height="153" fill={clubTheme.colors.main}></rect>
                <rect x="0" y="153" width="100%" height="94" fill={clubTheme.colors.secondary}></rect>
              </g>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#svg-stripes-pattern-49155)"></rect>
        </svg>
        <div className='absolute top-0 left-0 w-full h-full opacity-25 bg-gradient-to-l from-black to-slate-400'></div>
      </div>
      <LogoTriangle key={2} color={clubTheme.colors.main} />
    </motion.div>
  )
}

export default Background
