import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import GameOverview from "../components/game-overview/game-overview.component";
import NewGameContainer from "../components/new-game-container.component/new-game-container.component";
import NewRoom from "../components/new-room/new-room-component";
import NoAcount from "../components/no-account/no-account.component";
import RoomsToJoin from "../components/rooms-to-join/rooms-to-join.component";
import GameContextProvider, { useGameContext } from "../utility/game-context";
import { useAuth } from "../utility/hooks/use-auth";
import SocketContextProvider from "../utility/socket-context";
import { useUser } from "../utility/user-context";
interface Props {}

const GamePage: React.FC<Props> = () => {
  useAuth();
  const [user] = useUser();
  return (
    <SocketContextProvider>
      {user.loggedIn ? <NewGameContainer /> : <NoAcount />}
    </SocketContextProvider>
  );
};

export default GamePage;
//<GameOverview />
