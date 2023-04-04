import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { appearAnimation } from '../Animations';

const ButtonMotion = () => {
  return (
    <motion.div className="gap-4 flex-center grow sm:items-start" {...appearAnimation(0.6, 1.2)}>
      <button className="pb-1 text-xl text-white normal-case rounded-none w-fit btn btn-outline hover:bg-white z-[1]">
        <Link to="/new-packs">
          Open App
        </Link>
      </button>
    </motion.div>
  )
}

export default ButtonMotion