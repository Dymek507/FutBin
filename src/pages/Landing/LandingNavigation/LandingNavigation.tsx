import React from 'react'

import { AnimateSharedLayout } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Menu, MenuItem as MuiMenuItem } from '@mui/material';

import { SectionRefType } from '../helpers/types/homeTypes';
import MenuItem from './MenuItem';
import { VIEWS_LIST } from '../helpers/data/views_list';
import { useMediaQuery } from 'react-responsive';

interface IHomeNavigationProps {
  scrollToSection: (sectionRef: SectionRefType) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}
const HomeNavigation = ({ scrollToSection, setCurrentPage, currentPage }: IHomeNavigationProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isDesktop = useMediaQuery({ query: '(min-width: 899px)' },);

  const clickHandler = (page: number, ref: SectionRefType) => {
    scrollToSection(ref)
    setCurrentPage(page)
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="fixed flex justify-end w-full z-[3] text-white ">
      {/* Mobile navigation */}
      {!isDesktop ?
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

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
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
              <MuiMenuItem key={el.page
              } onClick={() => clickHandler(el.page, el.ref)}>{el.text}</MuiMenuItem>
            ))}
          </Menu>

        </div> :
        // Desktop navigation
        <div className="flex mr-4 justify-evenly">
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
      }
    </div >
  )
}

export default HomeNavigation