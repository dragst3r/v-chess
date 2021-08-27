import firebase from "firebase";
import { firebaseConfig } from "./config";


firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore()
export const auth = firebase.auth()
export const signInWithGoogle = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => result.user)
    .catch((error) => console.error(error));
};
