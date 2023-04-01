import React, { useState } from 'react'
import dummyPlayer from '../data/dummyPlayer'
import Card from './Card'
import {
  goldN,
  goldR,
  silverN,
  silverR,
  bronzeN,
  bronzeR,
} from "../assets/CardBackgrounds";

interface FlipCardProps {
  front: JSX.Element;
  back: JSX.Element;
  className?: string;
}

const FlipCard = ({ front, back, className }: FlipCardProps) => {
  const [rotate, setRotate] = useState(false)
  return (
    <div className={'bg-transparent cursor-pointer  group perspective' + className} onClick={() => setRotate(prev => !prev)}>
      <div className='relative w-full h-full duration-1000 preserve-3d ' style={{ transform: `${rotate ? 'rotateY(180deg)' : 'rotateY(0deg)'} ` }}>
        <div className='absolute w-full h-full duration-1000 backface-hidden flex-center' >
          {front}
        </div>
        <div className='absolute w-full h-full overflow-hidden duration-1000 backface-hidden my-rotate-y-180' >
          {back}
        </div>

      </div>
    </div>
  )
}

export default FlipCard