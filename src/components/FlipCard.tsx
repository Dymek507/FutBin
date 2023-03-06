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

const FlipCard = () => {
  const [rotate, setRotate] = useState(false)
  return (
    <div className='w-[300px] h-[420px] bg-transparent cursor-pointer group perspective' onClick={() => setRotate(prev => !prev)}>
      <div className='relative preserve-3d w-full h-full duration-1000 ' style={{ transform: `${rotate ? 'rotateY(180deg)' : 'rotateY(0deg)'}` }}>
        <div className='absolute backface-hidden w-full h-full duration-1000 flex-center' >
          <Card playerData={dummyPlayer} fontSize={'14px'} />
        </div>
        <div className='absolute backface-hidden w-full h-full overflow-hidden duration-1000 my-rotate-y-180' >
          <img src={goldR} className="w-full h-full" />
        </div>

      </div>
    </div>
  )
}

export default FlipCard