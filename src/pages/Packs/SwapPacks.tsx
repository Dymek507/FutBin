import React, { useState } from 'react';
import { SliderData } from './sliderData';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pack from './Pack';
import { PackT } from '../../modules/modelTypes';

interface SwapPacksProps {
  packs: any[],
  buyPack: (packData: PackT) => void
}

const SwapPacks = ({ packs, buyPack }: SwapPacksProps) => {
  const [current, setCurrent] = useState(0);
  const length = packs.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(packs) || packs.length <= 0) {
    return null;
  }

  return (
    <section className='flex flex-row text-[4rem] '>
      <div className='flex-center'>
        <ArrowBackIosNewIcon fontSize='inherit' className='active:text-black' onClick={prevSlide} />
      </div>
      {packs.map((pack, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Pack
                key={pack.id}
                packData={pack}
                openModal={() => { }}
                onClick={buyPack}
              />
            )}
          </div>
        );
      })}
      <div className='flex-center'>
        <ArrowForwardIosIcon fontSize='inherit' className='active:text-black' onClick={nextSlide} />
      </div>
    </section>
  );
};

export default SwapPacks;