import { useState, useEffect } from "react";
import { useSocket } from "../socket-context";
import { PlayerServerInfo } from "../types";

type Props = {
    roomId: string
}
export const useGetRoomUsers = ({roomId}:Props)=>{
    const [users, setUsers] = useState<PlayerServerInfo[]>([]);
    const socket = useSocket();
 
    // useEffect(()=>{
    //     console.log(socket)
    //     if(socket.connected){
    //         socket.emit('get-room-info',roomId)
    //         socket.on('room-info',(players)=>{
    //             console.log("Players",players)
    //             if(players) setUsers(players)
    //         })
    //     }
    // },[socket.connected,socket,roomId,])

    return users
}