import React, { useState, useContext, useEffect } from "react";
import { useTurn, useTurnUpdate } from "../../utility/turn-context";
import { iField } from "../board/board.component";

import Figure from "../figure/figure.component";

import "./field.styles.css";

interface Props {
  position: number;
  item: iField;
  move: (item: iField) => void;
  select: (item: iField) => void;
  selectedField: iField;
}

const Field: React.FC<Props> = ({ item, move, selectedField, select }) => {
  const turn = useTurn();
  const updateTurn = useTurnUpdate();

  const handleClick = () => {
    //Empty field, nothing selected
    if (selectedField.state === "" && item.state === "") return;
    //Set this field as selected
    if (selectedField.state === "" && item.state !== "") {
      // +Add checking for which player's turn is
      select(item);
      return;
    }
    //Move selected figure to new filed
    if (selectedField.state !== "" && item.state === "") {
      move(item);
      updateTurn();
      return;
    }
    //Change selected
    if (selectedField.state !== "" && item.state !== "") {
      // +Add checking for which player's turn is
      select(item);
      return;
    }
  };
  // class for selected field
  const selected = () =>
    selectedField.row === item.row && selectedField.column === item.column
      ? "selected"
      : "";
  const isMyTurn = (): boolean =>
    item.state.charAt(0) === turn.figure.charAt(0) || item.state === "";

  const [myTurn, setMyTurn] = useState(isMyTurn());
  useEffect(() => {
    console.log(isMyTurn())
    setMyTurn(isMyTurn());
  }, [turn]);
  const selectable = () => {
    if (myTurn && item.state !== "") return " selectable";
    return "";
  };

  return (
    <div
      onClick={isMyTurn() ? handleClick : () => {}}
      className={`field ${selected() + selectable()}`}
    >
      {item.state !== "" ? <Figure figure={item.state} /> : null}
    </div>
  );
};

export default React.memo(Field);
