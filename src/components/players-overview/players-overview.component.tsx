import React, { useEffect } from "react";
import { useTurnContext } from "../../utility/turn-context";
import { PlayerServerInfo } from "../../utility/types";
import Player from "../player/player.component";
import "./players-overview.styles.css";

interface Props {
  players: PlayerServerInfo[];
}

const PlayersOverview: React.FC<Props> = ({ players }) => {
  const [ turn] = useTurnContext()

  return (
    <div onClick={()=>console.log(turn)}>{turn.side}
      {players.map(p=><Player player={p} />)}
    </div>
  );
};

export default PlayersOverview;
