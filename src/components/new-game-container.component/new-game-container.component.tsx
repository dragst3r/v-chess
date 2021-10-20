import { useEffect, useState } from "react";
import { useJoinRoom } from "../../utility/hooks/use-join-room";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";
import { useSocket } from "../../utility/socket-context";
import NewRoom from "../new-room/new-room-component";
import { useParams } from "react-router-dom";

const NewGameContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [joinRoom, users] = useJoinRoom();
  const socket = useSocket();

  useEffect(() => {
    if (id) joinRoom(id);
  }, [id,socket.connected]);
  return (
    <div>
      <button onClick={()=>console.log(socket)}>{socket.connected?"true":"false"}</button>
      <NewRoom users={users} roomId={id} />
    </div>
  );
};
export default NewGameContainer;
