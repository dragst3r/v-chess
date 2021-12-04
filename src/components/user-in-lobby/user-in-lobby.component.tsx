import { useSpring, animated } from "react-spring";
import React from "react";
import "./user-in-lobby.styles.css";

type Props = {
  photoUrl?: string;
  className?: string;
};
const UserInLobby: React.FC<Props> = ({ photoUrl, className }) => {
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });
  return (
    <animated.div className={className} style={styles}>
      {photoUrl ? <img className="user-image" src={photoUrl} /> : null}
    </animated.div>
  );
};

export default UserInLobby;
