import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <p>JJK Home Page.</p>
    </>
  );
};

export default Home;
