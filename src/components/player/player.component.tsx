import React from "react";
import Figure from "../figure/figure.component";

import "./player.styles.css";
interface Props {
  player: iPlayer;
  myTurn: boolean
}
export interface iPlayer {
  displayName: string;
  figure: string;
  index: number
}

const Player: React.FC<Props> = ({ player,myTurn }) => {
  return (
    <div>
      <Figure figure={player.figure} />
      <a className={`player-name${myTurn?' my-turn':''}`}>{player.displayName}</a>
    </div>
  );
};

export default Player;
