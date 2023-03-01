import { useState, useEffect } from "react";
import useSWR from "swr";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import { apiKey } from "../futDbConfig";
import { Blob } from "buffer";

const AuthToken = apiKey;

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetPlayerImage = {
  data: Blob;
};

// interface AxiosRequestConfig {
//   responseType: string,
//   headers: {
//     Acc
//   }
// }

const axiosFetchBlob: AxiosRequestConfig = {
  responseType: "blob",
  headers: {
    Accept: "image/png",
    "X-Auth-Token": AuthToken,
  },
};

const fetcher = (url: string) =>
  axios.get(url, axiosFetchBlob).then((r) => r.data);

export const useFetcherSWR = (endPoint: string) => {
  const [playerImage, setPlayerImage] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

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
