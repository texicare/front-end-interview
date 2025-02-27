import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className="m-8">
      Hello world!
      <div className="flex justify-center items-center bg-blue-200 h-64 w-64 rounded-md m-8">
        Tailwind
      </div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="primary.main"
        height={200}
        width={200}
        borderRadius={8}
        m={8}
      >
        Mui
      </Box>
    </div>
  );
}
