import React from 'react'

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import { appearAnimation } from '../helpers/Animations';

interface IButtonMotionProps {
  children: React.ReactNode,
  link?: string,
  onClick?: () => void
}

const ButtonMotion = ({ children, link = "#", onClick }: IButtonMotionProps) => {
  return (
    <motion.div {...appearAnimation(0.6, 1.2)}>
      <button onClick={onClick} className="pb-1 text-[0.9em] text-white normal-case rounded-none w-fit btn btn-outline hover:bg-white z-[1]">
        <Link to={link}>
          {children}
        </Link>
      </button>
    </motion.div>
  )
}

export default ButtonMotion