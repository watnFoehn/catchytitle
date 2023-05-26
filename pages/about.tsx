import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";

const About: NextPage = () => {
  const { t } = useTranslation("about");

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("about")}</title>
        <meta name="description" content="Motivation to build this site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>{t("about")}</h1>
      </header>
      <main className={styles.main}>
        <section>
          <p>{t("welcome")}</p>
          <p>{t("part1")}</p>
          <p>{t("part2")}</p>
          <p>{t("part3")}</p>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default About;
