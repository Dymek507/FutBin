import React from "react";
import Card from "../components/Card";

const formation = [
  { nr: "1", pos: "GK", x: 0, y: 180 },
  { nr: "2", pos: "RB", x: 150, y: 360 },
  { nr: "3", pos: "LB", x: 150, y: 3 },
  { nr: "4", pos: "CB", x: 120, y: 110 },
  { nr: "5", pos: "CB", x: 120, y: 250 },
  { nr: "6", pos: "CM", x: 250, y: 110 },
  { nr: "7", pos: "RM", x: 380, y: 360 },
  { nr: "8", pos: "CM", x: 250, y: 250 },
  { nr: "9", pos: "ST", x: 500, y: 180 },
  { nr: "10", pos: "CAM", x: 370, y: 180 },
  { nr: "11", pos: "LM", x: 380, y: 3 },
];

const Squad = () => {
  const player = {
    id: 1283,
    resourceId: 231747,
    resourceBaseId: 231747,
    futBinId: 26263,
    futWizId: 26,
    firstName: "Kylian",
    lastName: "Mbappé",
    name: "Kylian Mbappé",
    commonName: "Mbappé",
    height: 182,
    weight: 73,
    birthDate: "1998-12-20",
    age: 24,
    league: 16,
    nation: 18,
    club: 73,
    rarity: 1,
    traits: [
      {
        id: 1,
        name: "Technical Dribbler (CPU AI)",
      },
      {
        id: 4,
        name: "Solid Player",
      },
      {
        id: 6,
        name: "Speed Dribbler (CPU AI)",
      },
      {
        id: 8,
        name: "Flair",
      },
      {
        id: 9,
        name: "Outside Foot Shot",
      },
    ],
    specialities: [],
    position: "ST",
    skillMoves: 5,
    weakFoot: 4,
    foot: "Right",
    attackWorkRate: "High",
    defenseWorkRate: "Low",
    totalStats: 470,
    totalStatsInGame: 2223,
    color: "gold",
    rating: 91,
    ratingAverage: 78,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 36,
    physicality: 76,
    paceAttributes: {
      acceleration: 97,
      sprintSpeed: 97,
    },
    shootingAttributes: {
      positioning: 92,
      finishing: 93,
      shotPower: 88,
      longShots: 82,
      volleys: 83,
      penalties: 80,
    },
    passingAttributes: {
      vision: 83,
      crossing: 78,
      freeKickAccuracy: 69,
      shortPassing: 85,
      longPassing: 71,
      curve: 80,
    },
    dribblingAttributes: {
      agility: 93,
      balance: 81,
      reactions: 93,
      ballControl: 91,
      dribbling: 93,
      composure: 88,
    },
    defendingAttributes: {
      interceptions: 38,
      headingAccuracy: 72,
      standingTackle: 34,
      slidingTackle: 32,
      defenseAwareness: 26,
    },
    physicalityAttributes: {
      jumping: 77,
      stamina: 87,
      strength: 76,
      aggression: 64,
    },
    goalkeeperAttributes: {
      diving: null,
      handling: null,
      kicking: null,
      positioning: null,
      reflexes: null,
      speed: 97,
    },
  };
  return (
    <div className="relative h-[80vh] w-[55vh] bg-squad-field bg-center bg-cover">
      {formation.map((position) => (
        <div
          key={position.nr}
          className="absolute h-32 w-20 bg-blank-card bg-center bg-contain bg-no-repeat"
          style={{ bottom: position.x, left: position.y }}
        >
          <Card playerData={player} fontSize={"4.5px"} />
        </div>
      ))}
    </div>
  );
};

export default Squad;
