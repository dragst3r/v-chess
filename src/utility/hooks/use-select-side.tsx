import { useSocket } from "../socket-context";
import { useUser } from "../../utility/user-context";
import { useEffect } from "react";

export const useSelectSide = (): ((
  side: string,
  roomId: string
) => void) => {
  const socket = useSocket();
  const [{ userId }] = useUser();
  const selectSide = (side: string, roomId: string) => {
    if(roomId) socket.emit("select-side", side, userId, roomId);
  };

  return selectSide;
};