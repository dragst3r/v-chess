
import React, { useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SocketContext = React.createContext(
  {} as Socket
);

const SocketContextProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = useState(
    {} as Socket
  );
  useEffect(() => {
    const newSocket = io("https://v-chess-server.herokuapp.com/");
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, []);
  
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketContextProvider;

export const useSocket = (): Socket => {
  return useContext(SocketContext);
};
