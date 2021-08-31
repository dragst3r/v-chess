import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { firestore } from "../../firebase/firebase-auth";
import { useSaveNewRoom } from "./use-save-new-room";

export const useNavigateToRoom = (): React.Dispatch<
  React.SetStateAction<string>
> => {
  const [roomId, setRoomId] = useState("");
  const saveRoom = useSaveNewRoom()
  const history = useHistory();

  useEffect(() => {
    if (roomId !== "") {
      history.push(`/game/${roomId}`);
      saveRoom(roomId);
    }
  }, [roomId]);

  return setRoomId;
};
