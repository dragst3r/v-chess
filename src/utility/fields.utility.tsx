import { iPlayer } from "../components/player/player.component";
import { iField } from "./static.utility";
import { useVictory } from "./victory-contex";
  

export const validateMove = (
  currentField: iField,
  newField: iField,
  board: iField[],
  setVictory: (winner: iPlayer) => void,
  currentTurn: iPlayer
):[boolean, boolean] => {
  //Check if newField is one of castles
  if ([0, 10, 110, 120].indexOf(newField.index) >= 0) {
    if (currentField.state === "king") {
      setVictory(currentTurn)
      return [true,true];
    }else return [false,false]
  }
  //Check for vertical and horizontal moves
  if (
    currentField.row !== newField.row &&
    currentField.column !== newField.column
  )
    return [false,false];
  //Check if destination is empty
  if (newField.state !== "") return [false,false];
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
    return [arrayWithFieldsBetween.every((j) => j.state === ""),false];
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
    return [arrayWithFieldsBetween.every((j) => j.state === ""), false];
  }
  return [false,false];
};

export const checkForFights = (newField: iField, board: iField[]): number[] => {
  let fieldsToUpdate: number[] = [];
  const addToKillList = (index: number): void => {
    fieldsToUpdate.push(index);
  };

  const checkForEnemy = (
    checkedField: iField,
    checkAgainst: iField
  ): boolean => {
    //Checks if are from same team or empty
    return !(
      checkedField.state.charAt(0) === checkAgainst.state.charAt(0) ||
      checkAgainst.state === ""
    );
  };

  const checkForCastleRows = ({ state, index }: iField): boolean => {
    const throne = board[60].state;
    let fieldsNearCastle =
      state.match(/^k/) && throne !== "" // check if throne is empty and field is knight or king
        ? [1, 9, 111, 119]
        : [1, 9, 59, 61, 111, 119];
    return fieldsNearCastle.indexOf(index) >= 0;
  };
  const checkForCastleColumns = ({ state, index }: iField): boolean => {
    const throne = board[60].state;
    let fieldsNearCastle =
      state.match(/^k/) && throne !== ""
        ? [11, 21, 99, 109]
        : [11, 21, 49, 71, 99, 109];
    return fieldsNearCastle.indexOf(index) >= 0;
  };
  const fightKing = (king: iField, selectedField: iField): boolean => {
    const validateFight = (field: iField): boolean => {
      console.log(selectedField);
      if (field.index === selectedField.index) return true;
      if (field.row === selectedField.row && checkForCastleRows(field))
        return true;
      if (field.column === selectedField.column && checkForCastleColumns(field))
        return true;
      if (checkForEnemy(king, field)) return true;
      return false;
    };
    const indexesToCheck = [
      king.index - 1,
      king.index + 1,
      king.index - 11,
      king.index + 11,
    ];
    const fightResults: boolean[] = [];
    for (let index of indexesToCheck) {
      if (index < 0 || index > 120) continue;
      if (board[index].row !== king.row && board[index].column !== king.column)
        continue;
      console.log("Fight", board[index].state);
      fightResults.push(validateFight(board[index]));
    }
    console.log(fightResults);
    return fightResults.every((i) => i === true);
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
    console.log(fieldsToCheck.map((i) => i.field));
    if (field.state === "king") {
      console.log("Fight king");
      const kingIsDead = fightKing(field, newField);
      if (kingIsDead) {
        addToKillList(field.index);
      } else continue;
    }
    if (direction === "row") {
      if (checkForCastleRows(field)) {
        addToKillList(field.index);
      } else {
        if (field.column === 0 || field.column === 10) continue;
        const fieldBehind = board[field.index - 1];
        if (fieldBehind.index !== newField.index) {
          if (checkForEnemy(field, fieldBehind)) addToKillList(field.index);
        }
        const fieldInFrontOf = board[field.index + 1];
        if (fieldInFrontOf.index !== newField.index) {
          if (checkForEnemy(field, fieldInFrontOf)) addToKillList(field.index);
        }
      }
    }
    if (direction === "column") {
      if (checkForCastleColumns(field)) {
        addToKillList(field.index);
      } else {
        if (field.row === 0 || field.row === 10) continue;
        const fieldBelow = board[field.index + 11];
        if (fieldBelow.index !== newField.index) {
          if (checkForEnemy(field, fieldBelow)) addToKillList(field.index);
        }
        const fieldAbove = board[field.index - 11];
        if (fieldAbove.index !== newField.index) {
          if (checkForEnemy(field, fieldAbove)) addToKillList(field.index);
        }
      }
    }
  }

  return fieldsToUpdate;
};
