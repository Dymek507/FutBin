import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Pack from './Pack';
import { PackT } from '../../../types/modelTypes';

interface PacksDisplayProps {
  packs: PackT[],
  onClick: (packData: PackT) => void,
  showPrice?: boolean
}

const PacksDisplay = ({ packs, onClick, showPrice }: PacksDisplayProps) => {

  const [current, setCurrent] = useState(0);
  const length = packs.length;

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

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
    <div className='wh-full flex-center'>
      {isMobile ?
        // Mobile view
        <section className='p-4 bg-primary-main'>
          <div className='bg-primary-main flex flex-row py-8 text-[1.4em] xs:text-[1.6em] border-white border-2'>
            <div className='flex-center text-[2em]'>
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
                      onClick={onClick}
                      showPrice={showPrice}
                    />
                  )}
                </div>
              );
            })}
            <div className='flex-center text-[2em]'>
              <ArrowForwardIosIcon fontSize='inherit' className='active:text-black' onClick={nextSlide} />
            </div>
          </div>
        </section>
        :
        // Desktop view
        <section className='p-1 bg-primary-main'>
          <div className='flex flex-row flex-wrap text-[1.4em] justify-evenly gap-8 bg-primary-main p-8 m-4 border-2 border-white '>
            {packs.map(pack => <Pack key={pack.id}
              packData={pack}
              openModal={() => { }}
              onClick={onClick}
              showPrice={showPrice}
            />)}
          </div>
        </section>
      }
    </div >
  );
};

export default PacksDisplay;