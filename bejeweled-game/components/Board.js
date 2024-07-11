import { Box } from "@mui/material";
import Tile from "./Tile";

const boardSize = 10;

const generateInitialBoard = () => {
  const board = [];
  let count = 0;
  for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
      row.push({
        color: colors[Math.floor(Math.random() * colors.length)],
        index: count,
      });
      count++;
    }
    board.push(row);
  }
  return board;
};

const Board = () => {
  const [board, setBoard] = useState(generateInitialBoard());

  const handleTileClick = (index) => {
    const newBoard = board.map((row) =>
      row.map((tile) => ({
        ...tile,
        color: tile.index === index ? "white" : tile.color,
      }))
    );
    setBoard(newBoard);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat({boardSize}, 40px)`,
        gridGap: "2px",
        marginTop: "50px",
      }}
    >
      {board.map((row) =>
        row.map((tile) => (
          <Tile
            color={tile.color}
            onClick={() => handleTileClick(tile.index)}
          />
        ))
      )}
    </Box>
  );
};

export default Board;
