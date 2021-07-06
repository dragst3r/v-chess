import React, { useContext, useState } from "react";
import { iField, initialBoard } from "./static.utility";

const BoardContext = React.createContext<iField[]>([]);
const UpdateBoardContext = React.createContext((b: iField[]) => {});

export const BoardContextProvider: React.FC = ({ children }) => {
  const [board, setBoard] = useState<iField[]>(initialBoard());
  const setUpdatedBoard = (b: iField[]) => setBoard(b);
  return (
    <BoardContext.Provider value={board}>
      <UpdateBoardContext.Provider value={setUpdatedBoard}>
        {children}
      </UpdateBoardContext.Provider>
    </BoardContext.Provider>
  );
};

export const useBoard = ():[iField[],(b: iField[]) => void]=>{
    const board = useContext(BoardContext)
    const setBoard = useContext(UpdateBoardContext)

    return [board, setBoard]
}