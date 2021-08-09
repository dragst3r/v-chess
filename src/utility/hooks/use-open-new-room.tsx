import React,{ useEffect, useState } from 'react'; 
import { Socket } from 'socket.io-client';
import { DefaultEventsMap } from 'socket.io-client/build/typed-events';
import { useSocket } from '../socket-context';

export const useOpenNewRoom =():[React.MouseEvent<HTMLElement>, React.Dispatch<React.SetStateAction<React.MouseEvent<HTMLElement, MouseEvent>>>]=>{
    const [event, setEvent] = useState({} as React.MouseEvent<HTMLElement>)
    const socket  = useSocket()
    const [answer, setAnswer] = useState({} as Socket<DefaultEventsMap, DefaultEventsMap>)

    useEffect(()=>{
        if("emit" in socket){
            socket.emit('create-room',(answer:Socket<DefaultEventsMap, DefaultEventsMap>)=>setAnswer(answer))
        }
    },[event,socket])

    return [event, setEvent]
}