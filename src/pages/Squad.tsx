import React, { useState } from "react";
import Card from "../components/Card";
import dummyPlayer from "../components/dummyPlayer";

const formation = [
  { nr: "1", pos: "GK", x: 0, y: 50, player: null },
  { nr: "2", pos: "RB", x: 20, y: 90, player: null },
  { nr: "3", pos: "LB", x: 20, y: 10, player: null },
  { nr: "4", pos: "CB", x: 15, y: 30, player: null },
  { nr: "5", pos: "CB", x: 15, y: 70, player: null },
  { nr: "6", pos: "CM", x: 40, y: 30, player: null },
  { nr: "7", pos: "RM", x: 70, y: 80, player: null },
  { nr: "8", pos: "CM", x: 40, y: 70, player: null },
  { nr: "9", pos: "ST", x: 75, y: 50, player: null },
  { nr: "10", pos: "CAM", x: 55, y: 50, player: null },
  { nr: "11", pos: "LM", x: 70, y: 20, player: null },
];

const Squad = () => {
  const [mySquad, setMySquad] = useState(formation)


  return (
    <div className="flex justify-center items-center w-full ">
      <div className="relative h-full w-full bg-squad-field bg-center bg-no-repeat bg-[length:100%_100%]">
        {formation.map((position) => (
          <div
            key={position.nr}
            className="absolute flex-center h-[20%] w-[20%] bg-blank-card bg-center bg-contain bg-no-repeat origin-center translate-x-[-50%] cursor-pointer"
            style={{ bottom: `${position.x}%`, left: `${position.y}%` }}
          >
            {/* <Card onClick=() playerData={dummyPlayer} fontSize={'0.3em'} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Squad;
