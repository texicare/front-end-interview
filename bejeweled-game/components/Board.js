import React, { useState, useEffect } from "react";
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
    popTiles(newBoard, i, j, colorToPop);
    // cascadeTiles(newBoard);
    // setBoard(newBoard);
  };

  const popTiles = (board, i, j, color) => {
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
    popTiles(board, i + 1, j, color);
    popTiles(board, i - 1, j, color);
    popTiles(board, i, j + 1, color);
    popTiles(board, i, j - 1, color);
  };

  const cascadeTiles = (board) => {
    for (let j = 0; j < 10; j++) {
      for (let i = 9; i >= 0; i--) {
        if (board[i][j].popped) {
          for (let k = i; k > 0; k--) {
            board[k][j] = { ...board[k - 1][j] };
          }
          board[0][j] = {
            color: colors[Math.floor(Math.random() * colors.length)],
            popped: false,
          };
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
            color={tile.popped ? "white" : tile.color}
            onClick={() => handleTileClick(i, j)}
          />
        ))
      )}
    </Box>
  );
};

export default Board;
