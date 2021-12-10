import React, { useEffect, useMemo, useState } from "react";
import "./board-player.styles.css";
import Figure from "../figure/figure.component";
import { useBoard } from "../../utility/board-context";
import { useStartGame } from "../../utility/hooks/use-start-game";
import BarsIcon from "../../bars.svg";

type Props = {
  side: string;
  turn: string;
};
const BoardPlayer: React.FC<Props> = ({ side, turn }) => {
  const [board] = useBoard();
  const [custodyCount, setCustodyCount] = useState(0);
  const [isMyTurn, setIsMyTurn] = useState(false);
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

    setCustodyCount(base - count);
  }, [board]);
  useEffect(() => {
    setIsMyTurn(turn === side);
  }, [turn]);
  return (
    <div className={`board-player-container board-player-container-${side}`}>
      <div className="board-player-displayname"></div>
      <div className="board-player-figure">
        <Figure size="large" figure={side} />
      </div>

      <div className="board-player-custody">
        {custodyCount > 0 ? (
          <>
            {custodyCount + "x"}
            <div className="board-player-custody-figure-container">
              <Figure size="small" figure={enemySide} />
              <img className="bars-icon" src={BarsIcon}></img>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
export default BoardPlayer;
