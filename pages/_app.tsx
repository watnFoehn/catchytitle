import "../styles/globals.css";
import styles from "../styles/Home.module.css";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import ChangeLanguage from "../components/LanguageSwitch";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={styles.flexContainer}>
        <Navbar />
        <ChangeLanguage />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
