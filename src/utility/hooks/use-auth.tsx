import { useUser } from "../user-context";
import { auth } from "../../firebase/firebase-auth";
import { useEffect } from "react";
import { useLogOut } from "./use-logout";
import { useAuthState } from "react-firebase-hooks/auth";

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useUser();
  const [user] = useAuthState(auth);
  const logOut = useLogOut();
  useEffect(() => {
    if (user) {
      const { displayName, email, photoURL } = user;
      setCurrentUser({ displayName, email, photoURL, loggedIn: true });
    } else logOut();
  }, [user]);
};
