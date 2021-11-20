import "./first-move-selector.styles.css";
import FirstActiveSVG from "../../1st-active.svg";
import { useSpring, animated } from "react-spring";

type Props = {
  side: string;
  playerSide: string | undefined;
  selectedSide: string;
  setSelectedSide: (side: string) => void;
};

const FirstMove: React.FC<Props> = ({
  side,
  playerSide,
  selectedSide,
  setSelectedSide,
}) => {

  const styles = useSpring({
    from: { width: 0, opacity: 0 },
    delay: 500,
    to: {width: 50, opacity: 1 },
  });
  return (
    <animated.div style={styles} className="first-move-container">
      <animated.img style={styles}
        className="first-move-icon"
        src={side === selectedSide ? FirstActiveSVG : undefined}
      />
    </animated.div>
  );
};

export default FirstMove;
