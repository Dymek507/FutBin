import React from 'react'
import MuiMenuItem from '@mui/material/MenuItem';

interface IVerticalMenuItem {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const VerticalMenuItem = ({ text, selected, onClick }: IVerticalMenuItem) => (
  <MuiMenuItem> {text} </MuiMenuItem>
)

export default VerticalMenuItem