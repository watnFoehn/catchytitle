import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Motivation to build this site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}>About</h1>
      </header>
      <main className={styles.main}>
        <section>
          Welcome to Essential Personal Finance, where I share simple and
          practical personal finance advice. I believe that managing your
          finances shouldn&apos;t be complicated. That&apos;s why I&apos;m here
          to provide you with straightforward tips and strategies to help you
          achieve financial well-being. I understand that everyone&apos;s
          financial journey is unique. Whether you&apos;re starting out,
          tackling debt, or building wealth, my goal is to break down complex
          concepts into easy-to-understand insights. No sales pitches, just
          unbiased guidance. My mission is to empower you with knowledge so you
          can make informed decisions about your money and take control of your
          financial future. I&apos;ve curated a collection of essential advice
          from trusted sources and experts. From budgeting and saving to
          investing and retirement planning, I cover a wide range of topics to
          give you a solid foundation in personal finance. Let&apos;s simplify
          personal finance together. Join me on this journey towards financial
          success. Together, we can make smart money decisions and achieve our
          goals. Remember, it&apos;s all about keeping it simple and smart when
          it comes to your finances.
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default About;
