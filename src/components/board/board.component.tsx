import React from "react";
import Field from "../field/field.component";
import "./board.styles.css";
import { useBoard } from "../../utility/board-context";


interface Props {}

const Board: React.FC<Props> = () => {
  const [board] = useBoard()

  return (
    <div>
      <div className="board">
        {board.map((m, i) => (
          <Field
            key={`R${m.row}C${m.column}`}
            position={i}
            item={m}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
