import { useEffect } from "react";
import { useSocket } from "../socket-context";
import { useTurnContext } from "../turn-context";
import {  initialBoard } from "../static.utility";
import { useBoard } from "../board-context";

export const useStartGame = (
  roomId: string,
  setRoomIsReady: React.Dispatch<React.SetStateAction<boolean>>
): ((firstMove: string) => void) => {
  const socket = useSocket();
  const [,setBoard] = useBoard()
  const [,setTurn] = useTurnContext()
  const startGame = (firstMove:string) => {
    console.log("emit game start");
    socket.emit("start-game", roomId,firstMove,initialBoard());
  };
  useEffect(() => {
    console.log(socket.connected);

    if (socket.connected)
      socket.on("game-started", (firstMoveBy,board) => {
        console.log("game started");
        setTurn(firstMoveBy)
        setBoard(board)
        setRoomIsReady(true);
        console.log("!!!!!!!!!!!!!!",firstMoveBy)
      });
  }, [socket.connected,socket,setRoomIsReady]);
  return startGame;
};
