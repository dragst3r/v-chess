import React, { useEffect, useMemo, useState } from "react";
import "./board-player.styles.css";
import Figure from "../figure/figure.component";
import { useBoard } from "../../utility/board-context";
import { useStartGame } from "../../utility/hooks/use-start-game";
import BarsIcon from "../../bars.svg";

type Props = {
  side: string;
};
const BoardPlayer: React.FC<Props> = ({ side }) => {
  const [board] = useBoard();
  const [custody, setCustody] = useState<string[]>([]);
  let enemySide =
    side === "king" ? "viking" : side === "viking" ? "knight" : "";
  useEffect(() => {
    let count = 0;
    board.map((field) => {
      if (side === "king") {
        if (field.state.match(/viking*/)) {
          count++;
        }
      } else if (side === "viking") {
        if (field.state.match(/knight*/)) {
          count++;
        }
      }
    });
    let base =
      enemySide === "knight" ? 12 : enemySide === "viking" ? 24 : count;
    let arr = Array(base - count).fill(enemySide);
    setCustody(arr);
    console.log(arr);
  }, [board]);

  return (
    <div className="board-player-container">
      <div className="board-player-displayname"></div>
      <div className="board-player-figure">
        <Figure size="large" figure={side} />
      </div>
      <div className="board-player-custody">
        {custody.map((i) => (
          <div className="board-player-custody-figure-container">
            <Figure size="small" figure={i} />
            <img className="bars-icon" src={BarsIcon}></img>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BoardPlayer;
