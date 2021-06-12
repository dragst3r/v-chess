import React from "react";
import { useTurn } from "../../utility/turn-context";
import Figure from "../figure/figure.component";

import "./player.styles.css";
interface Props {
  player: iPlayer;
}
export interface iPlayer {
  displayName: string;
  figure: string;
  index: number
}

const Player: React.FC<Props> = ({ player }) => {
  const currentTurn = useTurn()
  const isMyTurn = ()=> currentTurn.index===player.index
  return (
    <div>
      <Figure figure={player.figure} />
      <a className={`player-name${isMyTurn()?' my-turn':''}`}>{player.displayName}</a>
    </div>
  );
};

export default Player;
