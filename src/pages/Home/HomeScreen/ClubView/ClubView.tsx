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

interface IClubViewProps {
  themeChangeHandler: (clubTheme: IClubTheme) => void;
  clubTheme: IClubTheme;

}
type clubDataKey = "league" | "manager" | "stadium" | "capacity" | "founded"

const ClubView = forwardRef<HTMLInputElement, IClubViewProps>(({ themeChangeHandler, clubTheme }, ref) => {


  return (
    <section ref={ref} className={`flex flex-col relative w-screen h-screen overflow-hidden duration-500 transition-colors text-[14px] sm:text-[20px] snap-center`}
      style={{ background: `linear-gradient(180deg, #000C15 0%,#065C6B 90%, #065C6B 100%)` }
      }>
      <Grid container className='h-full p-2 text-white snap-center'>

        <Grid xxs={6} sm={8} className='h-1/3 flex-center'>
          <ClubName clubTheme={clubTheme} className="text-3xl sm:text-4xl" />
        </Grid>
        <Grid xxs={6} sm={4} className='relative'>
          <AnimatePresence>
            {clubTheme && (
              <motion.img
                layoutId={clubTheme.name}
                key={clubTheme.name}
                src={clubTheme.logo}
                alt={clubTheme.name}
                className='h-[12em] top-4 left-4 absolute'
                onClick={() => themeChangeHandler(DEFAULT_CLUB)}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>
        </Grid>
        <Grid xxs={6} sm={8} className='h-1/3 flex-center'>
          <img className='object-cover h-full ' src={clubTheme.player} alt="" />
        </Grid>
        {/* Club informations */}
        <Grid xxs={6} sm={4} className='flex items-center justify-start p-4 '>
          <div className="px-3 border-l-2 text-md">
            {clubTheme.clubData! && ["league", "manager", "stadium", "capacity", "founded"].map((item, index) => <p className='capitalize' key={index}>{item}: <span className='font-semibold'>{clubTheme.clubData![item as clubDataKey]}</span></p>)}
          </div>
        </Grid>
        <Grid xxs={12} className='gap-1 flex-center h-1/3'>
          {CLUBS_DATA.map(club => (
            <motion.img
              layoutId={club.name}
              key={club.id}
              src={club.logo}
              alt={club.name}
              onClick={() => themeChangeHandler(club)}
              className='w-16 h-16'
              transition={{ duration: 0.5 }}
            />
          ))}
        </Grid>
      </Grid>

      {/* <ClubName clubTheme={clubTheme} />
      <AnimatePresence>
        {clubTheme && (
          <motion.img
            layoutId={clubTheme.name}
            key={clubTheme.name}
            src={clubTheme.logo}
            alt={clubTheme.name}
            className='h-[12em]'
            onClick={() => themeChangeHandler(DEFAULT_CLUB)}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
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
      </div> */}

    </section >

  )
})

export default ClubView