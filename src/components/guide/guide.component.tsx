import React, { useState } from "react";
import { GuideItem } from "../guide-item/guide-item.component";
import "./guide.styles.css";
export const Guide: React.FC<any> = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const guideList = [
    {
      index: 0,
      header: "How to move?",
      items: [
        {
          text: "You can move only vertically and horizontally, but not over other figures. You cannot step on brown fields. Well, you can but only with king...",
          url: "../../guide-move.jpg",
        },
      ],
    },
    {
      index: 1,
      header: "How to kill?",
      items: [
        {
          text: "Catch enemy of guard by attacking from behind. You need 2 soldiers to attack simultaneously from left and right or top and bottom. Watch your back...",
          url: "../../guide-kill.jpg",
        },
        {
          text: "If enemy is near edge or brown square you can use that too.",
          url: "../../guide-kill2.jpg",
        },
      ],
    },
    {
      index: 2,
      header: "How to win?",
      items: [
        {
          text: "As king - Escape to one of the corners. How noble...",
          url: "../../guide-win-as-king.jpg",
        },{
          text: "As viking - Surround enemy king from all 4 sides, you can use egde and corners too. Then you know what to do...",
          url: "../../guide-win-as-viking.jpg",
        }
      ],
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
