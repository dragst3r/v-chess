import React,{ useEffect } from "react";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";
import { useSocket } from "../../utility/socket-context";
import NewRoom from "../new-room/new-room-component";

const NewGameContainer = () => {
  const socket = useSocket();
  const navigateToRoom = useNavigateToRoom();
  useEffect(() => {
    if (socket.connected) navigateToRoom(socket.id);
  }, [socket]);
  return <div>{socket.connected ? <NewRoom /> : null}</div>;
};
export default NewGameContainer;
