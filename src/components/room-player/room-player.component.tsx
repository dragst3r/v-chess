import { useSpring, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import { useSelectSide } from "../../utility/hooks/use-select-side";
import { PlayerServerInfo } from "../../utility/types";
import { User } from "../../utility/user-context";
import "./room-player.styles.css";
import FirstActiveSVG from "../../1st-active.svg";

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
  const styles = useSpring({
    from: { width: 35, opacity: 0 },
    delay: 700,
    to: { width: 35, opacity: 1,paddingLeft:50 },
  });
  const stylesDiv = useSpring({
    from: { opacity: 0 },
    delay: 500,
    to: { opacity: 1 },
  });
  return (
    <animated.div style={stylesDiv} className="player-spot-container">
      {background == "king" ? (
        <animated.img
          style={styles}
          className="first-move-icon"
          src={FirstActiveSVG}
        />
      ) : null}
      <div
        onClick={() => {
          if (!taken) handleSetSide(background, roomId);
        }}
        className={`player-spot ${background}${taken ? " taken" : ""}`}
      ></div>
    </animated.div>
  );
};

export default RoomPlayerSpot;
