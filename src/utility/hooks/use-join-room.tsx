import { useEffect, useMemo, useState } from "react";
import { useBoard } from "../board-context";
import { useSocket } from "../socket-context";
import { useTurnContext } from "../turn-context";
import { PlayerServerInfo } from "../types";
import { useUser } from "../user-context";

export const useJoinRoom = (
  setRoomIsReady: React.Dispatch<React.SetStateAction<boolean>>
): [React.Dispatch<React.SetStateAction<string>>, PlayerServerInfo[]] => {
  const [roomId, setRoomId] = useState("");
  const [,setTurn] = useTurnContext()
  const socket = useSocket();
  const [user] = useUser();
  const [users, setUsers] = useState<PlayerServerInfo[]>([]);
  const [, setBoard] = useBoard();
  useMemo(() => {
    if (roomId && user.loggedIn) {
      socket.emit("join-room", roomId, user);
      socket.on(
        "joined-room",
        (
          users: PlayerServerInfo[],
          board: Array<any>,
          roomIsReady: boolean,
          currentTurn: PlayerServerInfo
        ) => {
          setUsers(users);
          setBoard(board);
          setRoomIsReady(roomIsReady);
          setTurn(currentTurn)
        }
      );
    }
  }, [socket, roomId, user, socket.connected]);

  return [setRoomId, users];
};
