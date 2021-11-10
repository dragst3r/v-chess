import React from "react";
import Field from "../field/field.component";
import "./board.styles.css";
import { useBoard } from "../../utility/board-context";

import Victory from "../victory/victory.component";
import { useVictory } from "../../utility/victory-contex";
import { useTurnContext } from "../../utility/turn-context";
import { useUser } from "../../utility/user-context";

interface Props {}

const Board: React.FC<Props> = () => {
  const [board] = useBoard();
  const [gameOver] = useVictory();
  const [turn,setTurn] = useTurnContext()
  const [{ userId }] = useUser();

  return (
    <div className="board-container">
      {gameOver && <Victory />}
      <div className="board">
        {board.map((m, i) => (
          <Field userId={userId} turn={turn} key={`R${m.row}C${m.column}`} position={i} item={m} />
        ))}
      </div>
    </div>
  );
};

export default Board;
