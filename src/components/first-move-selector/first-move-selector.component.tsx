import "./first-move-selector.styles.css";
import FirstActiveSVG from "../../1st-active.svg";

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
  return (
    <div
      className="first-move-container"
    >
      <img
        className="first-move-icon"
        src={side === selectedSide ? FirstActiveSVG : undefined}
      />
    </div>
  );
};

export default FirstMove;
