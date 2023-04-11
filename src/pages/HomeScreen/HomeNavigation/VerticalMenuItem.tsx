import React from 'react'
import { motion } from 'framer-motion'
import MuiMenuItem from '@mui/material/MenuItem';

interface IVerticalMenuItem {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const VerticalMenuItem = ({ text, selected, onClick }: IVerticalMenuItem) => (
  <MuiMenuItem> {text} </MuiMenuItem>

  //   className="relative mt-4 text-xl cursor-pointer first:ml-12"
  //   onClick={onClick}
  // >
  //   {text}
  //   
  //     />

)

export default VerticalMenuItem