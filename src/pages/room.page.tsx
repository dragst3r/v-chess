import React from "react";
import RoomPlayerSpot from "../components/room-player/room-player.component";
import NewRoomSVG from "../new-room.svg";

import "./room.styles.css";

interface Props {}

const RoomPage: React.FC<Props> = () => {
  return (
    <div className="room-container">
      <RoomPlayerSpot background='king' player={undefined} />
      <img className="vs-logo" src={NewRoomSVG} />
      <RoomPlayerSpot background='viking' player={{}} />
    </div>
  );
};

export default RoomPage;
