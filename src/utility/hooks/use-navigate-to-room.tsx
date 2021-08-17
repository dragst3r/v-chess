import {useState,useEffect} from 'react'
import { useHistory } from 'react-router'

export const useNavigateToRoom = (): React.Dispatch<React.SetStateAction<string>>=>{
    const [roomId,setRoomId] = useState("")
    const history  = useHistory()
    useEffect(()=>{
       if(roomId!=="") history.push(`/game/${roomId}`)
    },[roomId])

    return setRoomId
}
 
