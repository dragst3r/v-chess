import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board/board.component";
import GameOverview from "./components/game-overview/game-overview.component";
import PlayersOverview from "./components/players-overview/players-overview.component";

function App() {
  return (
    <div>
      <GameOverview />
    </div>
  );
}

export default App;
// Array.from(Array(11 * 11), (_, i) => {
//     let addRow = i;
//     let addColumn = i;
//     return {
//       row: addRow,
//       column: addColumn,
//       state: figures[addRow][addColumn] || "",
//     };
//   })
