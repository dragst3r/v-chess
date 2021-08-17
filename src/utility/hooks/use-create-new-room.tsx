import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSocket } from "../socket-context";
import { useNavigateToRoom } from "./use-navigate-to-room";

export const useCreateNewRoom = (): React.Dispatch<
  React.SetStateAction<boolean>
> => {
  const [newRoom, setNewRoom] = useState(false);
  const socket = useSocket()
  const history = useHistory()
  useEffect(()=>{
    if(newRoom){
      history.push('/game/')
    }
  },[newRoom,socket])

  return setNewRoom;
}; 
