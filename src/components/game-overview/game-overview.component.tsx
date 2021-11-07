import React, { useEffect, useState } from "react";
import { BoardContextProvider } from "../../utility/board-context";
import { SelectedFieldContextProvider } from "../../utility/selected-field-context";
import { VictoryContextProvider } from "../../utility/victory-contex";
import Board from "../board/board.component";
import PlayersOverview from "../players-overview/players-overview.component";
import "./game-overview.styles.css";
import { useJoinRoom } from "../../utility/hooks/use-join-room";
import { useParams } from "react-router";

interface Props {}

const GameOverview: React.FC<Props> = () => {
  const [setRoomId, users] = useJoinRoom();

  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    setRoomId(id);
  }, [id]);
  return (
    <div className="game-overview">
      <BoardContextProvider>
        <SelectedFieldContextProvider>
          <VictoryContextProvider>{users && <Board />}</VictoryContextProvider>
        </SelectedFieldContextProvider>
      </BoardContextProvider>
      <PlayersOverview players={users} />
    </div>
  );
};
export default GameOverview;
