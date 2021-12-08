import React from "react";
import { useVictory } from "../../utility/victory-contex";
import { Bubble } from "../bubble/bubble.component";
import Figure from "../figure/figure.component";
import Treasure from "../../treasure.svg";

import "./victory.styles.css";

const Victory = () => {
  const [, winner] = useVictory();
  return (
    <div className="victory">
      <div className="ribbon">
        <div className="text">
        {`${winner.displayName} has won!`}
        </div>
      </div>
      <div className="victory-figure">
        <Figure figure={winner.side} size="medium" />
      </div>
      <div className="victory-treasure-container">
        <div className="victory-glow"></div>
        <img className="victory-treasure" src={Treasure} />
      </div>
    </div>
  );
};

export default Victory;
