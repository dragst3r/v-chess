import { useSpring, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import "./guide-item.styles.css";
type Props = {
  header: string;
  text: string;
  index: number;
  visibleIndex: number;
  setVisibleIndex: React.Dispatch<React.SetStateAction<number>>;
  url: string;
};
export const GuideItem: React.FC<Props> = ({
  header,
  text,
  index,
  visibleIndex,
  setVisibleIndex,
  url,
}) => {
  const style = useSpring({
    from: { opacity: 0 },
    delay: 100,
    reverse: visibleIndex !== index,
    to: { opacity: 1 },
  });

  return (
    <div
      className={`guide-item-container guide-item-container-${
        visibleIndex === index ? "" : "not-"
      }selected`}
      onClick={() => setVisibleIndex(visibleIndex === index ? -1 : index)}
    >
      <div>
        <h2 className="guide-item-header">{header}</h2>
      </div>
      {visibleIndex === index ? (
        <animated.div style={style}>
          <h3>{text}</h3>
          <img className="guide-item-image" src={url} />
        </animated.div>
      ) : null}
    </div>
  );
};
