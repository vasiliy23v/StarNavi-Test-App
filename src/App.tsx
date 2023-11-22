import React, { useState, useCallback } from "react";
import Button from "./components/Button";
import { Grid } from "./components/Grid";
import { Mode } from "./types/modesTypes";
import { leftColumnStyles, wrapperStyles } from "./styles/commonStyles";
import Select from "./components/Select";
import HoveredList from "./components/HoveredList";
import useModes from "./hooks/useModes";

const App: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<Mode | null>(null);
  const [hoveredSquares, setHoveredSquares] = useState<number[]>([]);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { modes } = useModes();

  const handleSquareHover = useCallback(
    (squareIndex: number) => {
      if (isHovering) {
        setHoveredSquares((prevSquares) => {
          const isBlue = prevSquares.includes(squareIndex);
          return isBlue
            ? prevSquares.filter((index) => index !== squareIndex)
            : [...prevSquares, squareIndex];
        });
      }
    },
    [isHovering, hoveredSquares]
  );

  const handleStart = () => {
    setIsHovering(true);
  };

  const handleStop = () => {
    setIsHovering(false);
    setHoveredSquares([]);
  };

  const deviceWidth = window.innerWidth;
  const gridSize = Math.min(deviceWidth - 10, 600);
  const squareSize = gridSize / (selectedMode?.field || 1) - 4;
  return (
    <div style={wrapperStyles}>
      <div style={leftColumnStyles}>
        <h1>StarNavi Test App</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <Select setSelectedMode={setSelectedMode} modes={modes} />
          {selectedMode &&
            (!isHovering ? (
              <Button
                title={"start"}
                handleFunc={handleStart}
                style={{ background: "blue" }}
              />
            ) : (
              <Button
                title={"stop & clear"}
                handleFunc={handleStop}
                style={{ background: "red" }}
              />
            ))}
        </div>
        {selectedMode !== undefined && (
          <Grid
            selectedMode={selectedMode}
            squareSize={squareSize}
            hoveredSquares={hoveredSquares}
            handleSquareHover={handleSquareHover}
          />
        )}
      </div>
      <div
        style={{
          width: "40%",
          height: "90vh",
          overflowY: `${hoveredSquares.length !== 0 ? "scroll" : "hidden"}`,
        }}
      >
        {hoveredSquares.length !== 0 && (
          <HoveredList
            hoveredSquares={hoveredSquares}
            selectedMode={selectedMode}
          />
        )}
      </div>
    </div>
  );
};

export default App;
