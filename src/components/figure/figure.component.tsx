import React, { useRef, useState } from "react";
import KingFigure from '../../king-figure.svg'
import "./figure.styles.css";

interface Props {}
interface Div {
  left: number;
  top: number;
}
const Figure: React.FC<Props> = () => {
  return <img src={KingFigure} className="figure"></img>;
};

export default Figure;
