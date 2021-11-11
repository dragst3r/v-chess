import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useBoard } from "../board-context";
import { useSocket } from "../socket-context";
import { useTurnContext } from "../turn-context";
import { PlayerServerInfo } from "../types";
import { useVictory } from "../victory-contex";

export const useUpdateBoard = () => {
  const socket = useSocket();
  const { id } = useParams<{ id: string }>();
  const [, setBoardState] = useBoard();
  const [board, setBoard] = useState([]);
  const [, setTurn] = useTurnContext();
  const [victory, , setWinner] = useVictory();
  const emitUpdateBoard = (board: any, victory: boolean) => {
    console.log(id);
    if (id) {
      socket.emit("update-board", board, id, victory);
      setBoard(board);
    }
  };
  useEffect(() => {
    socket.on("board-updated", (board, nextTurn: PlayerServerInfo, victory) => {
      console.log("current turn", nextTurn.side);
      setBoardState(board);
      setTurn(nextTurn);
      if (victory) setWinner(nextTurn);
    });
  }, [socket, board, victory]);
  return emitUpdateBoard;
};
