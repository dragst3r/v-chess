import React, { useEffect, useState } from "react";
import { useTurn } from "../../utility/turn-context";
import Figure from "../figure/figure.component";

import "./player.styles.css";
interface Props {
  player: iPlayer;
}
export interface iPlayer {
  displayName: string;
  figure: string;
  index: number;
}

const Player: React.FC<Props> = ({ player }) => {
  const currentTurn = useTurn();
  const [myTurn, setMyTurn] = useState(false)
  const isMyTurn = () => currentTurn.index === player.index;
  useEffect(() => {
    setMyTurn(isMyTurn());
  }, [currentTurn]);

  return (
    <div>
      <Figure figure={player.figure} />
      <a className={`player-name${myTurn ? " my-turn" : ""}`}>
        {player.displayName}
      </a>
    </div>
  );
};

export default Player;
