import { useSpring, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import "./bubble.styles.css";

type Props = { visible: boolean; text: string };
export const Bubble: React.FC<Props> = ({ visible, text }) => {
  const [v, setV] = useState(true);
  useEffect(() => {
    setV(true);
  }, [text]);
  setTimeout(() => {
    setV(false);
  }, 2000);
  const styles = useSpring({
    from: { opacity: 0, top: 70, width: 100 },
    delay: 300,
    reverse: !v,
    to: { opacity: 1, top: 50 },
  });
  return (
    <animated.div style={styles} className="bubble right">
      <p className="bubble-text">{text}</p>
    </animated.div>
  );
};
