import { useEffect, useState } from "react";
import { useJoinRoom } from "../../utility/hooks/use-join-room";
import { useNavigateToRoom } from "../../utility/hooks/use-navigate-to-room";
import { useSocket } from "../../utility/socket-context";
import NewRoom from "../new-room/new-room-component";
import { useParams } from "react-router-dom";
import GameOverview from "../game-overview/game-overview.component";
import { TurnContextProvider } from "../../utility/turn-context";
const NewGameContainer = () => {
  const { id } = useParams<{ id: string }>();
  const [joinRoom, users] = useJoinRoom();
  const socket = useSocket();
  const [roomIsReady, setRoomIsReady] = useState(false);
  useEffect(() => {
    if (id) joinRoom(id);
  }, [id, socket.connected]);
  return (
    <div>
      {roomIsReady ? (
        <TurnContextProvider>
          <GameOverview />
        </TurnContextProvider>
      ) : (
        <NewRoom users={users} roomId={id} setRoomIsReady={setRoomIsReady} />
      )}
    </div>
  );
};
export default NewGameContainer;
