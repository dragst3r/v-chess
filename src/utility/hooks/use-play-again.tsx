import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSocket } from "../socket-context";
import { initialBoard } from "../static.utility";
import { PlayerServerInfo } from "../types";
import { useVictory } from "../victory-contex";
import { useStartGame } from "./use-start-game";
import { emptyPlayer } from "../static.utility";

export const usePlayAgain = (users: PlayerServerInfo[]): (() => void) => {
  const { id } = useParams<{ id: string }>();
  
  const [,,restartVictory] = useVictory()
  const socket = useSocket();
  const restartGame = () => {
    socket.emit("restart-game", id, users, initialBoard());
  };

  return restartGame;
};
