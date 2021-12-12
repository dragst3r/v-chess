import { useEffect } from "react";
import { useSocket } from "../socket-context";
import { useTurnContext } from "../turn-context";
import {  iField, initialBoard } from "../static.utility";
import { useBoard } from "../board-context";
import { PlayerServerInfo } from "../types";

export const useStartGame = (
  roomId: string,
  setRoomIsReady:React.Dispatch<React.SetStateAction<boolean>>

): ((firstMove: string) => void) => {
  const socket = useSocket();
  const [,setBoard] = useBoard()
  const [,setTurn] = useTurnContext()
  const startGame = (firstMove:string) => {
    console.log("START GAME")
    socket.emit("start-game", roomId,firstMove,initialBoard());
  };
  useEffect(() => {

    if (socket.connected)
      socket.on("game-started", (firstMoveBy: PlayerServerInfo,board:iField[]) => {
        console.log("game started");
        setTurn(firstMoveBy)
        setBoard(board)
        setRoomIsReady(true);
      });
  }, [socket.connected,socket,setRoomIsReady]);
  return startGame;
};
