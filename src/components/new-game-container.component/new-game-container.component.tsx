import { useEffect, useState } from "react";
import { useJoinRoom } from "../../utility/hooks/use-join-room";
import { useSocket } from "../../utility/socket-context";
import NewRoom from "../new-room/new-room-component";
import { useParams } from "react-router-dom";
import GameOverview from "../game-overview/game-overview.component";

const NewGameContainer = () => {
  const [roomIsReady, setRoomIsReady] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [joinRoom, users] = useJoinRoom(setRoomIsReady);
  const socket = useSocket();
  useEffect(() => {
    if (id) joinRoom(id);
  }, [id, socket.connected]);
  return (
        <div>
          {roomIsReady ? (
            <GameOverview users={users} />
          ) : (
            <NewRoom
              users={users}
              roomId={id}
              setRoomIsReady={setRoomIsReady}
            />
          )}
        </div>
  );
};
export default NewGameContainer;
