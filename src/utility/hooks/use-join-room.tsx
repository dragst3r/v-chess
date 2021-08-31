import { useEffect, useState } from "react";
import { useSocket } from "../socket-context";
import { useUser } from "../user-context";

export const useJoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const socket = useSocket();
  const [user] = useUser();
  useEffect(() => {
    if (roomId&& user.loggedIn) {
      console.log(roomId, user);
      socket.emit("join-room", roomId, user.userId);
    }
    if (socket.connected) {
      socket.on("joined-room", (users) => console.log("U", users));
      socket.on('room-closed',()=>console.log('closed room'))
    }
  }, [socket, roomId,user]);
  return setRoomId;
};
