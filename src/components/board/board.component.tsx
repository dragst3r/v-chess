import React, { useState } from "react";
import Field from "../field/field.component";
import "./board.styles.css";
import { validateMove } from "../../utility/fields.utility";
import { initialBoard } from "../../utility/static.utility";
import { iPlayer } from "../player/player.component";

interface Props {
  newTurn: () => void
}
export interface iField {
  row: number;
  column: number;
  state: string;
}

const Board: React.FC<Props> = ({newTurn}) => {
  const [boardState, setBoardState] = useState<iField[]>(initialBoard());
  const [selectedField, setSelectedField] = useState<iField>({
    row: -1,
    column: -1,
    state: "",
  });

  const moveFigure = (item: iField): void => {
    if (validateMove(selectedField, item, boardState)) {
      let newBoard = boardState.map((i) =>
        i.row === item.row && i.column === item.column
          ? { ...i, state: selectedField.state }
          : i.row === selectedField.row && i.column === selectedField.column
          ? { ...i, state: "" }
          : i
      );
      setBoardState(newBoard);
      setSelectedField({ row: -1, column: -1, state: "" });
      newTurn()
    }
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
