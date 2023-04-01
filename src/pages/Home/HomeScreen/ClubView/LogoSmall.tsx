import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IClubTheme } from './helpers/ClubViewTypes'

interface LogoSmallProps {
  club: IClubTheme;
  onClick: (club: IClubTheme) => void;
  currentTheme?: IClubTheme;
}

// const LogoSmall = ({ club, onClick }: LogoSmallProps) => {
const LogoSmall = ({ club, onClick }: LogoSmallProps) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const variants = {
    // hidden: { scale: 1, top: 0, left: 0 },
    hidden: { scale: 1, top: '0px', left: '0px' },
    // visible: { scale: 0.6, y: '-400px', x: '-200px' },
    visible: { scale: 1, top: '-50vh', left: '0px' },
  }

  const handleClick = () => {
    onClick(club);
    setIsClicked(prev => !prev);
    // console.log("Club clicked " + club.name)
  }

  return (
    <div className='relative bg-sky-200 w-[4em] h-[4em]'>
      <motion.img
        key={club.id}
        src={club.logo}
        alt={club.name}
        className='w-[4em] absolute inset-0'
        variants={variants}
        // initial={{ scale: 1, top: '0px', left: '0px' }}
        animate={isClicked ? 'visible' : 'hidden'}
        onClick={handleClick}
        // whileHover={{ scale: 1.3 }}
        transition={{ duration: 0.4 }}
      />
    </div>

  )
}

export default LogoSmall