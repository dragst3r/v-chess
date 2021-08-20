import { auth } from "../../firebase/firebase-auth";
import { useUser } from "../user-context";


export const useLogOut= ()=>{
  const [currentUser, setCurrentUser] = useUser();

    const logOutUser = () => {
        auth
          .signOut()
          .then(() => {
            setCurrentUser({
              displayName: null,
              email: null,
              photoURL: null,
              loggedIn: false,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      };

      return logOutUser
}