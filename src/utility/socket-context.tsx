import React, { useContext, useEffect, useState }  from "react"
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

const SocketContext = React.createContext({} as Socket<DefaultEventsMap, DefaultEventsMap>);
export const useSocket = ()=>{
    return useContext(SocketContext)
}
export const SocketContextProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = useState({} as Socket<DefaultEventsMap, DefaultEventsMap>);
  useEffect(()=>{
      const newSocket = io('http://localhost:3000');
      console.log('New socket',newSocket)
      setSocket(newSocket)
  },[])  
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
