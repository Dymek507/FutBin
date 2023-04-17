import type { Player } from "../types/modelTypes";

export enum SortingVariants {
  rat = "rating",
  pac = "pace",
  sho = "shooting",
  pas = "passing",
  dri = "dribbling",
  def = "defending",
  phy = "physicality",
}

const sortPlayers = (
  playersArray: Player[],
  sortingAtr: SortingVariants,
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
