import React, { useEffect, useState } from "react";
import { useTurnContext } from "../../utility/turn-context";
import { PlayerServerInfo } from "../../utility/types";
import Figure from "../figure/figure.component";

import "./player.styles.css";
interface Props {
  player: PlayerServerInfo;
}

const Player: React.FC<Props> = ({ player }) => {
  const [currentTurn] = useTurnContext();
  const [myTurn, setMyTurn] = useState(false);
  console.log(currentTurn,player)
  useEffect(() => {
    const isMyTurn = () => currentTurn.userId === player.userId;

    setMyTurn(isMyTurn());
  }, [currentTurn]);

  return (
    <div>
      <Figure figure={player?.side} />
      <a className={`player-name${myTurn ? " my-turn" : ""}`}>
        {player?.displayName}
      </a>
    </div>
  );
};

export default React.memo(Player);
