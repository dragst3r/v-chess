import "./first-move-selector.styles.css";
import { useSpring, animated } from "react-spring";
import { useSelectSide } from "../../utility/hooks/use-select-side";
import { PlayerServerInfo } from "../../utility/types";
import UserInLobby from "../user-in-lobby/user-in-lobby.component";
import { useEffect, useState } from "react";

type Props = {
  side: string;
  player: PlayerServerInfo | undefined;
  selectedSide: string;
  roomId: string;
};

const FirstMove: React.FC<Props> = ({ side, roomId, player }) => {
  const handleSetSide = useSelectSide();
  const [taken, setTaken] = useState(false);

  useEffect(() => {
    if (player) setTaken(true);
    else setTaken(false);
  }, [player]);
  const stylesDiv = useSpring({
    from: { width: 0, opacity: 0 },
    delay: 500,
    to: { width: 120, opacity: 1 },
  });

  return (
    <animated.div
      onClick={() => handleSetSide(side, roomId)}
      style={stylesDiv}
      className={`first-move-container ${taken ? " first-move-container-taken" : ""}`}
    >
      {taken ? (
        <div className="first-move-user-icon">
          <UserInLobby key={player?.userId} photoUrl={player?.photoURL} />
        </div>
      ) : null}
    </animated.div>
  );
};

export default FirstMove;
