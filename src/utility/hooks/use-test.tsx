import { useEffect, useState } from "react";
import { useSocket } from "../socket-context";

export const useTest = () => {
  const socket = useSocket();
  const [text, setText] = useState("");
  useEffect(() => {
    if (socket.connected) {
      setText(socket.id);
    }
  }, [socket]);

  return text;
};
