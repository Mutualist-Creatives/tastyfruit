"use client";

import { useState } from "react";

export default function FlipCard({
  front,
  back,
  frontBg = "#003CE9",
  backBg = "#9CFF00",
  className = "",
}: {
  front: React.ReactNode;
  back: React.ReactNode;
  frontBg?: string;
  backBg?: string;
  className?: string;
}) {
  const [flipped, setFlipped] = useState(true);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((s) => !s);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped((s) => !s)}
      onKeyDown={handleKeyDown}
      className={`relative w-full [perspective:1000px] rounded-2xl ${
        className || "aspect-[4/3]"
      }`}
      aria-label="Flip nutrition card"
    >
      <div
        className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] rounded-2xl  shadow-md ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div
          className="absolute inset-0 backface-hidden rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: frontBg }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden rounded-2xl flex items-center justify-center p-6"
          style={{ backgroundColor: backBg }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
