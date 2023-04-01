import { Grid, Typography } from '@mui/material'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { clubsData } from './data/clubsData'
import styled, { css } from 'styled-components'
import { IconEffect } from './helpers/ClubViewStyles'
import { IClubTheme } from './helpers/ClubViewTypes'
import LogoTriangle from './LogoTriangle'
import Background from './Background'
import LogoBig from './LogoBig'
import LogoSmall from './LogoSmall'
import ClubName from './ClubName'





const ClubView = () => {
  const [clubTheme, setClubTheme] = useState({
    name: "",
    logo: "",
    colors: {
      text: "E50000",
      main: "004DE7",
      secondary: "white"
    },
  });
  console.log(clubTheme)

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className={`relative w-screen h-screen overflow-hidden duration-500 transition-colors text-[10px] sm:text-[20px] snap-center `
    }>
      {clubsData.map((club) => (
        <LogoSmall key={club.id} club={club} onClick={() => { }} />
      ))}
      {/* <AnimatePresence>
        {clubTheme.name ?
          <Background key={clubTheme.name} clubTheme={clubTheme} />
          : null
        }
      </AnimatePresence> */}
      {/* <AnimatePresence>
        <ClubName key={clubTheme.name} clubTheme={clubTheme} />
      </AnimatePresence> */}
      {
        // clubData.map((club) => (
        //   <AnimatePresence key={club.name}>
        //     {/* {club.name !== clubTheme.name ? */}
        //     <LogoSmall key={club.name} currentTheme={clubTheme} club={club} onClick={handleClick} />
        //     {/* : null} */}
        //   </AnimatePresence>
        // ))
      }
      {/* <AnimatePresence>
        {!!clubTheme && (
          <LogoBig key={clubTheme.name} clubTheme={clubTheme} />
        )}
      </AnimatePresence> */}
    </section >

  )
}

export default ClubView