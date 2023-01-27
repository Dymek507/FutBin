import { useState, useEffect, useMemo } from "react";
import { useFetcherSWR } from "./useFetcherSWR";
import axios from "axios";
import { apiKey } from "../futDbConfig";

const AuthToken = apiKey;

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
