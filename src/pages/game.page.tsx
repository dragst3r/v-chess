import React from "react";
import NewGameContainer from "../components/new-game-container.component/new-game-container.component";
import NoAcount from "../components/no-account/no-account.component";
import { BoardContextProvider } from "../utility/board-context";
import { useAuth } from "../utility/hooks/use-auth";
import SocketContextProvider from "../utility/socket-context";
import { TurnContextProvider } from "../utility/turn-context";
import { useUser } from "../utility/user-context";
import '../transitions/transitions.scss'

interface Props {}

const GamePage: React.FC<Props> = () => {
  useAuth();
  const [user] = useUser();
  return (
    <div className="page">
      <SocketContextProvider>
        {user.loggedIn ? (
          <TurnContextProvider>
            <BoardContextProvider>
              <NewGameContainer />
            </BoardContextProvider>
          </TurnContextProvider>
        ) : (
          <NoAcount />
        )}
      </SocketContextProvider>
    </div>
  );
};

export default GamePage;
//<GameOverview />
