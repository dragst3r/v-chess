import React, {  useContext, useState } from "react";
import { emptyPlayer } from "./static.utility";
import { PlayerServerInfo } from "./types";

type Props = {};

const TurnContext = React.createContext({} as PlayerServerInfo);
const UpdateTurnContext = React.createContext<
  React.Dispatch<React.SetStateAction<PlayerServerInfo>>
>(() => {});

export const TurnContextProvider: React.FC<Props> = ({ children }) => {
  const [turnPlayer, setTurnPlayer] = useState({} as PlayerServerInfo);

  return (
    <TurnContext.Provider value={turnPlayer}>
      <UpdateTurnContext.Provider value={setTurnPlayer}>
        {children}
      </UpdateTurnContext.Provider>
    </TurnContext.Provider>
  );
};

export const useTurnContext = (): [
  PlayerServerInfo,
  React.Dispatch<React.SetStateAction<PlayerServerInfo>>
] => {
  const turn = useContext(TurnContext);
  const setTurn = useContext(UpdateTurnContext);

  return [turn, setTurn];
};
