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
      <div className='relative w-full h-full duration-1000 preserve-3d ' style={{ transform: `${rotate ? 'rotateY(180deg)' : 'rotateY(0deg)'}` }}>
        <div className='absolute w-full h-full duration-1000 backface-hidden flex-center' >
          {/* <Card playerData={dummyPlayer} fontSize={'14px'} /> */}
        </div>
        <div className='absolute w-full h-full overflow-hidden duration-1000 backface-hidden my-rotate-y-180' >
          <img src={goldR} className="w-full h-full" />
        </div>

      </div>
    </div>
  )
}

export default FlipCard