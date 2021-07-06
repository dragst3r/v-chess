import React, { useState } from "react";
import { players, TurnContextProvider } from "../../utility/turn-context";
import { BoardContextProvider } from "../../utility/board-context";
import { SelectedFieldContextProvider } from "../../utility/selected-field-context";
import Board from "../board/board.component";
import { iPlayer } from "../player/player.component";
import PlayersOverview from "../players-overview/players-overview.component";
import "./game-overview.styles.css";

interface Props {}

const GameOverview: React.FC<Props> = () => {
  return (
    <TurnContextProvider>
      <div className="game-overview">
        <BoardContextProvider>
          <SelectedFieldContextProvider>
            <Board />
          </SelectedFieldContextProvider>
        </BoardContextProvider>
        <PlayersOverview
          players={players.map((i, index) => ({ ...i, index: index }))}
        />
      </div>
    </TurnContextProvider>
  );
};
export default GameOverview;
