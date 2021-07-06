import React, { useState, useEffect } from "react";
import useMoveFigure from "../../utility/hooks/use-move-figure";
import { useSelectedField } from "../../utility/selected-field-context";
import { iField } from "../../utility/static.utility";
import { useTurn, useTurnUpdate } from "../../utility/turn-context";

import Figure from "../figure/figure.component";

import "./field.styles.css";

interface Props {
  position: number;
  item: iField;
}

const Field: React.FC<Props> = ({ item, position }) => {
  const [selectedField, setSelectedField] = useSelectedField();
  const turn = useTurn();
  const updateTurn = useTurnUpdate();
  const moveFigure = useMoveFigure();
  const handleClick = () => {
    console.log(selectedField);
    //Empty field, nothing selected
    if (selectedField.state === "" && item.state === "") return;

    //Move selected figure to new filed
    if (
      selectedField.state !== "" &&
      item.state === "" &&
      (selectedField.column === item.column || selectedField.row === item.row)
    ) {
      moveFigure(item);
      return;
    }
    //Change selected
    if (item.state !== "") {
      // +Add checking for which player's turn is
      console.log("selecting");
      setSelectedField(item);
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
      {item.index}
    </div>
  );
};

export default React.memo(Field);
//`field${selected + selectable}`
//onClick={myTurn ? handleClick : () => {}} className={`field${selected + selectable}`}

//item.state !== "" && <Figure figure={item.state}/>
