import React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import { infiniteAnimation } from '../Animations'
import { IClubTheme } from '../types/homeTypes'

interface ClubNameProps {
  clubTheme: IClubTheme
}

const ClubName = ({ clubTheme }: ClubNameProps) => {
  return (
    <div className="absolute  top-[6em] left-2 md:top-[30vh] md:left-[30vw] w-min"
      style={{ color: clubTheme.colors.text }}>
      <motion.div
        key={clubTheme.name}
        initial={{ x: '-150%', opacity: 0 }}
        animate={{ x: '0', opacity: [0.2, 0.5, 1] }}
        // exit={{ x: '-150%', opacity: [1, 0.5, 0.2], }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-4xl font-semibold text-center">
          {clubTheme.name}
        </p>


      </motion.div>
    </div>
  )
}

export default ClubName