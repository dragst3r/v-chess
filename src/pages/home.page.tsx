import React, { useEffect } from "react";
import CreateNewRoom from "../components/create-new-room/create-new-room.component";
import RoomsToJoin from "../components/rooms-to-join/rooms-to-join.component";
import SignInAndOutButton from "../components/sign-in-and-out-button/sign-in-and-out-button.component";
import { useAuth } from "../utility/hooks/use-auth";
import SocketContextProvider from "../utility/socket-context";
import "./home.styles.css";
interface Props {}

const HomePage: React.FC<Props> = () => {
  useAuth();
  return (
    <div className="home-page-container">
      <div className="home-page-header">{<SignInAndOutButton />}</div>
      <SocketContextProvider>
        <div className="home-page-body">
          <CreateNewRoom />
          <RoomsToJoin />
        </div>
      </SocketContextProvider>
    </div>
  );
};

export default HomePage;
