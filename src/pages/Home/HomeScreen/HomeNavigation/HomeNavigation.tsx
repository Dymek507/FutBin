import React, { useState } from 'react';

import { motion, AnimateSharedLayout } from 'framer-motion';
import MenuItem from './MenuItem';

const menuItems = ['Play matches', 'Buy packs', 'Draw players', 'Assembly squad'];

const HomeNavigation = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex justify-end mr-4 wh-full color-black ">
      <div className="flex justify-evenly">
        <AnimateSharedLayout>
          {menuItems.map((el, i) => (
            <MenuItem
              text={el}
              key={i}
              selected={selected === i}
              onClick={() => setSelected(i)}
            />
          ))}
        </AnimateSharedLayout>
      </div>
    </div>
  )
}

export default HomeNavigation;

{/* <nav className="p-4 text-3xl text-white">
            <ul className="flex flex-row gap-5">
              <Link to="/my-players">
                <li className="border-b-2">Play matches</li>
              </Link>
              <li>Buy packs</li>
              <li>Draw players</li>
              <li>Assembly squad</li>
            </ul >
          </nav > */}