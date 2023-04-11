import React from 'react'
import landingPageImages from '../../../assets/landing_page/first_page';
import SVGFilter from './SVGFilter';

const BackgroundWater = () => {
  const { ocean_background: bgImg } = landingPageImages;
  return (
    < div className="bg-bottom bg-cover wh-full" style={{ backgroundImage: `url(${bgImg})` }
    } >
      <div className="absolute bottom-0 left-[-3vw] bg-bottom bg-cover w-[106vw] h-full" style={{
        backgroundImage: `url(${bgImg})`,
        filter: 'url("#turbulence")'
      }} />
      <SVGFilter />
    </div >
  )
}

export default BackgroundWater