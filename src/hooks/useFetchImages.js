import { useState, useEffect } from "react";
import { useFetcherSWR } from "./useFetcherSWR";

export const useFetchImages = (playerObject) => {
  const { id = 1, club = 1, nation = 1 } = playerObject;

  const playerPhoto = useFetcherSWR(`players/${id}/image`);
  const playerNation = useFetcherSWR(`nations/${nation}/image`);
  const playerClub = useFetcherSWR(`clubs/${club}/image`);

  const [playerImages, setPlayerImages] = useState({});

  useEffect(() => {
    if (playerPhoto) {
      setPlayerImages((prev) => ({ ...prev, playerPhoto }));
    }
  }, [playerPhoto]);

  useEffect(() => {
    if (playerNation) {
      setPlayerImages((prev) => ({ ...prev, playerNation }));
    }
  }, [playerNation]);

  useEffect(() => {
    if (playerClub) {
      setPlayerImages((prev) => ({ ...prev, playerClub }));
    }
  }, [playerClub]);

  return playerImages;
};
