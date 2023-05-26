import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";

const About: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("details")}</title>
        <meta
          name="description"
          content="Further information for the interested"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>{t("details")}</h1>
      </header>
      <main className={styles.main}>
        {/* TODO: add ressources here, Finanzflussbuch, Madame Money Penny und Gerd Kommer */}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default About;
