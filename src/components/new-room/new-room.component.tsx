import React from "react";
import NewRoomSVG from "../../new-room.svg";

import "./new-room.styles.css";

interface Props {}
const NewRoom: React.FC<Props> = () => {
  return (
    <div className="new-room-container">
      <img className="new-room-logo" src={NewRoomSVG} />
      <div className="new-room-text">Create new room</div>
    </div>
  );
};
export default NewRoom;
