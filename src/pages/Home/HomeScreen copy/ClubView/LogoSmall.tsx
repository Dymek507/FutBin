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
    hidden: { scale: 1, top: 0, left: 0, transition: { duration: 0.5 } },
    visible: { scale: 5, y: '400px', x: '400px' },
    // visible: { scale: 5, top: '400px', left: '400px', transition: { duration: 0.5 } },
  }

  const handleClick = () => {
    onClick(club);
    setIsClicked(prev => !prev);
    // console.log("Club clicked " + club.name)
  }

  return (
    <motion.img
      key={club.id}
      src={club.logo}
      alt={club.name}
      className={isClicked ? 'w-[4em] ' : 'w-[4em]'}
      variants={variants}
      // animate={'visible'}
      animate={isClicked ? 'visible' : 'hidden'}
      exit={{ scale: 1, top: '0px', left: '0px', transition: { duration: 0.5 } }}
      onClick={handleClick}
    // whileHover={{ scale: 1.3 }}
    // transition={{ duration: 0.4 }}
    />

  )
}

export default LogoSmall