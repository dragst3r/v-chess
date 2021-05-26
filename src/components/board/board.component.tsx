import React, { useState } from "react";
import Field from "../field/field.component";
import Figure from "../figure/figure.component";
import { iField } from "../../App";
import "./board.styles.css";

interface Props {
  board: iField[];
  updateBoard: (item: iField) => void;
}

const Board: React.FC<Props> = ({ board, updateBoard }) => {
  const [boardState, setBoardState] = useState<iField[]>(board);
  const [selectedField, setSelectedField] = useState<iField>({
    row:0,
    column:0,
    state: "",
  });

  const moveFigure = (item: iField) => {
    let newBoard = boardState.map((i) =>
    i.row===item.row&&i.column===item.column
        ? { ...i, state: selectedField.state }
        : i.row===selectedField.row&&i.column===selectedField.column
        ? { ...i, state: "" }
        : i
    );
    setBoardState(newBoard);
    setSelectedField({ row:0,
      column:0, state: "" });
  };
  return (
    <div>
      <div className="board">
        {boardState.map((m, i) => (
          <Field
            selectedField={selectedField}
            select={setSelectedField}
            move={moveFigure}
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
