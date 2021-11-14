import React, { useEffect, useState } from "react";
import { BoardContextProvider } from "../../utility/board-context";
import { SelectedFieldContextProvider } from "../../utility/selected-field-context";
import { VictoryContextProvider } from "../../utility/victory-contex";
import Board from "../board/board.component";
import PlayersOverview from "../players-overview/players-overview.component";
import "./game-overview.styles.css";
import { PlayerServerInfo } from "../../utility/types";

interface Props {
  users: PlayerServerInfo[]
}

const GameOverview: React.FC<Props> = ({users}) => {

  return (
    <div className="game-overview">
        <SelectedFieldContextProvider>
          <VictoryContextProvider>{users && <Board />}</VictoryContextProvider>
        </SelectedFieldContextProvider>
    </div>
  );
};
export default GameOverview;
