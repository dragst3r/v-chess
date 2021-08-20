import React from "react";
import { signInWithGoogle } from "../../firebase/firebase-auth";
import { useAuth } from "../../utility/hooks/use-auth";
import { useLogOut } from "../../utility/hooks/use-logout";
import { useUser } from "../../utility/user-context";
import "./sign-in-and-out-button.styles.css";

const SignInAndOutButton = () => {
  const logOut = useLogOut();
  const [user, setUser] = useUser();
  const SignIn = (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
  const SignOut = (
    <div onClick={logOut} className="user-container">
      <p className="user-display-name">{user.displayName}</p>
      <img className="user-image" src={user.photoURL || undefined}></img>
    </div>
  );

  return <>{user.loggedIn ? SignOut : SignIn}</>;
};

export default SignInAndOutButton;
