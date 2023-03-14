import brown from "./brown_pack.png";
import silver from "./silver_pack.png";
import gold from "./gold_pack.png";
import special from "./special_pack.png";

export interface PackImages {
  brown: string;
  silver: string;
  gold: string;
  special: string;
}
const packImgs: PackImages = {
  brown,
  silver,
  gold,
  special,
};

export default packImgs;
