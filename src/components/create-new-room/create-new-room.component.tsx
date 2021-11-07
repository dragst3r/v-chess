import React from "react";
import NewRoomSVG from "../../new-room.svg";
import { useCreateNewRoom } from "../../utility/hooks/use-create-new-room";

import "./create-new-room.styles.css";

interface Props {}
const CreateNewRoom: React.FC<Props> = () => {
  const createNewRoom = useCreateNewRoom();
  return (
    <>
      {
        <div onClick={() => createNewRoom(true)}>
          <div className="new-room-container">
            <img className="new-room-logo" src={NewRoomSVG} />
            <div className="new-room-text">Create new room</div>
          </div>
        </div>
      }
    </>
  );
};
export default CreateNewRoom;
