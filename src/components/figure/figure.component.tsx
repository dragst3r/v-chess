import React, { useRef, useState } from "react";
import KingFigure from "../../king-figure.svg";
import VikingFigure from "../../viking-figure.svg";
import KnightFigure from "../../knight-figure.svg";
import CastleFigure from "../../castle-figure.svg";
import "./figure.styles.css";
import { useSpring, animated } from "react-spring";

interface Props {
  figure: string;
  size: string
}
interface Div {
  left: number;
  top: number;
}
const Figure: React.FC<Props> = ({ figure, size }) => {
  const figureSize = size==="small"? 30 : size==="medium"?40:size==="large"?70:40
  const styles = useSpring({
    from: { opacity: 0, height: figureSize, },
    delay:100,
    to: { opacity: 1,height: figureSize},
  });
  return (
    <animated.img
      style={styles}
      src={
        figure?.match(/^king/)
          ? KingFigure
          : figure?.match(/knight*/)
          ? KnightFigure
          : figure?.match(/viking*/)
          ? VikingFigure
          : figure?.match(/kastle*/)
          ? CastleFigure
          : ""
      }
      className="figure"
    ></animated.img>
  );
};

export default React.memo(Figure);
