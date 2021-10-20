import React, { useEffect, useState } from "react";
import RoomPlayerSpot from "../room-player/room-player.component";
import NewRoomSVG from "../../new-room.svg";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";

import "./new-room.styles.css";
import { useUser } from "../../utility/user-context";
import { useGetRoomUsers } from "../../utility/hooks/use-get-rooms-users";
import { PlayerServerInfo } from "../../utility/types";
import Lobby from "../lobby/lobby.component";

interface Props {
  roomId: string;
  users: PlayerServerInfo[];
}

const NewRoom: React.FC<Props> = ({ roomId, users }) => {
  //const users = useGetRoomUsers({roomId})
  //useTest()
  const [player1, setPlayer1] = useState<PlayerServerInfo>();
  const [player2, setPlayer2] = useState<PlayerServerInfo>();
  const [noSidePlayers, setNoSidePlayers] = useState<PlayerServerInfo[]>([]);
  useEffect(() => {
    const newNoSidePlayers: PlayerServerInfo[] = [];
    setPlayer1(undefined)
    setPlayer2(undefined)
    if (users) {
      users.map((u) => {
        if (u.side === "") newNoSidePlayers.push(u);
        else if (u.side === "viking") setPlayer2(u);
        else setPlayer1(u);
        setNoSidePlayers(newNoSidePlayers);
      });
    }
  }, [users]);
  return (
    <div className="room-container">
      <Lobby users={noSidePlayers} roomId={roomId} />
      <div className="room-spots-container">
        <RoomPlayerSpot background="king" player={player1} roomId={roomId}/>
        <img className="vs-logo" src={NewRoomSVG} />
        <RoomPlayerSpot background="viking" player={player2} roomId={roomId}/>
      </div>
    </div>
  );
};

export default NewRoom;
