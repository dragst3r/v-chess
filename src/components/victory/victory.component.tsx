import React from "react";
import { useVictory } from "../../utility/victory-contex";
import "./victory.styles.css";

const Victory = () => {
  const [,winner,] = useVictory()
  return (
    <div className="victory">
      <h1>{`Victory! ${winner.displayName} won`}</h1>
    </div>
  );
};

export default Victory
