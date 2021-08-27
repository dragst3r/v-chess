import React, { useEffect } from "react";
import RoomPlayerSpot from "../room-player/room-player.component";
import NewRoomSVG from "../../new-room.svg";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";

import "./new-room.styles.css";

interface Props {}

const NewRoom: React.FC<Props> = () => {

  return (
    <div className="room-container">
      <RoomPlayerSpot background="king" player={undefined} />
      <img className="vs-logo" src={NewRoomSVG} />
      <RoomPlayerSpot background="viking" player={{}} />
    </div>
  );
};

export default NewRoom;
