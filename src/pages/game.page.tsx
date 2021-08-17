import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import GameOverview from "../components/game-overview/game-overview.component";
import NewGameContainer from "../components/new-game-container.component/new-game-container.component";
import NewRoom from "../components/new-room/new-room-component";
import GameContextProvider, { useGameContext } from "../utility/game-context";
import SocketContextProvider from "../utility/socket-context";
interface Props {}

const GamePage: React.FC<Props> = () => {

  return (
    <SocketContextProvider>
      <NewGameContainer />
    </SocketContextProvider>
  );
};

export default GamePage; 
//<GameOverview />
