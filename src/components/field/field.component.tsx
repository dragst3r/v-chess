import React, { useState, useEffect } from "react";
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

const Field: React.FC<Props> = ({
  item,
  move,
  selectedField,
  select,
  position,
}) => {
  const turn = useTurn();
  const updateTurn = useTurnUpdate();

  const handleClick = () => {
    //Empty field, nothing selected
    if (selectedField.state === "" && item.state === "") return;

    //Move selected figure to new filed
    if (
      selectedField.state !== "" &&
      item.state === "" &&
      (selectedField.column === item.column || selectedField.row === item.row)
    ) {
      move(item);
      return;
    }
    //Change selected
    if (item.state !== "") {
      // +Add checking for which player's turn is
      select(item);
      return;
    }
  };
  // class for selected field
  const selectedCheck = () =>
    selectedField.row === item.row && selectedField.column === item.column
      ? " selected"
      : "";
  const isMyTurn = (): boolean => {
    return item.state.charAt(0) === turn.figure.charAt(0) || item.state === "";
  };

  const selectableCheck = (myTurn: boolean) => {
    if (myTurn && item.state !== "") return " selectable";
    return "";
  };
  const [selectable, setSelectable] = useState("");
  const [selected, setSelected] = useState(selectedCheck());
  useEffect(() => {
    setSelected(selectedCheck());
  }, [selectedField]);

  const [myTurn, setMyTurn] = useState(false);

  useEffect(() => {
    let myTurn = isMyTurn();
    setMyTurn(myTurn);
    setSelectable(selectableCheck(myTurn));
  }, [turn]);

  return (
    <div
      onClick={myTurn ? handleClick : () => {}}
      className={`field${selected + selectable}`}
    >
      {item.state !== "" && <Figure figure={item.state} />}
    </div>
  );
};

export default React.memo(Field);
//`field${selected + selectable}`
//onClick={myTurn ? handleClick : () => {}} className={`field${selected + selectable}`}
