import React from "react";
import { Box } from "@mui/material";

const Tile = ({ color, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 40,
        height: 40,
        backgroundColor: color,
        border: "1px solid #000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    />
  );
};

export default Tile;
