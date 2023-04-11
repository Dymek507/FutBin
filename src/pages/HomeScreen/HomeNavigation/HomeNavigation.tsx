import React, { useState } from 'react'
import { SectionRefType } from '../types/homeTypes';
import MenuIcon from '@mui/icons-material/Menu';
import { AnimateSharedLayout } from 'framer-motion';
import MenuItem from './MenuItem';
import { VIEWS_LIST } from '../data/views_list';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import VerticalMenuItem from './VerticalMenuItem';

interface IHomeNavigationProps {
  scrollToSection: (sectionRef: SectionRefType) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
  isMobile: boolean;
}
const HomeNavigation = ({ scrollToSection, setCurrentPage, currentPage, isMobile }: IHomeNavigationProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const clickHandler = (page: number, ref: SectionRefType) => {
    scrollToSection(ref)
    setCurrentPage(page)
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="fixed flex justify-end w-full z-[3] text-white ">
      {isMobile ?
        <div className="text-[2em] m-[0.2em]">
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon fontSize="large" sx={{ color: "white" }} />
          </Button>
          <div className='bg-sky-500'>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              PaperProps={{
                style: {
                  backgroundColor: "#ccc",
                },
              }}
            >

              {VIEWS_LIST.map((el) => (
                <MuiMenuItem onClick={() => clickHandler(el.page, el.ref)}>{el.text}</MuiMenuItem>
              ))}

            </Menu>
          </div>
        </div> :
        <div className="flex justify-end mr-4 wh-full color-black ">
          <div className="flex justify-evenly">
            <AnimateSharedLayout>
              {VIEWS_LIST.map((el) => (
                <MenuItem
                  text={el.text}
                  key={el.page}
                  selected={currentPage === el.page}
                  onClick={() => clickHandler(el.page, el.ref)}
                />
              ))}
            </AnimateSharedLayout>
          </div>
        </div>
      }
    </div >
  )
}

export default HomeNavigation