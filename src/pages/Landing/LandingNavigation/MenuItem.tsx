import React from 'react'
import { motion } from 'framer-motion'

interface IMenuItem {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const MenuItem = ({ text, selected, onClick }: IMenuItem) => (
  <motion.div
    className="relative mx-6 mt-4 text-xl cursor-pointer first:ml-12"
    onClick={onClick}
    animate={{ opacity: selected ? 1 : .5 }}
  >
    {text}
    {selected && (
      <motion.div
        className="absolute top-[110%] left-0 w-full h-[2px] bg-white rounded-2xl opacity-80"
        layoutId="underline"
      />
    )}
  </motion.div>
)

export default MenuItem