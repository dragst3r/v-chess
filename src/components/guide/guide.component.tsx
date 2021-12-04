import React, { useState } from "react";
import { GuideItem } from "../guide-item/guide-item.component";
import "./guide.styles.css";
export const Guide: React.FC<any> = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const guideList = [
    {
      index: 0,
      header: "How to move?",
      text: "You can move vertically and horizontally only, but not over other figures. You cannot step on brown fields. Well, you can but only with king...",
      url: "../../guide-move.jpg",
    },
    { index: 1, header: "How to kill?", text: "", url: "../../guide-kill.jpg" },
    {
      index: 2,
      header: "How to win?",
      text: "",
      url: "../../guide-win-as-king.jpg",
    },
  ];
  return (
    <div className="guide-contrainer">
      <h1 className="guide-header">How to play?</h1>
      {guideList.map((item) => (
        <GuideItem
          key={item.index}
          {...item}
          visibleIndex={visibleIndex}
          setVisibleIndex={setVisibleIndex}
        />
      ))}
    </div>
  );
};
