import React from "react";
import Field from "../field/field.component";
import "./board.styles.css";
import { useBoard } from "../../utility/board-context";

import Victory from "../victory/victory.component";
import { useVictory } from "../../utility/victory-contex";
import { useJoinRoom } from "../../utility/hooks/use-join-room";
import { useTurnContext } from "../../utility/turn-context";

interface Props {}

const Board: React.FC<Props> = () => {
  const [board] = useBoard();
  const [gameOver] = useVictory();
  const [turn,setTurn] = useTurnContext()

  return (
    <div className="board-container">
      {gameOver && <Victory />}
      <div className="board">
        {board.map((m, i) => (
          <Field turn={turn} key={`R${m.row}C${m.column}`} position={i} item={m} />
        ))}
      </div>
    </div>
  );
};

export default Board;
