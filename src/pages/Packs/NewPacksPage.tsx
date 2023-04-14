import React from "react";

import { packsActions } from "../../store/packs-slice";
import { sendPackData } from "../../store/packs-actions";
import { useAppDispatch } from "../../store/app/hooks";
import { PackT } from "../../types/modelTypes";
import PacksDisplay from "./helpers/PacksDisplay";
import { packsData } from "../../data/packsData";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const NewPacks = () => {
  const dispatch = useAppDispatch();

  const buyPack = (pack: PackT) => {
    dispatch(packsActions.addPack(pack));
    dispatch(sendPackData());
  };
  return (
    <div>
      <div className="flex-center h-1/6">
        <Link to="/my-packs">
          <Button variant="contained" color="secondary" size="large">My Packs</Button>
        </Link>
      </div>
      <div className="h-5/6">
        <PacksDisplay packs={packsData} buyPack={buyPack} showPrice={true} />
      </div>
    </div>

  );
};

export default NewPacks;
