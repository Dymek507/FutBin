import Grid from '@mui/material/Unstable_Grid2';

import { AnimatePresence, motion } from 'framer-motion'
import React, { forwardRef } from 'react'
import { CLUBS_DATA } from '../data/clubs_data'
import ClubName from './TeamName'

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
      <Grid container className='h-full p-2 text-white pt-14 snap-center'>
        {/* Club name  */}
        <Grid xxs={6} sm={7} className='flex-center '>
          <ClubName clubTheme={clubTheme} className="h-1/3 text-3xl sm:text-4xl md:text-[3em]" />
        </Grid>
        {/* Club logo */}
        <Grid xxs={6} sm={5} className='relative h-1/3'>
          <AnimatePresence>
            {clubTheme && (
              <motion.img
                layoutId={clubTheme.name}
                key={clubTheme.name}
                src={clubTheme.logo}
                alt={clubTheme.name}
                className='absolute inset-0 object-contain w-full max-w-[33vh] '
                onClick={() => themeChangeHandler(DEFAULT_CLUB)}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>
        </Grid>
        {/* Club player */}
        <Grid xxs={6} sm={7} className='h-1/3 flex-center'>
          <img className='object-cover h-full ' src={clubTheme.player} alt="" />
        </Grid>
        {/* Club informations */}
        <Grid xxs={6} sm={5} className='flex items-center justify-start p-4 '>
          <div className="px-3 ml-2 border-l-2 text-md">
            {clubTheme.clubData! && ["league", "manager", "stadium", "capacity", "founded"].map((item, index) => <p className='capitalize' key={index}>{item}: <span className='font-semibold'>{clubTheme.clubData![item as clubDataKey]}</span></p>)}
          </div>
        </Grid>
        {/* Club logos */}
        <Grid xxs={12} className='gap-1 sm:gap-3 md:gap-6 flex-center h-1/3'>
          {CLUBS_DATA.map(club => (
            <motion.img
              layoutId={club.name}
              key={club.id}
              src={club.logo}
              alt={club.name}
              onClick={() => themeChangeHandler(club)}
              className='w-16 sm:w-24 md:w-28'
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