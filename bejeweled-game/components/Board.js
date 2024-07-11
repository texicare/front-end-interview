import React, { useState } from "react";
import { Box } from "@mui/material";
import Tile from "./Tile";

const colors = ["red", "yellow", "blue", "green"];

const generateInitialBoard = () => {
  const board = [];
  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        popped: false,
      });
    }
    board.push(row);
  }
  return board;
};

const Board = () => {
  const [board, setBoard] = useState(generateInitialBoard());

  const handleTileClick = (i, j) => {
    const colorToPop = board[i][j].color;
    const newBoard = board.map((row) => row.map((tile) => ({ ...tile })));
    markTilesToPop(newBoard, i, j, colorToPop);
    popMarkedTiles(newBoard);
    // cascadeTiles(newBoard);
    setBoard(newBoard);
  };

  const markTilesToPop = (board, i, j, color) => {
    if (
      i < 0 ||
      i >= 10 ||
      j < 0 ||
      j >= 10 ||
      board[i][j].color !== color ||
      board[i][j].popped
    ) {
      return;
    }
    board[i][j].popped = true;
    markTilesToPop(board, i + 1, j, color);
    markTilesToPop(board, i - 1, j, color);
    markTilesToPop(board, i, j + 1, color);
    markTilesToPop(board, i, j - 1, color);
  };

  const popMarkedTiles = (board) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j].popped) {
          board[i][j] = { color: "white", popped: false };
        }
      }
    }
  };

  const cascadeTiles = (board) => {
    for (let j = 0; j < 10; j++) {
      let emptySpaces = 0;
      for (let i = 9; i >= 0; i--) {
        if (board[i][j].color === "white") {
          emptySpaces++;
        } else if (emptySpaces > 0) {
          board[i + emptySpaces][j] = { ...board[i][j] };
          board[i][j] = { color: "white", popped: false };
        }
      }
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 40px)",
        gridGap: "2px",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {board.map((row, i) =>
        row.map((tile, j) => (
          <Tile
            key={`${i}-${j}`}
            color={tile.color}
            onClick={() => handleTileClick(i, j)}
          />
        ))
      )}
    </Box>
  );
};

export default Board;
