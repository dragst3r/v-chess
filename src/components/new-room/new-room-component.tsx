import React, { useEffect } from "react";
import RoomPlayerSpot from "../room-player/room-player.component";
import NewRoomSVG from "../../new-room.svg";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";

import "./new-room.styles.css";
import { useUser } from "../../utility/user-context";
import { useGetRoomUsers } from "../../utility/hooks/use-get-rooms-users";

interface Props {
  roomId: string,
  users: User[]
}
type User = {
  id: string;
  side: string;
};
const NewRoom: React.FC<Props> = ({roomId}) => {
  const users = useGetRoomUsers({roomId})
  const [user] = useUser()
  return (
    <div className="room-container">
      {user.userId+' --- '+users[0].id || 'nothing'}
      <RoomPlayerSpot background="king" player={undefined} />
      <img className="vs-logo" src={NewRoomSVG} />
      <RoomPlayerSpot background="viking" player={user} />
    </div>
  );
};

export default NewRoom;
