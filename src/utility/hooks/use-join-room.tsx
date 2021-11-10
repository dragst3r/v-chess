import { useEffect, useMemo, useState } from "react";
import { useSocket } from "../socket-context";
import { PlayerServerInfo } from "../types";
import { useUser } from "../user-context";



export const useJoinRoom = (): [
  React.Dispatch<React.SetStateAction<string>>,
  PlayerServerInfo[]
] => {
  const [roomId, setRoomId] = useState("");
  const socket = useSocket();
  const [user] = useUser();
  const [users, setUsers] = useState<PlayerServerInfo[]>([]);
  useMemo(() => {

    if ( roomId && user.loggedIn) {
      socket.emit("join-room", roomId, user);
      socket.on("joined-room", (users:PlayerServerInfo[]) => {
        setUsers(users);
      });
    }
  }, [socket, roomId, user,socket.connected]);

  return [setRoomId, users];
};
