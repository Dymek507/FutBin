import { useState, useEffect } from "react";
import { useFetcherSWR } from "./useFetcherSWR";
import axios from "axios";

const AuthToken = "9da99810-9712-4bb5-a2a6-73e3df0078c0";

const axiosFetchBlob = {
  responseType: "blob",
  headers: {
    Accept: "image/png",
    "X-Auth-Token": AuthToken,
  },
};

export const useFetchImages = (playerObject) => {
  const { id, club, nation } = playerObject;

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
