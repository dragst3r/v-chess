import { iField } from "./static.utility";

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

const checkForCastleRows = (
  { state, index }: iField,
  throne: string
): boolean => {
  let fieldsNearCastle =
    state.match(/^k/) && throne !== "" // check if throne is empty and field is knight or king
      ? [1, 9, 111, 119]
      : [1, 9, 59, 61, 111, 119];
  return fieldsNearCastle.indexOf(index) >= 0;
};
const checkForCastleColumns = (
  { state, index }: iField,
  throne: string
): boolean => {
  let fieldsNearCastle =
    state.match(/^k/) && throne !== ""
      ? [11, 21, 99, 109]
      : [11, 21, 49, 71, 99, 109];
  return fieldsNearCastle.indexOf(index) >= 0;
};

export const checkForFights = (newField: iField, board: iField[]): number[] => {
  let fieldsToUpdate: number[] = [];
  const addToKillList = (index: number): void => {
    fieldsToUpdate.push(index);
  };

  const fieldsToCheck: Array<{ field: iField; direction: string }> = (() => {
    const fields: Array<{ field: iField; direction: string }> = [];
    if (
      newField.row !== 0 &&
      checkForEnemy(newField, board[newField.index - 11])
    )
      fields.push({ field: board[newField.index - 11], direction: "column" });
    if (
      newField.column !== 10 &&
      checkForEnemy(newField, board[newField.index + 1])
    )
      fields.push({ field: board[newField.index + 1], direction: "row" });
    if (
      newField.row !== 10 &&
      checkForEnemy(newField, board[newField.index + 11])
    )
      fields.push({ field: board[newField.index + 11], direction: "column" });
    if (
      newField.column !== 0 &&
      checkForEnemy(newField, board[newField.index - 1])
    )
      fields.push({ field: board[newField.index - 1], direction: "row" });
    return fields;
  })();

  for (let { field, direction } of fieldsToCheck) {
    if (direction === "row") {
      if (checkForCastleRows(field, board[60].state)) {
        addToKillList(field.index);
      } else {
        if (field.column === 0 || field.column === 10) continue;
        if (board[field.index - 1].index !== newField.index) {
          if (checkForEnemy(field, board[field.index - 1]))
            addToKillList(field.index);
        }
        if (board[field.index + 1].index !== newField.index) {
          if (checkForEnemy(field, board[field.index + 1]))
            addToKillList(field.index);
        }
      }
    }
    if (direction === "column") {
      if (checkForCastleColumns(field, board[60].state)) {
        addToKillList(field.index);
      } else {
        if (field.row === 0 || field.row === 10) continue;
        if (board[field.index + 11].index !== newField.index) {
          if (checkForEnemy(field, board[field.index + 11]))
            addToKillList(field.index);
        }
        if (board[field.index - 11].index !== newField.index) {
          if (checkForEnemy(field, board[field.index - 11]))
            addToKillList(field.index);
        }
      }
    }
  }

  return fieldsToUpdate;
};
