import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <ul>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <li>About</li>
          </a>
        </Link>
        <Link href="/more">
          <a>
            <li>More details</li>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
