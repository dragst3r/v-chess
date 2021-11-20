import React from "react";
import { useStartGame } from "../../utility/hooks/use-start-game";
import "./start-game-button.styles.css";
import NewRoomSVG from "../../new-room.svg";
import NewRoomDisabledSVG from "../../new-room-disabled.svg";
import { useSpring } from "@react-spring/core";

type Props = {
  disabledRoom: boolean;
  selectedSide: string;
  roomId: string;
  startGame: (firstMove: string) => void;
};
export const StartGameButton: React.FC<Props> = ({
  disabledRoom,
  selectedSide,
  roomId,
  startGame,
}) => {

  return (
    <img
      onClick={() => {
        if (!disabledRoom) startGame(selectedSide);
      }}
      className={`vs-logo${disabledRoom ? "-disabled" :"" }`}
      src={disabledRoom ? NewRoomDisabledSVG : NewRoomSVG}
    />
  );
};
