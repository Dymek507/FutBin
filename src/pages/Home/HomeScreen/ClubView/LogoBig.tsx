import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IClubTheme } from './helpers/ClubViewTypes'

interface LogoBigProps {
  clubTheme: IClubTheme
}

const LogoBig = ({ clubTheme }: LogoBigProps) => {
  return (
    <motion.img
      key={clubTheme.name}
      src={clubTheme.logo}
      alt={clubTheme.name}
      className='absolute w-[4em]'
    // initial={{ position: "absolute", left: clubTheme.left, bottom: clubTheme.bottom, scale: 1 }}
    // animate={{ left: '10em', bottom: '26em', scale: 6 }}
    // exit={{ position: "absolute", left: clubTheme.left, bottom: clubTheme.bottom, scale: 1 }}
    // transition={{ duration: 0.5 }}
    />
  )
}

export default LogoBig