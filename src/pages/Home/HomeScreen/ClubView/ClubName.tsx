import React from 'react'
import { motion } from 'framer-motion'
import { Typography } from '@mui/material'
import { infiniteAnimation } from '../Animations'
import { IClubTheme } from '../types/homeTypes'

interface ClubNameProps {
  clubTheme: IClubTheme;
  className?: string;
}

const ClubName = ({ clubTheme, className }: ClubNameProps) => {
  return (
    <div className={className}
      style={{ color: clubTheme.colors.text }}
    >
      <motion.div
        key={clubTheme.name}
        initial={{ x: '-150%', opacity: 0 }}
        animate={{ x: '0', opacity: [0.2, 0.5, 1] }}
        // exit={{ x: '-150%', opacity: [1, 0.5, 0.2], }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-semibold text-center">
          {clubTheme.name}
        </p>


      </motion.div>
    </div>
  )
}

export default ClubName