import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";

import { playersActions } from "../store/players-slice";
import { fetchPlayersData, deletePlayer } from "../store/players-actions";

import { Button, ButtonGroup, dialogClasses, Grid } from "@mui/material";
import Card from "../components/Card";
import { Box } from "@mui/system";
import CardLine from "../components/CardLine";

const MyPlayers = () => {
  const dispatch = useDispatch();
  const playersArray = useSelector((state) => state.players.myPlayers);
  const uId = useSelector((state) => state.ui.uId);
  const [playersGridView, setPlayersGridView] = useState(true);
  const [pickedPlayers, setPickedPlayers] = useState([]);

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
      dispatch(playersActions.deleteFromMyPlayers(player.id));
      dispatch(deletePlayer(player.id));
    });
  };

  const CardWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "theme.primary.mainDarker",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

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
        <Button variant="contained">Wyślij</Button>
        <Button
          variant="contained"
          onClick={() => {
            setPlayersGridView((prev) => !prev);
          }}
        >
          Zmień widok
        </Button>
        <Button variant="contained" onClick={deletePlayers}>
          Usuń kartę
        </Button>
      </Box>
      {/* List view */}
      {!playersGridView && (
        <Grid
          sx={{ width: { xs: "100vw", sm: "80vw", md: "60vw" } }}
          container
          rowSpacing={1}
        >
          {playersArray?.map((player) => (
            <Grid key={player.id} item xs={12} sm={12} md={12} lg={12} xl={12}>
              <CardLine playerData={player} />
            </Grid>
          ))}
        </Grid>
      )}
      {/* Grid view */}
      {playersGridView && (
        // <div className="w-full">
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
              />
            </Grid>
          ))}
        </Grid>
        // </div>
      )}
    </Box>
  );
};

export default MyPlayers;
