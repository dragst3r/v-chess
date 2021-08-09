import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";
import NewRoomSVG from "../../new-room.svg";
import { useOpenNewRoom } from "../../utility/hooks/use-open-new-room";
import { SocketContextProvider, useSocket } from "../../utility/socket-context";

import "./new-room.styles.css";

interface Props {}
const NewRoom: React.FC<Props> = () => {
  const [, createNewRoom] = useOpenNewRoom();
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    createNewRoom(event);
  };
  return (
    <SocketContextProvider>
      <Link
        onClick={(event) => handleClick(event)}
        to="/room"
        className="new-room-container"
      >
        <img className="new-room-logo" src={NewRoomSVG} />
        <div className="new-room-text">Create new room</div>
      </Link>
    </SocketContextProvider>
  );
};
export default NewRoom;
