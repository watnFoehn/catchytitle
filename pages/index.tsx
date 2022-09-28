import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catchy Title</title>
        <meta
          name="description"
          content="Homepage of my condensed personal financial advice"
        />
        {/* TODO: Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>Catchy Title</h1>
      <main className={styles.main}>
        <section>
          <ul>
            <li>check your relationship with money, make it „healthy“</li>
            <br />
            <li>
              have an overview about your finances (income, expenses, assets,
              debt)
            </li>
            <ul>
              <li>regularly would be optimal</li>
            </ul>
            <br />
            <li>be debt free</li>
            <br />
            <li>have a comfortable reserve</li>
            <ul>
              <li>
                if you can‘t figure out how much, 3-6 months worth of income is
                a good start
              </li>
            </ul>
            <br />
            <li>only invest what you can loose</li>
            <ul>
              <li>
                can‘t get comfortable with the idea? Two options: don‘t invest
                or change your mindset
              </li>
            </ul>
            <br />
            <li>understand the basics of finance markets</li>
            <ul>
              <li>
                interest, shares/stocks, ETFs, government bonds, real estate
                etc.
              </li>
              <li>ssk friends, read books or watch YouTube</li>
            </ul>
            <br />
            <li>only invest in assets/products you understand</li>
            <br />
            <li>
              diversify, e.g. have different stocks or invest in products that
              diversify for you (ETFs)
            </li>
            <br />
            <li>have a reason to invest</li>
            <br />
            <li>have a timeframe</li>
            <ul>
              <li>
                or in the best case none and never look at it again until you
                sell it, the longer the better
              </li>
            </ul>
            <br />
            <li>
              start as early as possible to invest (leverage of interest), it
              reduces your fear
            </li>
            <ul>
              <li>
                you can try out investment games if you‘re too scared of loosing
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
