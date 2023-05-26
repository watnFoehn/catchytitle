import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.container}>
      <Head>
        <title>{t("title")}</title>
        <meta
          name="description"
          content="Homepage of my condensed personal financial advice"
        />
        {/* TODO: Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>{t("title")}</h1>
      <main className={styles.main}>
        <section>
          <ul>
            <li>{t("relationship")}</li>
            <br />
            <li>{t("overview")}</li>
            <ul>
              <li>{t("regularly")}</li>
            </ul>
            <br />
            <li>{t("debtFree")}</li>
            <br />
            <li>{t("reserve")}</li>
            <ul>
              <li>{t("reserveDescription")}</li>
            </ul>
            <br />
            <li>{t("investWhatYouCan")}</li>
            <ul>
              <li>{t("comfortableIdea")}</li>
            </ul>
            <br />
            <li>{t("basicsFinance")}</li>
            <ul>
              <li>{t("financeDescription")}</li>
              <li>{t("friendsBooksYoutube")}</li>
            </ul>
            <br />
            <li>{t("investUnderstand")}</li>
            <br />
            <li>{t("diversify")}</li>
            <br />
            <li>{t("reasonToInvest")}</li>
            <br />
            <li>{t("timeframe")}</li>
            <ul>
              <li>{t("timeframeDescription")}</li>
            </ul>
            <br />
            <li>{t("startEarly")}</li>
            <ul>
              <li>{t("investmentGames")}</li>
            </ul>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
