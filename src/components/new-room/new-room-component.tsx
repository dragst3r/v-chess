import React, { useEffect, useState } from "react";
import RoomPlayerSpot from "../room-player/room-player.component";
import NewRoomSVG from "../../new-room.svg";
import NewRoomDisabledSVG from "../../new-room-disabled.svg";

import "./new-room.styles.css";
import { PlayerServerInfo } from "../../utility/types";
import Lobby from "../lobby/lobby.component";
import { useStartGame } from "../../utility/hooks/use-start-game";
import FirstMove from "../first-move-selector/first-move-selector.component";

interface Props {
  roomId: string;
  users: PlayerServerInfo[];
  setRoomIsReady: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewRoom: React.FC<Props> = ({ roomId, users, setRoomIsReady }) => {
  //const users = useGetRoomUsers({roomId})
  //useTest()
  const startGame = useStartGame(roomId, setRoomIsReady);
  const [player1, setPlayer1] = useState<PlayerServerInfo>();
  const [player2, setPlayer2] = useState<PlayerServerInfo>();
  const [noSidePlayers, setNoSidePlayers] = useState<PlayerServerInfo[]>([]);
  const [selectedSide, setSelectedSide] = useState("king");
  const [disabledRoom, setDisabledRoom] = useState(true);

  useEffect(() => {
    const newNoSidePlayers: PlayerServerInfo[] = [];
    setPlayer1(undefined);
    setPlayer2(undefined);
    if (users) {
      users.map((u) => {
        if (u.side === "") newNoSidePlayers.push(u);
        else if (u.side === "viking") setPlayer2(u);
        else setPlayer1(u);
        setNoSidePlayers(newNoSidePlayers);
      });
    }
  }, [users]);
  useEffect(() => {
    setDisabledRoom(users.length == 2 && noSidePlayers.length == 0);
  }, [users, noSidePlayers]);
  return (
    <div className="room-container">
      <Lobby users={noSidePlayers} roomId={roomId} />
      <div className="room-spots-container">
        <RoomPlayerSpot background="king" player={player1} roomId={roomId} />
        <FirstMove
          setSelectedSide={setSelectedSide}
          selectedSide={"king"}
          side="king"
          playerSide={player1?.side}
        />
        <img
          onClick={() => {
            if (disabledRoom) startGame(selectedSide);
          }}
          className={`vs-logo${disabledRoom ? "" : "-disabled"}`}
          src={disabledRoom ? NewRoomSVG : NewRoomDisabledSVG}
        />
        <FirstMove
          setSelectedSide={setSelectedSide}
          selectedSide={selectedSide}
          side="viking"
          playerSide={player2?.side}
        />
        <RoomPlayerSpot background="viking" player={player2} roomId={roomId} />
      </div>
    </div>
  );
};

export default NewRoom;
