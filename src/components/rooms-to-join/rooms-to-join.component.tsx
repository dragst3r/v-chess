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
      if(rooms.length==0){
        socket.emit("get-rooms")
      }
      socket.on("available-rooms", (rooms:Room[]) => {
        console.log("rooms: ", rooms);
        setRooms(rooms);
      });
    }
  }, [socket,socket.connected]);

  // useEffect(() => {
  //   const fetchedRooms:string[] = [];
  //   firestore
  //     .collection("rooms")
  //     .get()
  //     .then((r) => {
  //       r.forEach((t) => fetchedRooms.push(t.data().roomId));
  //       setRooms([...fetchedRooms])
  //     });
  //     return setRooms([])
  // }, []);
  return (
    <div className="rooms-container">
      {rooms.length === 0 ? (
        <div onClick={()=>console.log(socket)}> No rooms </div>
      ) : (
        rooms.map((room, index) => (
          <JoinRoom key={index} roomId={room.roomId} id={index} />
        ))
      )}
    </div>
  );
};
export default RoomsToJoin;
