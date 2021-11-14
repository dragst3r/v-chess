import { useSpring, animated } from "react-spring";
import React from "react";
import "./user-in-lobby.styles.css";

type Props = {
  displayName: string;
  photoUrl: string;
};
const UserInLobby: React.FC<Props> = ({ displayName, photoUrl }) => {
  const styles = useSpring({
    from: { opacity: 0},
    to: { opacity:1},
  });
  return (
    <animated.div style={styles}>
      <img className="user-image" src={photoUrl} />
    </animated.div>
  );
};

export default UserInLobby;
