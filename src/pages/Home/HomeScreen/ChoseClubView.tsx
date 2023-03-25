import { Grid, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { clubData } from '../../../data/clubsData'


interface IClub {
  name: string,
  logo: string,
  theme: {
    color: string,
    background: string
  }
}

const ChoseClubView = () => {
  // const [clubTheme, setClubTheme] = useState<IClub>({
  //   name: 'Arsenal',
  //   logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
  //   theme: {
  //     color: 'text-white',
  //     background: 'bg-[#191a54]'
  //   }
  // })

  interface IClubTheme {
    name: string,
    logo: string,
    colors: {
      text: string,
      main: string,
      secondary: string,
    }
    bottom: string,
    left: string,
  }


  const [clubTheme, setClubTheme] = useState({
    name: "Chelsea FC",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    colors: {
      text: "red",
      main: "black",
      secondary: "white"
    },
    left: "4rem",
    bottom: "0",
  },);

  const handleClick = (club: IClubTheme) => {
    setClubTheme(club);
  };


  return (
    <section className={`relative w-screen h-screen duration-500 transition-colors overflow-hidden  ${clubTheme.colors.text} ${clubTheme.colors.main}`
    }
    >
      {/* <svg id="stripes-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="svg-stripes-pattern-24936" patternTransform="rotate(47)" width="100%" height="200" x="0" y="0" patternUnits="userSpaceOnUse">
            <g>
              <rect x="0" y="0" width="100%" height="100" fill={clubTheme.colors.main}></rect>
              <rect x="0" y="100" width="100%" height="100" fill={clubTheme.colors.secondary}></rect>
            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#svg-stripes-pattern-24936)"></rect>
      </svg> */}
      <div className={`w-full h-full bg-gradient-to-r ${'from-[' + clubTheme.colors.main + ']'} ${'to-[' + clubTheme.colors.secondary + ']'}`}>
        <svg id="stripes-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="svg-stripes-pattern-49155" patternTransform="rotate(47)" width="100%" height="247" x="0" y="0" patternUnits="userSpaceOnUse">
              <g>
                <rect x="0" y="0" width="100%" height="153" fill={clubTheme.colors.main}></rect>
                <rect x="0" y="153" width="100%" height="94" fill="transparent"></rect>
              </g>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#svg-stripes-pattern-49155)"></rect>
        </svg>
      </div>


      {
        clubData.map((club) => (
          <div key={club.name}>
            <AnimatePresence>
              {club.name !== clubTheme.name ?
                <motion.img
                  className='absolute w-20'
                  style={{ left: club.left, bottom: club.bottom }}
                  src={club.logo}
                  alt={club.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.01, delay: 0.5 } }}
                  onClick={() => handleClick(club)}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                />
                : null
              }
            </AnimatePresence>
          </div>
        ))
      }
      <AnimatePresence>
        {clubTheme && (
          <motion.img
            className='absolute w-20'
            key={clubTheme.name}
            src={clubTheme.logo}
            alt={clubTheme.name}
            initial={{ position: "absolute", left: clubTheme.left, bottom: clubTheme.bottom, scale: 1 }}
            animate={{ left: '12rem', bottom: '32rem', scale: 5 }}
            exit={{ position: "absolute", left: clubTheme.left, bottom: clubTheme.bottom, scale: 1 }}
            transition={{ duration: 0.5 }}
          // onClick={() => setSelectedImage(null)}
          />
        )}
      </AnimatePresence>
    </section >

  )
}

export default ChoseClubView