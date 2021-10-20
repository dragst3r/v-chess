import React, { useEffect, useState } from "react";
import { useSelectSide } from "../../utility/hooks/use-select-side";
import { PlayerServerInfo } from "../../utility/types";
import { User } from "../../utility/user-context";
import "./room-player.styles.css";

interface Props {
  player: PlayerServerInfo | undefined;
  background: string;
  roomId: string;
}
const RoomPlayerSpot: React.FC<Props> = ({ player, background, roomId }) => {
  const [taken, setTaken] = useState(false);
  const handleSetSide = useSelectSide();
  useEffect(() => {
    if (player) setTaken(true);
    else setTaken(false);
  }, [player]);

  return (
    <div
      onClick={() => {
        if (!taken) handleSetSide(background, roomId);
      }}
      className={`player-spot ${background}${taken ? " taken" : ""}`}
    >
      {player?.displayName}
    </div>
  );
};

export default RoomPlayerSpot;
