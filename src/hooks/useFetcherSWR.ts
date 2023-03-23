import { useState, useEffect, useCallback } from "react";
import useSWR from "swr";
import axios, { AxiosRequestConfig } from "axios";

const AuthToken = process.env.REACT_APP_FUT_DB_KEY;

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
  const [image, setImage] = useState<string>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `https://futdb.app/api/${endPoint}` : null,
    fetcher,
    { suspense: true }
  );

  useEffect(() => {
    if (data) {
      const playerImage = URL.createObjectURL(data);
      setImage(playerImage);
      setShouldFetch(false);
    }
  }, [data]);

  // useEffect(() => {
  //   if (error) {
  //     throw new Response(
  //       JSON.stringify({ message: "Could not fetch players" }),
  //       { status: 500 }
  //     );
  //   }
  // }, [error]);

  useEffect(() => {
    setShouldFetch(true);
  }, [endPoint]);

  return { image, error, isLoading };
};
