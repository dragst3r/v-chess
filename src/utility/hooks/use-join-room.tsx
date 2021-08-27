import { useEffect, useState } from "react";
import { useSocket } from "../socket-context";
import { useParams } from 'react-router-dom';

export const useJoinRoom = () => {
  const [roomId, setRoomId] = useState("");
  const socket = useSocket();
  const id = useParams()
  useEffect(() => {
      console.log(id)
    if (roomId) {
        console.log(roomId)
      socket.emit("join-room", roomId);
    }
  }, [socket,roomId]);
  return setRoomId;
};
