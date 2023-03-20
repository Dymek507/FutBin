import { motion } from 'framer-motion'
import React, { useState } from 'react'
import clubLogos from '../../../assets/landing_page/club_logos'

const ThirdView = () => {
  const [theme, setTheme] = useState('chelsea')


  return (
    <div className='w-screen h-screen flex justify-end items-end gap-8 pb-8 pr-8 bg-red-800'>
      <div className='w-72 h-72 bg-sky-600'>
        <motion.img src={clubLogos.united} alt="aa"
          whileHover={{
            scale: 2,
            x: 50,
            y: -280,
            transition: { duration: 1 },
          }} />
      </div>
      <div className='w-72 h-72 bg-sky-600'>
        <motion.img src={clubLogos.chelsea} alt="aa"
          whileHover={{
            scale: 2,
            x: -250,
            y: -280,
            transition: { duration: 1 },
          }} />
      </div>
      <div className='w-72 h-72 bg-sky-600'>

      </div>
    </div >
  )
}

export default ThirdView