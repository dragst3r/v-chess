import React,{ useContext } from "react";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

const socket = io("http://localhost:3000");

const SocketContext = React.createContext(
  {} as Socket<DefaultEventsMap, DefaultEventsMap>
);

const SocketContextProvider: React.FC = ({ children }) => {
    console.log(socket)
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketContextProvider;

export const useSocket = (): Socket<DefaultEventsMap> => {
    return useContext(SocketContext)
};