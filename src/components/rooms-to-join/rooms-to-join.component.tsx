import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase-auth";
import JoinRoom from "../join-room/join-room.component";
import './rooms-to-join.styles.css'

const RoomsToJoin = () => {
  const [rooms, setRooms] = useState<string[]>([]);
  useEffect(() => {
    const fetchedRooms:string[] = [];
    firestore
      .collection("rooms")
      .get()
      .then((r) => {
        r.forEach((t) => fetchedRooms.push(t.data().roomId));
        setRooms([...fetchedRooms])
      });
      return setRooms([])
  }, []);
  return (
    <div className="rooms-container">
      {rooms.map((room,index) => (
        <JoinRoom key={index} roomId={room} id={index}/>
      ))}
    </div>
  );
};
export default RoomsToJoin;
