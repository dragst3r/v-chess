import { BooleanLiteral } from "typescript";
import { iField } from "../components/board/board.component";

interface iFieldChange {
  currentField: iField;
  newField: iField;
  board: iField[];
}

export const validateMove = (
  currentField: iField,
  newField: iField,
  board: iField[]
) => {
  //Check for vertical and horizontal moves
  if (
    currentField.row !== newField.row &&
    currentField.column !== newField.column
  )
    return false;
  //Check if destination is empty
  if (newField.state !== "") return false;
  let filterFrom: number;
  let filterTo: number;
  let arrayWithFieldsBetween: iField[];
  //Move in row
  if (currentField.row === newField.row) {
    if (currentField.column < newField.column) {
      filterFrom = currentField.column + 1;
      filterTo = newField.column;
    } else {
      filterFrom = newField.column;
      filterTo = currentField.column - 1;
    }
    arrayWithFieldsBetween = board.filter(
      (i) =>
        i.row === currentField.row &&
        i.column >= filterFrom &&
        i.column <= filterTo
    );
    //return TRUE if all field.state are empty
    return arrayWithFieldsBetween.every((j) => j.state === "");
  }
  //Move in column
  if (currentField.column === newField.column) {
    if (currentField.row < newField.row) {
      filterFrom = currentField.row + 1;
      filterTo = newField.row;
    } else {
      filterFrom = newField.row;
      filterTo = currentField.row - 1;
    }
    arrayWithFieldsBetween = board.filter(
      (i) =>
        i.column === currentField.column &&
        i.row >= filterFrom &&
        i.row <= filterTo
    );
    //return TRUE if all field.state are empty
    return arrayWithFieldsBetween.every((j) => j.state === "");
  }
};

const checkForEnemy = (field1: iField, field2: iField): boolean => {
  //Checks if are from same team or empty
  return !(
    field1.state.charAt(0) === field2.state.charAt(0) || field2.state === ""
  );
};
const checkForFriend = (field1: iField, field2: iField): boolean => {
  return field1.state.charAt(0) === field2.state.charAt(0);
};

const checkForCastleRows = (index: number): boolean => {
  let fieldsNearCastle = [1, 9, 59, 61, 111, 119];
  return index in fieldsNearCastle;
};
const checkForCastleColumns = (index: number): boolean => {
  let fieldsNearCastle = [11, 21, 49, 71, 99, 109];
  return index in fieldsNearCastle;
};

export const checkForFights = (
  currentField: iField,
  newField: iField,
  board: iField[]
) => {
  // for (let i = 0; i < board.length; i++) {
  //   if (board[i].column === newField.column && board[i].row === newField.row) {
  //     newFieldIndex = i;
  //     return;
  //   }
  // }
  let fieldsToUpdate: number[] = [];
  let fieldToCheck;
  const fight = (
    fieldToCheck: iField,
    castleCheck: (index: number) => boolean
  ) => {
    console.log('castle check')
    if (checkForEnemy(newField, fieldToCheck)) {
      if (castleCheck(fieldToCheck.index)) {
        fieldsToUpdate.push(fieldToCheck.index);
      }
    }
  };

  if (newField.row !== 0) {
    fight(board[newField.index - 11], checkForCastleColumns);
  }
  if (newField.column !== 10) {
    fight(board[newField.index +1], checkForCastleRows);
  }  
  if (newField.row !== 10) {
    fight(board[newField.index +11], checkForCastleColumns);
  }
  if (newField.column !== 0) {
    fight(board[newField.index -1], checkForCastleColumns);
  }

  console.log(fieldsToUpdate)
};
