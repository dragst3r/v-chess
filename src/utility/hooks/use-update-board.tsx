import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useBoard } from "../board-context";
import { useSocket } from "../socket-context";
import { emptyPlayer, iField } from "../static.utility";
import { useTurnContext } from "../turn-context";
import { PlayerServerInfo } from "../types";
import { useVictory } from "../victory-contex";

export const useUpdateBoard = () => {
  const socket = useSocket();
  const { id } = useParams<{ id: string }>();
  const [, setBoardState] = useBoard();
  const [board, setBoard] = useState([]);
  const [, setTurn] = useTurnContext();
  const [victory, , setWinner, restartVictory] = useVictory();
  const emitUpdateBoard = (board: any, victory: boolean) => {
    if (id) {
      console.log(victory);
      socket.emit("update-board", board, id, victory);
      setBoard(board);
    }
  };
  useEffect(() => {
    socket.on(
      "board-updated",
      (
        board: iField[],
        nextTurn: PlayerServerInfo,
        victory: boolean,
        restart: boolean
      ) => {
        setBoardState(board);
        setTurn(nextTurn);
        if (victory) setWinner(nextTurn);
        if (restart) restartVictory();
      }
    );
  }, [socket, board, victory]);
  return emitUpdateBoard;
};
