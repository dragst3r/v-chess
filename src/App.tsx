import React from "react";
import "./App.css";
import Board from "./components/board/board.component";

function App() {
  const fullBoard = Array.from(Array(13*13),(_,i)=>i+1);

  return (
    <div className="App">
      <Board board={fullBoard}/>
    </div>
  );
}

export default App;
