import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import NewRoomSVG from "../../new-room.svg";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";
import { useCreateNewRoom } from "../../utility/hooks/use-create-new-room";

import "./create-new-room.styles.css";

interface Props {}
const CreateNewRoom: React.FC<Props> = () => {
  const createNewRoom = useCreateNewRoom()
  return (
    <div onClick={()=>createNewRoom(true)}>
      <div className="new-room-container">
        <img className="new-room-logo" src={NewRoomSVG} />
        <div className="new-room-text">Create new room</div>
      </div>
    </div>
  );
};
export default CreateNewRoom;
