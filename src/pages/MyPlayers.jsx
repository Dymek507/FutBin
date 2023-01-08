import React from "react";
import Layout from "../components/UI/Layout";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { drawPlayer } from "../store/players-fetch";

const pack = [55, 55];

const MyPlayers = () => {
  const dispatch = useDispatch();

  const playersArray = useSelector((state) => state.players.playersArray);

  const drawPlayers = () => {
    pack.forEach((player) => dispatch(drawPlayer(player)));
  };
  return (
    <Layout>
      <button onClick={drawPlayers}>Losuj</button>
      <div className="h-full w-screen relative flex grow flex-wrap gap-0.5 justify-center bg-board-opacity overflow-hidden">
        {playersArray &&
          playersArray.map((player) => (
            <Card key={player.id} playerData={player} />
          ))}
      </div>
    </Layout>
  );
};

export default MyPlayers;
