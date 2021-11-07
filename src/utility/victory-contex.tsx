import React, { createContext, useContext, useState } from "react";
import { emptyPlayer } from "./static.utility";
import { PlayerServerInfo } from "./types";


const VictoryContext = createContext<boolean>(false);
const WinnerContext = createContext<PlayerServerInfo>(emptyPlayer);
const UpdateVictoryContext = createContext<(player: PlayerServerInfo) => void>(
  () => {}
);

export const VictoryContextProvider: React.FC = ({ children }) => {
  const [victory, setVictory] = useState(false);
  const [winner, setWinner] = useState<PlayerServerInfo>(emptyPlayer);
  const setUpdatedVictory = (winner: PlayerServerInfo) => {
    setWinner(winner);
    setVictory(!victory);
  };

  return (
    <VictoryContext.Provider value={victory}>
      <UpdateVictoryContext.Provider value={setUpdatedVictory}>
        <WinnerContext.Provider value={winner}>
          {children}
        </WinnerContext.Provider>
      </UpdateVictoryContext.Provider>
    </VictoryContext.Provider>
  );
};

export const useVictory = (): [
  boolean,
  PlayerServerInfo,
  (winner: PlayerServerInfo) => void
] => {
  const victory = useContext(VictoryContext);
  const winner = useContext(WinnerContext);
  const setVictory = useContext(UpdateVictoryContext);

  return [victory, winner, setVictory];
};
