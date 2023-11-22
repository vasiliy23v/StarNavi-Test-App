import React from "react";

interface SquareProps {
  index: number;
  isBlue: boolean;
  onHover: (index: number) => void;
  squareSize: number;
}

export const Square: React.FC<SquareProps> = React.memo(
  ({ index, isBlue, onHover, squareSize }) => {
    const currentColor = isBlue ? "blue" : "white";
    return (
      <div
        style={{
          width: `${squareSize}px`,
          height: `${squareSize}px`,
          backgroundColor: currentColor,
          boxShadow: `0 0 2px ${isBlue && "blue"}`,
          border: "1px solid black",
        }}
        onMouseEnter={() => onHover(index)}
      ></div>
    );
  }
);
