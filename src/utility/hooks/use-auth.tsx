import { useUser } from "../user-context";
import { auth } from "../../firebase/firebase-auth";
import { useEffect } from "react";
import { useLogOut } from "./use-logout";
import { useAuthState } from "react-firebase-hooks/auth";

export const useAuth = () => {
  const [user] = useAuthState(auth);

  const [, setCurrentUser] = useUser();
  useEffect(() => {
    if (user) {
      const { displayName, email, photoURL, uid } = user;
      console.log(user)
      setCurrentUser({ displayName, email, photoURL, loggedIn: true,userId:uid });
    } 
  }, [user]);
};
