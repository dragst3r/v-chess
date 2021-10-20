import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase-auth";
import { useSocket } from "../../utility/socket-context";
import JoinRoom from "../join-room/join-room.component";
import "./rooms-to-join.styles.css";
type User = {
  id: string;
  side: string;
};
type Room = {
  roomId: string;
  players: User[] | null[];
};

const RoomsToJoin = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const socket = useSocket();
  useEffect(() => {
    console.log(socket.connected);
    if (socket.connected) {
      if (rooms.length == 0) {
        socket.emit("get-rooms");
      }
      socket.on("available-rooms", (rooms: Room[]) => {
        console.log("rooms: ", rooms);
        setRooms(rooms);
      });
    }
  }, [socket, socket.connected]);

  return (
    <div className="rooms-container">
      {!socket.connected ? (
        <div onClick={() => console.log(socket)}> No rooms </div>
      ) : (
        Object.keys(rooms).map((roomId, index) => (
          <JoinRoom key={index} roomId={roomId} id={index} />
        ))
      )}
    </div>
  );
};
export default RoomsToJoin;
