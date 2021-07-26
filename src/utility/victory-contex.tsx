import React, { createContext, useContext, useState } from "react";
import { iPlayer } from "../components/player/player.component";

const emptyWinner = {
    displayName: "",
    figure: "",
    index: 0,
  }
const VictoryContext = createContext<boolean>(false);
const WinnerContext = createContext<iPlayer>(emptyWinner);
const UpdateVictoryContext = createContext<(player: iPlayer) => void>(() => {});

export const VictoryContextProvider: React.FC = ({ children }) => {
  const [victory, setVictory] = useState(false);
  const [winner, setWinner] = useState<iPlayer>(emptyWinner);
  const setUpdatedVictory = (winner: iPlayer) => {
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
  iPlayer,
  (winner: iPlayer) => void
] => {
  const victory = useContext(VictoryContext);
  const winner = useContext(WinnerContext);
  const setVictory = useContext(UpdateVictoryContext);

  return [victory, winner, setVictory];
};
