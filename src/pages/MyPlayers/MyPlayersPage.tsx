import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../../store/app/hooks";
import { fetchPlayersData, deletePlayer } from "../../store/players-actions";
import manageMoney from "../../store/app/manageMoney"

import {
  Button,
  FormControl,
  Grid,
  IconButton,
  LinearProgress,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import { Box } from "@mui/system";
import CardLine from "../../components/CardLine";
import {
  ArrowDownward,
  ArrowUpward,
  ViewList,
  ViewModule,
} from "@mui/icons-material";
import sortPlayers, { SortingVariants } from "../../utils/sortPlayers";
import { Player } from "../../types/modelTypes";
import InfoScreen from "../../components/InfoScreen";
import GridView from "../../components/GridView";
import { CustomSelect } from "./helpers/CustomSelect";

const sortOptions: { label: string, type: SortingVariants }[] = [
  { label: "Overall", type: SortingVariants.rat },
  { label: "Pace", type: SortingVariants.pac },
  { label: "Shooting", type: SortingVariants.sho },
  { label: "Passing", type: SortingVariants.pas },
  { label: "Dribbling", type: SortingVariants.dri },
  { label: "Defending", type: SortingVariants.def },
  { label: "Physicality", type: SortingVariants.phy },
];

const MyPlayers = () => {
  const dispatch = useAppDispatch();
  const myPlayers = useAppSelector((state) => state.players.myPlayers);
  const uId = useAppSelector((state) => state.ui.userData?.uId);
  const [playersGridView, setPlayersGridView] = useState<boolean>(true);
  const [pickedPlayers, setPickedPlayers] = useState<Player[]>([]);
  const [sortingAtr, setSortingAtr] = useState<SortingVariants>(SortingVariants.rat);
  const [sortingDir, setSortingDir] = useState<boolean>(true);
  const playersArray = useMemo(
    () => sortPlayers(myPlayers, sortingAtr, sortingDir),
    [myPlayers, sortingAtr, sortingDir]
  );

  useEffect(() => {
    dispatch(fetchPlayersData());
  }, [dispatch, uId]);

  const pickPlayer = (playerData: Player) => {
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
      if (uId !== null && player.playerPrice !== undefined) {
        manageMoney(uId, player.playerPrice);
        dispatch(deletePlayer(player.id));
      }
    });
  };

  const sortingHandler = (event: SelectChangeEvent<unknown>) => {
    setSortingAtr(event.target.value as SortingVariants);
  };

  return (
    <>
      {myPlayers.length !== 0 ? <Box
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
            height: "5rem",
            marginX: "1rem",
            marginBottom: '1rem',
            color: 'white',
            borderBottom: '2px solid white'
          }}
        >
          <Button variant="contained" color="secondary" size="large">
            Send
          </Button>
          {/* Change view style */}
          <div>
            <IconButton
              color="inherit"
              onClick={() => {
                setPlayersGridView((prev) => !prev);
              }}
            >
              {playersGridView ? <ViewList /> : <ViewModule />}
            </IconButton>

            {/* Change sorting direction */}
            <IconButton
              color="inherit"
              onClick={() => {
                setSortingDir((prev) => !prev);
              }}
            >
              {sortingDir ? <ArrowUpward /> : <ArrowDownward />}
            </IconButton>

            {/* Sorting by attribute */}
            <FormControl
            >
              <CustomSelect
                id="sorting-players"
                value={sortingAtr}
                onChange={sortingHandler}
              >
                {sortOptions.map((option) => {
                  return (
                    <MenuItem key={option.label} value={option.type}>
                      {option.label}
                    </MenuItem>
                  );
                })}
              </CustomSelect>
            </FormControl>
          </div>
          <Button variant="contained" color="secondary" size="large" onClick={deletePlayers}>
            Sell
          </Button>
        </Box>

        {/* >>>>>>>>> List view <<<<<<<<<<<<< */}
        <Suspense fallback={<div className="w-[100vw] sm:w-[80vw] ">
          <LinearProgress />
        </div>}>
          {!playersGridView && (
            <Grid
              sx={{ width: { xxs: "100vw", sm: "80vw", md: "60vw" } }}
              container
              rowSpacing={1}
            >
              {playersArray?.map((player) => (
                <Grid key={player.id} item xxs={12} xs={12} sm={12} md={12} lg={12} xl={12}>
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
            <GridView playersArray={playersArray} pickPlayer={pickPlayer} cardSize="14px" pickedPlayers={pickedPlayers} xxs={12}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2} />
          )}
        </Suspense>
      </Box> : <div className="w-full"><InfoScreen text1="No Players" text2="Open packs" /></div>}
    </>
  );
};

export default MyPlayers;
