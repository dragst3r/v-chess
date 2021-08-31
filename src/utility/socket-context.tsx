import React,{ useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";


const SocketContext = React.createContext(
  {} as Socket<DefaultEventsMap, DefaultEventsMap>
);

const SocketContextProvider: React.FC = ({ children }) => {
  const [socket,setSocket] = useState({} as Socket<DefaultEventsMap, DefaultEventsMap>)
  useEffect(()=>{
    console.log('scoket render',socket)
    const newSocket = io("http://localhost:3000");
    setSocket(newSocket)
    return ()=>{newSocket.close()}
  },[])
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketContextProvider;

export const useSocket = (): Socket<DefaultEventsMap> => {
    return useContext(SocketContext)
};