import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import NewRoomSVG from "../../new-room.svg";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";
import { useCreateNewRoom } from "../../utility/hooks/use-create-new-room";

import "./create-new-room.styles.css";
import { useUser } from "../../utility/user-context";

interface Props {}
const CreateNewRoom: React.FC<Props> = () => {
  const createNewRoom = useCreateNewRoom();
  const [user] = useUser();
  return (
    <>
      {user.loggedIn ? (
        <div onClick={() => createNewRoom(true)}>
          <div className="new-room-container">
            <img className="new-room-logo" src={NewRoomSVG} />
            <div className="new-room-text">Create new room</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default CreateNewRoom;
