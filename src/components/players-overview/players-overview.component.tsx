import React from "react";
import Player, { iPlayer } from "../player/player.component";
import "./players-overview.styles.css";

interface Props {
  players: iPlayer[];
  currentTurn: iPlayer
}

const PlayersOverview: React.FC<Props> = ({ players, currentTurn }) => {
  const [player1, player2] = players;
  return (
    <div> 
      <Player myTurn={currentTurn.index===player1.index} player={player1} />
      <Player myTurn={currentTurn.index===player2.index} player={player2}  />
    </div>
  );
};

export default PlayersOverview;
