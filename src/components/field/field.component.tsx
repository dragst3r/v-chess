import React, { useState } from "react";
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
      return;
    }
    //Change selected
    if (selectedField.state !== "" && item.state !== "") {
      // +Add checking for which player's turn is
      select(item);
      return;
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`field ${selectedField.row === item.row&&selectedField.column === item.column ? "selected" : ""}`}
    >
      {item.state !== "" ? <Figure figure={item.state} /> : null}
    </div>
  );
};

export default React.memo(Field);
