import React from 'react'
import { motion } from 'framer-motion'
import { IClubTheme } from './helpers/ClubViewTypes'
import { Typography } from '@mui/material'

interface ClubNameProps {
  clubTheme: IClubTheme
}

const ClubName = ({ clubTheme }: ClubNameProps) => {
  return (
    <div className="absolute top-[35em] left-[18em] md:top-[30vh] md:left-[30vw] rotate-[47deg] w-[50vw] z-10"
      style={{ color: clubTheme.colors.secondary }}>
      <motion.div
        key={clubTheme.name}
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '0', opacity: [0.2, 0.5, 1], transition: { duration: 0.5 } }}
        exit={{ x: '-100%', opacity: [1, 0.5, 0.2], transition: { duration: 0.5 } }}
      >
        <Typography variant="h3" fontSize="4em" className="font-bold ">
          {clubTheme.name}
        </Typography>
      </motion.div>
    </div>
  )
}

export default ClubName