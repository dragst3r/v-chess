import React from "react";
import Player, { iPlayer } from "../player/player.component";
import "./players-overview.styles.css";

interface Props {
  players: iPlayer[];
}

const PlayersOverview: React.FC<Props> = ({ players: [player1, player2] }) => {
  return (
    <div>
      <Player player={player1} />
      <Player player={player2} />
    </div>
  );
};

export default PlayersOverview;