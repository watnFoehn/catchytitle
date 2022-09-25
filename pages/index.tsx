import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catchy Title</title>
        <meta name="description" content="Generated by create next app" />
        {/* TODO: Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Catchy Title</h1>
      <main className={styles.main}>
        <section>
          <ul>
            <li>Check your relationship with money, make it „healthy“</li>
            <br />
            <li>
              Have an overview about your finances (income, expenses, assets,
              debt)
            </li>
            <ul>
              <li>Regularly would be optimal</li>
            </ul>
            <br />
            <li>Be debt free</li>
            <br />
            <li>Have a comfortable reserve</li>
            <ul>
              <li>
                if you can‘t figure out how much, 3-6 months worth of income is
                a good start
              </li>
            </ul>
            <br />
            <li>Only invest what you can loose</li>
            <ul>
              <li>
                Can‘t get comfortable with the idea? Two options: don‘t invest
                or change your mindset
              </li>
            </ul>
            <br />
            <li>Understand the basics of finance markets</li>
            <ul>
              <li>Interest, shares/stocks, ETFs, government bonds, etc.</li>
              <li>Ask friends, read books or watch YouTube</li>
            </ul>
            <br />
            <li>Only invest in assets/products you understand</li>
            <br />
            <li>
              Diversify, e.g. have different stocks or invest in products that
              diversify for you (ETFs)
            </li>
            <br />
            <li>Have a reason to invest</li>
            <br />
            <li>Have a timeframe</li>
            <ul>
              <li>
                or in the best case none and never look at it again until you
                sell it, the longer the better
              </li>
            </ul>
            <br />
            <li>
              Start as early as possible to invest (leverage of interest), it
              reduces your fear
            </li>
            <ul>
              <li>
                You can try out investment games if you‘re too scared of loosing
                money
              </li>
            </ul>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
