import Link from "next/link";
import styles from "../styles/Home.module.css";
import useTranslation from "next-translate/useTranslation";

const Navbar = () => {
  const { t } = useTranslation("common");
  return (
    <nav className={styles.navBar}>
      <ul>
        <Link href="/">
          <li>{t("home")}</li>
        </Link>
        <Link href="/about">
          <li>{t("about")}</li>
        </Link>
        <Link href="/more">
          <li>{t("details")}</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
