import React from "react";

const OpeningAnimation = () => {
  return (
    <div className="absolute w-full h-full z-10 duration-1000 ease-linear ">
      <div className="flex justify-center items-end  bg-opening-1 h-[50vh] z-20 animate-[moveyb_2s_linear_1s]">
        <div className="text-8xl mb-2 text-white">Fut</div>
      </div>
      {/*Add 300ms instead s*/}
      <div className="flex justify-center items-start  bg-opening-2 h-[50vh] z-20 animate-[movey_2s_linear_1s]">
        <div className="text-8xl mb-2 text-white">Draft</div>
      </div>
    </div>
  );
};

export default OpeningAnimation;
