import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/board/board.component";

export interface iField {
  id: number;
  state: string;
}
interface Figure {
  [key: number]: string;
}

type FullBoard = iField[];

function App() {
  const figures: Figure = { 1: "w1", 6: "w6" };
  const [fullBoard, setFullBoard] = useState<FullBoard>(
    Array.from(Array(13 * 13), (_, i) => ({
      id: i + 1,
      state: figures[i] || "",
    }))
  );
  const useUpdateBoard =(item:iField)=>{
    let newBoard:FullBoard = fullBoard.map((field,i)=>i===item.id?item:field);
    setFullBoard(newBoard)
  }
  return (
    <div className="App">
      <Board updateBoard={useUpdateBoard} board={fullBoard} />
    </div>
  );
}

export default App;
