import { Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import clubLogos from '../../../assets/landing_page/club_logos'

const clubToChose = [
  {
    name: 'united',
    logo: clubLogos.united,
    theme: {
      color: 'text-black',
      background: 'bg-red-800'
    }
  },
  {
    name: 'chelsea',
    logo: clubLogos.chelsea,
    theme: {
      color: 'text-white',
      background: 'bg-blue-800'
    }
  },
]

interface IClubTheme {
  color: string,
  background: string
}

const ThirdView = () => {
  const [theme, setTheme] = useState<IClubTheme>({
    color: 'text-white',
    background: 'bg-zinc-700'
  })

  const changeClubHandler = (theme: IClubTheme) => {
    setTheme(theme)
  }

  return (
    <Grid container className={`grid w-screen h-screen p-12 duration-500 transition-colors  text-white ${theme.background}`
    }>
      <Grid item xs={12} className=' flex-center'>
        <Typography variant="h1" className="text-6xl font-bold ">
          Choose your club!</Typography>
      </Grid>
      <Grid item xs={6} className=' flex-center'>
        <Typography variant="h1" className="text-6xl font-bold ">
          Choose your club!</Typography>
      </Grid>
      {
        clubToChose.map((club, index) => (
          <Grid key={index} item xs={3} className='flex-center'>
            <div onClick={() => changeClubHandler(club.theme)} className={`w-72 h-72 p-4 ${club.theme.background}`} style={{ backgroundColor: club.theme.background }}>
              <motion.img src={club.logo} alt="club_logo"
                whileHover={{
                  scale: 1.1,
                  y: -50,
                  transition: { duration: .3 },
                }} />
            </div>
          </Grid>
        ))
      }
    </Grid >

  )
}

export default ThirdView