import React from "react";
import Head from "next/head";
import Board from "../components/Board";
import { Container, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Bejeweled Game</title>
      </Head>
      <Typography variant="h2" align="center" gutterBottom>
        Bejeweled Game
      </Typography>
      <Board />
    </Container>
  );
};

export default Home;
