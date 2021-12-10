import { useSpring, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import "./bubble.styles.css";

type Props = { visible: boolean; text: string };
export const Bubble: React.FC<Props> = ({ visible, text }) => {
  const [reverse, setReverse] = useState(true);
  useEffect(() => {
    setReverse(true);
  }, [text]);
  setTimeout(() => {
    setReverse(false);
  }, 2000);
  const styles = useSpring({
    from: { opacity: 0, top: 70, width: 100 },
    delay: 300,
    reverse: !reverse,
    to: { opacity: 1, top: 50 },
  });
  return (
    <animated.div style={styles} className="bubble right">
      <p className="bubble-text">{text}</p>
    </animated.div>
  );
};
