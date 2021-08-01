import React, { useEffect, useState } from "react";
import "./room-player.styles.css";

interface Props {
  player: {} | undefined;
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
      Tester 1
    </div>
  );
};

export default RoomPlayerSpot;
