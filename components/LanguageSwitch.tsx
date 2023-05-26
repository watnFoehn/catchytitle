import React from "react";
import { useRouter } from "next/router";
import setLanguage from "next-translate/setLanguage";
import styles from "../styles/ChangeLanguage.module.css";

export default function ChangeLanguage() {
  const router = useRouter();
  const { locale } = router;
  return (
    <div className={styles.languageContainer}>
      <button
        className={`${styles.languageButton} ${
          locale === "en" ? styles.active : ""
        }`}
        onClick={async () => await setLanguage("en")}
      >
        EN
      </button>
      <button
        className={`${styles.languageButton} ${
          locale === "de" ? styles.active : ""
        }`}
        onClick={async () => await setLanguage("de")}
      >
        DE
      </button>
    </div>
  );
}
