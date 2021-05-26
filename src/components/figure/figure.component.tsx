import React, { useRef, useState } from "react";
import KingFigure from "../../king-figure.svg";
import VikingFigure from "../../viking-figure.svg";
import KnightFigure from "../../knight-figure.svg";
import "./figure.styles.css";

interface Props {
  figure: string;
}
interface Div {
  left: number;
  top: number;
}
const Figure: React.FC<Props> = ({ figure }) => {
  return (
    <img
      src={
        figure.match(/^king/)
          ? KingFigure
          : figure.match(/knight*/)
          ? KnightFigure
          : figure.match(/viking*/)
          ? VikingFigure
          : ""
      }
      className="figure"
    ></img>
  );
};

export default Figure;
