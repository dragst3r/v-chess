import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useBoard } from "../board-context";
import { useSocket } from "../socket-context";
import { useTurnContext } from "../turn-context";
import { PlayerServerInfo } from "../types";

export const useUpdateBoard = () => {
  const socket = useSocket();
  const { id } = useParams<{ id: string }>();
  const [, setBoardState] = useBoard();
  const [board, setBoard] = useState([]);
  const [, setTurn] = useTurnContext();
  const emitUpdateBoard = (board: any) => {
    console.log(id);
    if (id) {
      socket.emit("update-board", board, id);
      setBoard(board);
    }
  };
  useEffect(() => {
    console.log("1");
    socket.on("board-updated", (board, nextTurn: PlayerServerInfo) => {
      console.log("current turn", nextTurn.side);
      setBoardState(board);
      setTurn(nextTurn);
    });
  }, [socket, board]);
  return emitUpdateBoard;
};
