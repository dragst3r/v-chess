import React, { useEffect, useState } from "react";
import { User } from "../../utility/user-context";
import "./room-player.styles.css";

interface Props {
  player: User | undefined;
  background: string;
}
const RoomPlayerSpot: React.FC<Props> = ({ player, background }) => {
  const [taken, setTaken] = useState(false);
  useEffect(() => {
    if (player) setTaken(true);
    else setTaken(false);
  }, [player]);

  return (
    <div className={`player-spot ${background}${taken ? " taken" : ""}`}>
      {player?.displayName}
    </div>
  );
};

export default RoomPlayerSpot;
