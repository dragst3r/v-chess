import React from "react";
import NewRoom from "../components/new-room/new-room.component";
import { SocketContextProvider } from "../utility/socket-context";
import "./home.styles.css";
interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <button>Sign in with Google</button>
      </div>
      <div className="home-page-body">
        <SocketContextProvider>
          <NewRoom />
        </SocketContextProvider>
      </div>
    </div>
  );
};

export default HomePage;
