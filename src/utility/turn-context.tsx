import React, { useContext, useState } from "react";
import { iPlayer } from "../components/player/player.component";

export const TurnContext = React.createContext({} as iPlayer);
export const TurnUpdateContext = React.createContext((gameOver: boolean) => {});

export const useTurn = () => useContext(TurnContext);
export const useTurnUpdate = () => useContext(TurnUpdateContext);

export const players = [
  { displayName: "Andrzej Tester", figure: "king" },
  { displayName: "Kamil Tester", figure: "viking" },
];
export const TurnContextProvider: React.FC = ({ children }) => {
  const [turn, setTurn] = useState<iPlayer>({ ...players[0], index: 0 });
  const newTurn = (gameOver: boolean) => {
    let newPlayerIndex = turn.index;

    let player = {} as iPlayer;
    if (gameOver) player = turn;
    else {
      if (turn.index === 0) newPlayerIndex = 1;
      else newPlayerIndex = 0;
      player= { ...players[newPlayerIndex], index: newPlayerIndex }
    }
    console.log("Player: ", player)
    setTurn(player);
  };
  return (
    <TurnContext.Provider value={turn}>
      <TurnUpdateContext.Provider value={newTurn}>
        {children}
      </TurnUpdateContext.Provider>
    </TurnContext.Provider>
  );
};
