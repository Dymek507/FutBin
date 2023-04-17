import React from 'react'

import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Link } from 'react-router-dom';

interface GridElementProps {
  src: string;
  title: string;
  link: string;
}

const GridElement = ({ src, title, link }: GridElementProps) => {
  return (
    <Grid p={2} xxs={12} xs={10} sm={5} md={3} lg={3.5} className='flex-col max-h-full flex-center bg-primary-main'>
      <Link to={link}>
        <img src={src} className='max-h-full opacity-50 hover:opacity-100' alt={title} />
        <h2 className='text-2xl font-semibold text-center'>{title}</h2>
      </Link>
    </Grid>
  )
}

export default GridElement