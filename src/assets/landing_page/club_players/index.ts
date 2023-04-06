import kevin from "./kevin.png";
import lautaro from "./lautaro.png";
import reece from "./reece.png";
import rashford from "./rashford.png";
import reus from "./reus.png";

export interface IClubPlayer {
  kevin: string;
  lautaro: string;
  reece: string;
  rashford: string;
  reus: string;
}
const clubPlayer: IClubPlayer = {
  kevin,
  lautaro,
  reece,
  rashford,
  reus,
};

export default clubPlayer;
