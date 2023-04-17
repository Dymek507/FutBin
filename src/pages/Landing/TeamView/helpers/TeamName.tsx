import React from 'react'

import { motion } from 'framer-motion'
import { IClubTheme } from '../../helpers/types/homeTypes'

interface ClubNameProps {
  clubTheme: IClubTheme;
  className?: string;
}

const ClubName = ({ clubTheme, className }: ClubNameProps) => {
  return (
    <div className={className}
      style={{ color: clubTheme.colors.text }}
    >
      <motion.div
        key={clubTheme.name}
        initial={{ x: '-250%', opacity: 0 }}
        animate={{ x: '0', opacity: [0, 0.5, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="font-semibold text-center">
          {clubTheme.name}
        </p>


      </motion.div>
    </div>
  )
}

export default ClubName