import React, { useState } from "react";

import { Grid, Box, Paper } from "@mui/material";

import { styled } from "@mui/material/styles";
import Form from "../components/Form";
import { useGetPokemonByNameQuery } from "../components/rtk/pokemon";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomeScreen = () => {
  // const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // console.log(data, error, isLoading);

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
    <div className="w-screen h-[90vh] bg-main p-4">
      <Grid container rowSpacing={5} columnSpacing={5}>
        <Grid item xs={12}>
          <Item></Item>
        </Grid>
        <Grid item xs={4}>
          <Item></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={10}>
          <Item>xs=10</Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeScreen;
