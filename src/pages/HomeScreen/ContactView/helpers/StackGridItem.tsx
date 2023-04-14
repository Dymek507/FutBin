import { Grid, Typography } from '@mui/material'
import React from 'react'
import { IconContext } from 'react-icons/lib'
import { IFooterData } from './footer-data'

interface IStackGridItemProps {
  className: string,
  footerData: IFooterData[],
  md: number,
}

const StackGridItem = ({ className, footerData, md }: IStackGridItemProps) => {
  return (
    <Grid item xxs={12} md={md} className={className}>
      <IconContext.Provider value={{ style: { fontSize: '1.6em' } }}>
        {footerData.map((item) => (
          <a key={item.id} href={item.href ? item.href : "#"}>
            <Typography variant='inherit' className="flex-col gap-2 flex-center text-[0.9em]" key={item.id}>{item.icon}{item.title}</Typography>
          </a>
        ))}
      </IconContext.Provider>
    </Grid>
  )
}

export default StackGridItem