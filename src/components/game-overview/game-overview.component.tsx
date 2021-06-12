import React, { useState } from "react";
import { TurnContextProvider } from "../../utility/turn-context";
import Board from "../board/board.component";
import { iPlayer } from "../player/player.component";
import PlayersOverview from "../players-overview/players-overview.component";
import "./game-overview.styles.css";

interface Props {}

const GameOverview: React.FC<Props> = () => {
  const players = [
    { displayName: "Andrzej Tester", figure: "king" },
    { displayName: "Kamil Tester", figure: "viking" },
  ];
  const [turn, setTurn] = useState<iPlayer>({ ...players[0], index: 0 });
  const newTurn = () => {
    let newPlayerIndex: number;
    if (turn.index === 0) newPlayerIndex = 1;
    else newPlayerIndex = 0;

    setTurn({ ...players[newPlayerIndex], index: newPlayerIndex });
  };
  return (
    <TurnContextProvider>
      <div className="game-overview">
        <Board newTurn={newTurn} />
        <PlayersOverview
          players={players.map((i, index) => ({ ...i, index: index }))}
        />
      </div>
    </TurnContextProvider>
  );
};
export default GameOverview;
