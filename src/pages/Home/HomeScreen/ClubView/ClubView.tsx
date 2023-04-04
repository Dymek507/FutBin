import { Grid, Typography } from '@mui/material'

import { AnimatePresence, motion, useInView } from 'framer-motion'
import React, { forwardRef, useEffect, useState } from 'react'
import { CLUBS_DATA } from '../data/clubs_data'
import styled, { css } from 'styled-components'
import { IconEffect } from './helpers/ClubViewStyles'
import LogoSmall from './LogoSmall'
import ClubName from './ClubName'

import { DEFAULT_CLUB } from '../data/clubs_data'
import { IClubTheme } from '../types/homeTypes'
import BackgroundHex from '../BackgroundHex'

interface IClubViewProps {
  themeChangeHandler: (clubTheme: IClubTheme) => void;
  clubTheme: IClubTheme;

}

const ClubView = forwardRef<HTMLInputElement, IClubViewProps>(({ themeChangeHandler, clubTheme }, ref) => {



  return (
    <section ref={ref} className={`flex flex-col justify-end items-center relative w-screen h-screen overflow-hidden duration-500 transition-colors text-[14px] sm:text-[20px] snap-center `}
      style={{ background: `linear-gradient(180deg, #000C15 0%, #000C15 35%, ${clubTheme.colors.main} 100%)` }
      }>
      <BackgroundHex fillOne="none" strokeColor={clubTheme.colors.main} />
      <ClubName clubTheme={clubTheme} />
      <div className='z-10 flex gap-2 mb-24'>
        {CLUBS_DATA.map(club => (
          <motion.img
            layoutId={club.name}
            key={club.id}
            src={club.logo}
            alt={club.name}
            onClick={() => themeChangeHandler(club)}
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
            onClick={() => themeChangeHandler(DEFAULT_CLUB)}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
    </section >

  )
})

export default ClubView