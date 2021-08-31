import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useJoinRoom } from "../../utility/hooks/use-join-room";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";
import { useSocket } from "../../utility/socket-context";
import NewRoom from "../new-room/new-room-component";
import { useParams } from 'react-router-dom';

const NewGameContainer = () => {
  const {id} = useParams<{id:string}>()
  const joinRoom = useJoinRoom()
  useEffect(()=>{
    if(id) joinRoom(id)
  },[id])
  return (
    <div>
      <NewRoom />
    </div>
  );
};
export default NewGameContainer;
