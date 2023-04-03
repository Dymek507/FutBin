import React, { useState } from 'react';

import { motion, AnimateSharedLayout } from 'framer-motion';
import MenuItem from './MenuItem';
import { SectionRefType } from '../types/homeTypes';
import { VIEWS_LIST } from '../data/views_list';


interface IHomeNavigationProps {
  scrollTo: (sectionRef: SectionRefType) => void;
  setPage: (page: number) => void;
  selected: number;
}

const HomeNavigation = ({ scrollTo, setPage, selected }: IHomeNavigationProps) => {

  const handlerClick = (page: number, sectionRef: SectionRefType) => {
    scrollTo(sectionRef);
    setPage(page);
  }


  return (
    <div className="flex justify-end mr-4 wh-full color-black ">
      <div className="flex justify-evenly">
        <AnimateSharedLayout>
          {VIEWS_LIST.map((el) => (
            <MenuItem
              text={el.text}
              key={el.page}
              selected={selected === el.page}
              onClick={() => handlerClick(el.page, el.ref)}
            />
          ))}
        </AnimateSharedLayout>
      </div>
    </div>
  )
}

export default HomeNavigation;
