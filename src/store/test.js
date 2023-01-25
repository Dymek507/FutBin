exports = async function ({ query, headers, body }, response) {
  const collection = context.services
    .get("mongodb-atlas")
    .db("fut_draft")
    .collection("players");
  let playersList = await collection.find().toArray();
  let newPlayerList = [];

  const players = EJSON.parse(body.text());

  const newPlayers = players.filter((player) => {
    playersList.forEach((myPlayer) => {
      if (myPlayer.id === player.id) {
        return false;
      }
      return true;
    });
  });

  return newPlayers;
};
// exports = async function ({ query, headers, body }, response) {
//   const collection = context.services
//     .get("mongodb-atlas")
//     .db("fut_draft")
//     .collection("players");
//   let playersList = await collection.find().toArray();
//   let newPlayerList = [];
//   if (body) {
//     const players = EJSON.parse(body.text());

//     const newPlayers = players.filter((player) => {
//       playersList.forEach((myPlayer) => {
//         if (myPlayer.id === player.id) {
//           return false;
//         }
//         return true;
//       });
//     });
//     if (newPlayers.length > 0) {
//       return await collection.insertMany(newPlayers);
//     }
//   }
// };
