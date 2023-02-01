import { useState, useEffect } from "react";
import useSWR from "swr";
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

const fetcher = (url) => axios.get(url, axiosFetchBlob).then((r) => r.data);

export const useFetcherSWR = (endPoint) => {
  const [playerImage, setPlayerImage] = useState("");
  const [shouldFetch, setShouldFetch] = useState(true);

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `https://futdb.app/api/${endPoint}` : null,
    fetcher
  );

  useEffect(() => {
    if (data) {
      const playerPhoto = URL.createObjectURL(data);
      setPlayerImage(playerPhoto);
      setShouldFetch(false);
    }
  }, [data]);

  return playerImage;
};
