import React, { useState } from "react";
import Result from "./Result";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddResultModal from "./AddResultModal";
import { useAppSelector } from "../../store/app/hooks";
import InfoModal from "../../components/InfoModal";

// Make styled button

const Results = () => {
  const [showModal, setShowModal] = useState(false);
  const results = useAppSelector((state) => state.admin.results);

  return (
    <>
      <AddResultModal open={showModal} onClose={() => setShowModal(false)} />
      <div className="flex justify-center items-center h-[10%] gap-4">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => setShowModal(true)}
        >
          Add Result
        </Button>
        <Link to="/new-packs">
          <Button variant="contained" color="secondary" size="large">
            Buy Pack
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-3 mt-2 ">
        {results?.map((result, index) => (
          <Result key={index} resultData={result} />
        ))}
      </div>
    </>
  );
};

export default Results;
