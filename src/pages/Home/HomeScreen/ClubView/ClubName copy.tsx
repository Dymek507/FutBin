import React from 'react'
import { motion } from 'framer-motion'
import { IClubTheme } from './helpers/ClubViewTypes'
import { Typography } from '@mui/material'

interface ClubNameProps {
  clubTheme: IClubTheme
}

const ClubName = ({ clubTheme }: ClubNameProps) => {
  return (
    <div className="absolute top-[18em] left-[2em] md:top-[30vh] md:left-[30vw] rotate-[47deg] "
      style={{ color: clubTheme.colors.text }}>
      <motion.div
        key={clubTheme.name}
        initial={{ x: '-150%', opacity: 0 }}
        animate={{ x: '0', opacity: [0.2, 0.5, 1] }}
        // exit={{ x: '-150%', opacity: [1, 0.5, 0.2], }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Typography variant="h3" fontSize="4em" className="font-bold">
          {clubTheme.name}
        </Typography>
      </motion.div>
    </div>
  )
}

export default ClubName