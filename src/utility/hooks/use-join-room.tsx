import { useEffect, useState } from "react";
import { useSocket } from "../socket-context";
import { useUser } from "../user-context";

type User = {
  id: string;
  side: string;
};

export const useJoinRoom = ():[React.Dispatch<React.SetStateAction<string>>,User[]] => {
  const [roomId, setRoomId] = useState("");
  const socket = useSocket();
  const [user] = useUser();
  const [users, setUsers] = useState<User[]>([{id:"0",side:"l"}]);
  useEffect(() => {
    if (roomId && user.loggedIn) {
      console.log(roomId, user);
      socket.emit("join-room", roomId, user.userId);
    }
    if (socket.connected) {
      socket.on("joined-room", (users) => setUsers(users));
      socket.on("room-closed", () => console.log("closed room"));
    }
  }, [socket, roomId, user]);
  return [setRoomId, users];
};
