import React, { useEffect } from "react";
import RoomPlayerSpot from "../room-player/room-player.component";
import NewRoomSVG from "../../new-room.svg";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";

import "./new-room.styles.css";
import { useUser } from "../../utility/user-context";

interface Props {}

const NewRoom: React.FC<Props> = () => {
  const [user] = useUser()
  return (
    <div className="room-container">
      <RoomPlayerSpot background="king" player={undefined} />
      <img className="vs-logo" src={NewRoomSVG} />
      <RoomPlayerSpot background="viking" player={user} />
    </div>
  );
};

export default NewRoom;
