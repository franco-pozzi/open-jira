import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import { Layout } from "../components/layouts";

import styles from "../styles/Home.module.css";

import { Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Layout title="Home Page | OpenJira">
      <Typography variant="h1" color="primary">
        Open Jira - APP
      </Typography>
    </Layout>
  );
};

export default Home;
