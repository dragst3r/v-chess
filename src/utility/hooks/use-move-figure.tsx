import { useBoard } from "../board-context";
import { checkForFights, validateMove } from "../fields.utility";
import { useSelectedField } from "../selected-field-context";
import { iField } from "../static.utility";
import { useTurn, useTurnUpdate } from "../turn-context";
import { useVictory } from "../victory-contex";


const useMoveFigure = () => {
  const [,,setVictory] = useVictory()
  const [boardState, setBoardState] = useBoard();
  const [selectedField, setSelectedField] = useSelectedField();
  const turn = useTurn()
  const updateTurn = useTurnUpdate();
  const moveFigure = (item: iField) => {
    
    const [isMoveValid, isGameOver] = validateMove(selectedField, item, boardState, setVictory,turn)
    let gameOver = isGameOver;
    if (isMoveValid) {
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
      updateTurn(gameOver);
      if (gameOver) {
        setVictory(turn) // Add hook for finnishing game
      }
    }
  };
  return moveFigure;
};

export default useMoveFigure;
