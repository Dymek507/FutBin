import React from 'react'
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Triangle = styled.div`
border-style: solid;
border-width: 35vh 0 65vh 40vw;
`;

interface LogoTringleProps {
  color: string
}

const LogoTriangle = ({ color }: LogoTringleProps) => {
  return (
    <motion.div
      key={color}
      className='absolute top-0 left-0 z-0'
      initial={{ x: '-20%' }}
      animate={{ x: 0 }}
      exit={{ x: '-20%' }}
      transition={{ duration: 0.5 }}
    >
      <Triangle
        style={{ borderColor: `transparent transparent transparent ${color}` }}
      />
    </motion.div>


  )
}

export default LogoTriangle
