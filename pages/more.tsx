import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>More</title>
        <meta
          name="description"
          content="Further information for the interested"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>More</h1>
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default About;
