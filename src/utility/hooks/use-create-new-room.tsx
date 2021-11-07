import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { firestore } from "../../firebase/firebase-auth";
import { useSocket } from "../socket-context";
import { useUser } from "../user-context";
import { useNavigateToRoom } from "./use-navigate-to-room";

export const useCreateNewRoom = (): React.Dispatch<
  React.SetStateAction<boolean>
> => {
  const [newRoom, setNewRoom] = useState(false);
  const socket = useSocket();
  const [roomId, setRoomId] = useState("");
  const history = useHistory();
  const [user] = useUser();
  // useEffect(() => {
  //   if (newRoom) {
  //     history.push("/game/");
  //     console.log(socket)
  //   }
  // }, [newRoom, socket]);
  useEffect(() => {
    console.log(socket);
    if (newRoom) {
      socket.emit("create-room", socket.id, user.userId);
      socket.on("room-created", (id: string, users: []) => {
        history.push("/room/" + id, id);
      });
    }
  }, [socket, newRoom]);

  return setNewRoom;
};

// useEffect(() => {
//   if (socket.connected) socket.emit("create-room");
// }, [socket.connected]);
