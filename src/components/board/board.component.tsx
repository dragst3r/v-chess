import React from "react";
import Field from "../field/field.component";
import "./board.styles.css";

interface Props {
  board: number[];
}

const Board: React.FC<Props> = ({ board }) => {
  return (
    <div onClick={()=>console.table(board)} className="board">
      {board.map((m,i) => (
        <Field key={m} position={i}/>
      ))}
    </div>
  );
};

export default Board;
