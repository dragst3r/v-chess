import React from "react";
import CreateNewRoom from "../components/create-new-room/create-new-room.component";
import "./home.styles.css";
interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <button>Sign in with Google</button>
      </div>
      <div className="home-page-body">
        <CreateNewRoom />
      </div>
    </div>
  );
};

export default HomePage;
