import React from "react";
import { Square } from "./Square";
import { Mode } from "../types/modesTypes";

interface GridProps {
  selectedMode: Mode | null;
  squareSize: number;
  hoveredSquares: number[];
  handleSquareHover: (squareIndex: number) => void;
}

export const Grid: React.FC<GridProps> = ({
  selectedMode,
  squareSize,
  hoveredSquares,
  handleSquareHover,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${
          selectedMode?.field || 0
        }, ${squareSize}px)`,
        gridTemplateRows: `repeat(${
          selectedMode?.field || 0
        }, ${squareSize}px)`,
        gap: "4px",
        maxWidth: "100%",
      }}
    >
      {Array.from({ length: (selectedMode?.field || 0) ** 2 }).map(
        (_, index) => (
          <Square
            key={index}
            index={index}
            isBlue={hoveredSquares.includes(index)}
            onHover={handleSquareHover}
            squareSize={squareSize}
          />
        )
      )}
    </div>
  );
};
