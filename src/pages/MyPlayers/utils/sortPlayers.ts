import type { Player } from "../../../types/modelTypes";
import { Variant } from "../MyPlayers";

const sortPlayers = (
  playersArray: Player[],
  sortingAtr: Variant,
  sortingDir: boolean
): Player[] => {
  const newArray = [...playersArray];
  //Sorting by attribute
  newArray.sort((a, b) => {
    return a[sortingAtr] - b[sortingAtr];
  });

  //Sorting by direction
  if (sortingDir) {
    newArray.reverse();
  }

  return newArray;
};

export default sortPlayers;
