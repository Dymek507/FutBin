import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

interface InfoScreenProps {
  text1: string;
  text2: string;
}

const InfoScreen = ({ text1, text2 }: InfoScreenProps) => {
  return (
    <div className="w-full h-full flex-center">
      <div className="flex-center gap-2 flex-col bg-primary-main text-white w-4/6 h-4/6">
        <Typography variant={'h1'} fontSize='3em'>
          {text1}
        </Typography >
        <Link to="/new-packs">
          <Typography variant='h4' >
            {text2}
          </Typography>
        </Link>
      </div >
    </div >
  )
}

export default InfoScreen