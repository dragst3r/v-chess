import { useEffect, useState } from "react";
import { useJoinRoom } from "../../utility/hooks/use-join-room";
import { useSocket } from "../../utility/socket-context";
import NewRoom from "../new-room/new-room-component";
import { useParams } from "react-router-dom";
import GameOverview from "../game-overview/game-overview.component";
import { TurnContextProvider } from "../../utility/turn-context";

import ReactCSSTransitionGroup from "react-transition-group";

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
        <ReactCSSTransitionGroup transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
          <NewRoom users={users} roomId={id} setRoomIsReady={setRoomIsReady} />
        </ReactCSSTransitionGroup>
      )}
    </div>
  );
};
export default NewGameContainer;
