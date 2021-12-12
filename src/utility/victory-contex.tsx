import React, { createContext, useContext, useState } from "react";
import { emptyPlayer } from "./static.utility";
import { PlayerServerInfo } from "./types";

const VictoryContext = createContext<boolean>(false);
const WinnerContext = createContext<PlayerServerInfo>(emptyPlayer);
const UpdateVictoryContext = createContext<(player: PlayerServerInfo) => void>(
  () => {}
);
const RestartVictory = createContext<() => void>(() => {});
export const VictoryContextProvider: React.FC = ({ children }) => {
  const [victory, setVictory] = useState(false);
  const [winner, setWinner] = useState<PlayerServerInfo>(emptyPlayer);
  const setUpdatedVictory = (winner: PlayerServerInfo) => {
    setWinner(winner);
    setVictory(!victory);
  };
  const restartVictory = () => {
    setWinner(emptyPlayer);
    setVictory(false);
  };

  return (
    <VictoryContext.Provider value={victory}>
      <UpdateVictoryContext.Provider value={setUpdatedVictory}>
        <WinnerContext.Provider value={winner}>
          <RestartVictory.Provider value={restartVictory}>
            {" "}
            {children}
          </RestartVictory.Provider>
        </WinnerContext.Provider>
      </UpdateVictoryContext.Provider>
    </VictoryContext.Provider>
  );
};

export const useVictory = (): [
  boolean,
  PlayerServerInfo,
  (winner: PlayerServerInfo) => void,
  () => void
] => {
  const victory = useContext(VictoryContext);
  const winner = useContext(WinnerContext);
  const setVictory = useContext(UpdateVictoryContext);
  const restartVictory = useContext(RestartVictory);
  return [victory, winner, setVictory, restartVictory];
};
