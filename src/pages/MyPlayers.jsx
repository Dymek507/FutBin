import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayersData, deletePlayer } from "../store/players-actions";

import {
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import Card from "../components/Card";
import { Box } from "@mui/system";
import CardLine from "../components/CardLine";
import {
  ArrowDownward,
  ArrowUpward,
  ViewList,
  ViewModule,
} from "@mui/icons-material";
import sortPlayers from "../components/functions/sortPlayers";
import { useTheme } from "@emotion/react";

const sortOptions = [
  { label: "Overall", type: "ovr" },
  { label: "Pace", type: "pac" },
  { label: "Shooting", type: "sho" },
  { label: "Passing", type: "pas" },
  { label: "Dribbling", type: "dri" },
  { label: "Defending", type: "def" },
  { label: "Physicality", type: "phy" },
];

const MyPlayers = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const myPlayers = useSelector((state) => state.players.myPlayers);
  const uId = useSelector((state) => state.ui.userData?.uId);
  const [playersGridView, setPlayersGridView] = useState(true);
  const [pickedPlayers, setPickedPlayers] = useState([]);
  const [sortingAtr, setSortingAtr] = useState("ovr");
  const [sortingDir, setSortingDir] = useState(true);
  const playersArray = useMemo(
    () => sortPlayers(myPlayers, sortingAtr, sortingDir),

    [myPlayers, sortingAtr, sortingDir]
  );

  useEffect(() => {
    dispatch(fetchPlayersData());
  }, [dispatch, uId]);

  const pickPlayer = (playerData) => {
    const playerExists = pickedPlayers.find(
      (player) => player.id === playerData.id
    );

    if (!playerExists) {
      setPickedPlayers((prev) => [...prev, playerData]);
    } else {
      let newPickedPlayers = [...pickedPlayers];
      newPickedPlayers = newPickedPlayers.filter(
        (player) => player.id !== playerExists.id
      );
      setPickedPlayers(newPickedPlayers);
    }
  };

  const deletePlayers = () => {
    pickedPlayers.forEach((player) => {
      dispatch(deletePlayer(player.id));
    });
  };

  const sortingHandler = (event) => {
    setSortingAtr(event.target.value);
  };

  return (
    <Box
      bgcolor="primary.main"
      sx={{
        mx: "6rem",
        mt: "2rem",
      }}
    >
      {/* Buttons with wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "4rem",
          marginX: "1rem",
        }}
      >
        <Button variant="contained" color="neutral">
          Send
        </Button>
        {/* Change view style */}
        <IconButton
          color="neutral"
          onClick={() => {
            setPlayersGridView((prev) => !prev);
          }}
        >
          {playersGridView ? <ViewList /> : <ViewModule />}
        </IconButton>

        {/* Change sorting direction */}
        <IconButton
          color="neutral"
          onClick={() => {
            setSortingDir((prev) => !prev);
          }}
        >
          {sortingDir ? <ArrowUpward /> : <ArrowDownward />}
        </IconButton>

        {/* Sorting by attribute */}
        <FormControl>
          <Select
            width={"10%"}
            id="sorting-players"
            value={sortingAtr}
            onChange={sortingHandler}
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            {sortOptions.map((option) => {
              return (
                <MenuItem key={option.label} value={option.type}>
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button variant="contained" color="neutral" onClick={deletePlayers}>
          Sell
        </Button>
      </Box>

      {/* >>>>>>>>> List view <<<<<<<<<<<<< */}
      {!playersGridView && (
        <Grid
          sx={{ width: { xs: "100vw", sm: "80vw", md: "60vw" } }}
          container
          rowSpacing={1}
        >
          {playersArray?.map((player) => (
            <Grid key={player.id} item xs={12} sm={12} md={12} lg={12} xl={12}>
              <CardLine
                playerData={player}
                sendPlayer={pickPlayer}
                pickedArray={pickedPlayers}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {/* >>>>>>>>> Grid view <<<<<<<<<<<<<<< */}
      {playersGridView && (
        <Grid
          sx={{ p: "1rem", width: "94vw" }}
          container
          rowSpacing={0}
          columnSpacing={0}
        >
          {playersArray?.map((player) => (
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={player.id}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
            >
              <Card
                playerData={player}
                sendPlayer={pickPlayer}
                fontSize={"14px"}
                pickedArray={pickedPlayers}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MyPlayers;
