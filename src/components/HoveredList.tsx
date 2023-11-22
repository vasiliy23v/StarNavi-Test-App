// HoveredList.tsx
import React from "react";
import { labelStyles } from "../styles/commonStyles";
import { Mode } from "../types/modesTypes";

interface HoveredListProps {
  hoveredSquares: number[];
  selectedMode: Mode | null;
}

const HoveredList: React.FC<HoveredListProps> = ({
  hoveredSquares,
  selectedMode,
}) => {
  const indexToRowCol = (index: number): { row: number; col: number } => {
    const row = Math.floor(index / (selectedMode?.field || 1)) + 1;
    const col = (index % (selectedMode?.field || 1)) + 1;
    return { row, col };
  };

  return (
    <>
      <h4>Hovered Squares: </h4>
      {hoveredSquares.map((square, index) => {
        const { row, col } = indexToRowCol(square);
        return (
          <span key={index} style={labelStyles}>
            {`col : ${col}, row : ${row}`}
            {index !== hoveredSquares.length - 1 && ", "}
          </span>
        );
      })}
    </>
  );
};

export default HoveredList;
