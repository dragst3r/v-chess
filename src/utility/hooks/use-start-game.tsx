import { useEffect } from "react";
import { useSocket } from "../socket-context";

export const useStartGame = (
  roomId: string,
  setRoomIsReady: React.Dispatch<React.SetStateAction<boolean>>
): (() => void) => {
  const socket = useSocket();

  const startGame = () => {
    console.log("emit game start");
    socket.emit("start-game", roomId);
  };
  useEffect(() => {
    console.log(socket.connected);

    if (socket.connected)
      socket.on("game-started", () => {
        console.log("game started");
        setRoomIsReady(true);
      });
  }, [socket.connected,socket,setRoomIsReady]);
  return startGame;
};
