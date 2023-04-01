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

const defaultTheme: IClubTheme = {
  id: 0,
  name: "",
  logo: "",
  colors: {
    text: "E50000",
    main: "#13766D",
    secondary: "white",
  },
}

const ClubView = () => {
  const [clubTheme, setClubTheme] = useState(defaultTheme);

  return (
    <section className={`flex flex-col justify-end items-center relative w-screen h-screen overflow-hidden duration-500 transition-colors text-[14px] sm:text-[20px] snap-center bg-gradient-to-b from-[#000C15] to-[#13766D]`}
      style={{ background: `linear-gradient(180deg, #000C15 0%, #000C15 30%, ${clubTheme.colors.main} 100%)` }
      }>
      {/* <Background clubTheme={clubTheme} /> */}
      <ClubName clubTheme={clubTheme} />
      <div className='z-10 flex gap-2 mb-24'>
        {clubsData.map(club => (
          <motion.img
            layoutId={club.name}
            key={club.id}
            src={club.logo}
            alt={club.name}
            onClick={() => setClubTheme(club)}
            className='w-[4em]'
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      <AnimatePresence>
        {clubTheme && (
          <motion.img
            layoutId={clubTheme.name}
            key={clubTheme.name}
            src={clubTheme.logo}
            alt={clubTheme.name}
            className='absolute top-[5em] right-[2em] h-[12em]'
            onClick={() => setClubTheme(defaultTheme)}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </section >

  )
}

export default ClubView