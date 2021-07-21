import { useBoard } from "../board-context";
import { checkForFights, validateMove } from "../fields.utility";
import { useSelectedField } from "../selected-field-context";
import { iField } from "../static.utility";
import { useTurnUpdate } from "../turn-context";

const useMoveFigure = () => {
  const [boardState, setBoardState] = useBoard();
  const [selectedField, setSelectedField] = useSelectedField();
  const updateTurn = useTurnUpdate();
  const moveFigure = (item: iField) => {
    let gameOver = false;
    if (validateMove(selectedField, item, boardState)) {
      let boardAfterMove = boardState.map((i) => {
        if (i.index === item.index) return { ...i, state: selectedField.state };
        if (i.index === selectedField.index) return { ...i, state: "" };
        return i;
      });
      let fieldsToClear = checkForFights(
        boardAfterMove[item.index],
        boardAfterMove
      );
      let boardAfterKills = boardAfterMove.map((i) => {
        if (fieldsToClear.indexOf(i.index) >= 0) {
          if (i.state === "king") gameOver = true;
          return { ...i, state: "" };
        }
        return i;
      });
      setBoardState(boardAfterKills);
      setSelectedField({ row: -1, column: -1, state: "", index: -1 });
      updateTurn();
      if (gameOver) {
        alert("Game over") // Add hook for finnishing game
    }
  };

  return moveFigure;
};

export default useMoveFigure;
