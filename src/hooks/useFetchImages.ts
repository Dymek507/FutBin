import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { useFetcherSWR } from "./useFetcherSWR";

interface IPlayerImages {
  playerPhoto: string;
  playerNation: string;
  playerClub: string;
  imagesLoaded: boolean;
}

let startLoading = true;

export const useFetchImages = (
  id: number,
  club: number,
  nation: number
): IPlayerImages => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const {
    image: playerPhoto,
    error: errorPhoto,
    isLoading: isLoadingPhoto,
  } = useFetcherSWR(`players/${id}/image`);
  const {
    image: playerNation,
    error: errorNation,
    isLoading: isLoadingNation,
  } = useFetcherSWR(`nations/${nation}/image`);
  const {
    image: playerClub,
    error: errorClub,
    isLoading: isLoadingClub,
  } = useFetcherSWR(`clubs/${club}/image`);

  //Check if every image is loaded
  // useEffect(() => {
  //   if (isLoadingClub && isLoadingNation && isLoadingPhoto && startLoading) {
  //     const variant = "info";
  //     enqueueSnackbar("Loading", { variant });
  //     startLoading = false;
  //   }
  //   if (!isLoadingClub && !isLoadingNation && !isLoadingPhoto) {
  //     setImagesLoaded(true);
  //     const variant = "success";
  //     enqueueSnackbar("Loaded", { variant });
  //   }
  // }, [isLoadingClub, isLoadingNation, isLoadingPhoto, enqueueSnackbar]);

  return { playerPhoto, playerNation, playerClub, imagesLoaded };
};
