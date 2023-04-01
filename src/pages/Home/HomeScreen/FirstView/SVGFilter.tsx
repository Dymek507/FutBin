import React from 'react'

const SVGFilter = () => {
  return (
    <svg>
      <filter id="turbulence" x="0" y="0" width="100%" height="100%">
        <feTurbulence
          id="sea-filter"
          numOctaves="2"
          seed="2"
          baseFrequency="0.05 0.06"
        ></feTurbulence>
        <feDisplacementMap scale="40" in="SourceGraphic"></feDisplacementMap>
        <animate
          xlinkHref="#sea-filter"
          attributeName="baseFrequency"
          dur="60s"
          keyTimes="0;0.5;1"
          values="0.02 0.06;0.04 0.08;0.02 0.06"
          repeatCount="indefinite"
        ></animate>
      </filter>
    </svg>
  )
}

export default SVGFilter