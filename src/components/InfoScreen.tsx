import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

interface InfoScreenProps {
  text1: string;
  text2: string;
}

const InfoScreen = ({ text1, text2 }: InfoScreenProps) => {
  return (
    <div className="wh-full flex-center">
      <div className='w-4/6 p-6 h-4/6 bg-primary-main' >
        <div className="flex-col gap-2 text-white border-2 border-white wh-full flex-center ">
          <Typography variant={'h1'} fontSize='3em'>
            {text1}
          </Typography >
          <Link to="/new-packs">
            <Typography variant='h4' >
              {text2}
            </Typography>
          </Link>
        </div >
      </div>
    </div >
  )
}

export default InfoScreen