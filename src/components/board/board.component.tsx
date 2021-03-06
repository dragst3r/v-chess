import React from "react";
import Field from "../field/field.component";
import "./board.styles.css";
import { useBoard } from "../../utility/board-context";

import Victory from "../victory/victory.component";
import { useVictory } from "../../utility/victory-contex";
import { useTurnContext } from "../../utility/turn-context";
import { useUser } from "../../utility/user-context";
import BoardPlayer from "../board-player/board-player.component";
import { useScreenSize } from "../../utility/hooks/use-screen-size";
import { PlayerServerInfo } from "../../utility/types";

interface Props {
  users: PlayerServerInfo[]
}

const Board: React.FC<Props> = ({users}) => {
  const [board] = useBoard();
  const [gameOver] = useVictory();
  const [turn, setTurn] = useTurnContext();
  const [{ userId }] = useUser();
  

  return (
    <div className="board-and-players-container">
        <BoardPlayer turn={turn.side} side="king" />
      <div className="board-container">
        {gameOver && <Victory users={users}/>}
        <div className="board">
          {board.map((m, i) => (
            <Field
              userId={userId}
              turn={turn}
              key={`R${m.row}C${m.column}`}
              position={i}
              item={m}
            />
          ))}
        </div>
      </div>
        <BoardPlayer turn={turn.side} side="viking" />
    </div>
  );
};

export default Board;
