import React, { useEffect } from "react";
import CreateNewRoom from "../components/create-new-room/create-new-room.component";
import SignInAndOutButton from "../components/sign-in-and-out-button/sign-in-and-out-button.component";
import { auth, signInWithGoogle } from "../firebase/firebase-auth";
import { useAuth } from "../utility/hooks/use-auth";
import { useLogOut } from "../utility/hooks/use-logout";
import { useUser } from "../utility/user-context";
import "./home.styles.css";
interface Props {}

const HomePage: React.FC<Props> = () => {
  useAuth()
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        {<SignInAndOutButton />}
      </div>
      <div className="home-page-body">
        <CreateNewRoom />
      </div>
    </div>
  );
};

export default HomePage;
