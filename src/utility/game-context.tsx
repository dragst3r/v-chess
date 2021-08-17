import React, { useState,useContext } from "react";

const GameContext = React.createContext<object>({});
const UpdateGameContext = React.createContext<
  React.Dispatch<React.SetStateAction<object>>
>(() => {});

type Props = {};
const GameContextProvider: React.FC<Props> = ({ children }) => {
  const [game, setGame] = useState<object>({ gameId: 0, createdBy: "" });

  return (
    <GameContext.Provider value={game}>
      <UpdateGameContext.Provider value={setGame}></UpdateGameContext.Provider>
      {children}
    </GameContext.Provider>
  );
};
export const useGameContext = ():[object,React.Dispatch<React.SetStateAction<object>>] => {
  const game = useContext(GameContext);
  const setGame = useContext(UpdateGameContext);
  return [game, setGame];
};
export default GameContextProvider;
