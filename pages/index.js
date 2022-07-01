import React from "react";
import Head from "next/head";
import Link from 'next/link';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/sass/index.module.scss";

// assets
import bags from "../assets/images/bags.png";
import dashboard from "../assets/images/dashboard.png";

import Image from "next/image";

function index() {
  return (
    <>
      <Head>
        <title>Agrocist Retailers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={styles.hero}>
        <div className="container">
          <div>
            <h1>
              A B2B platform digitizing the distribution of agro inputs from
              manufacturers to retailers
            </h1>
            <Link href="/account">Get started</Link>
          </div>

          <div className="images">
            <div id="one"></div>
            <div id="two"></div>
            <div id="three"></div>
          </div>
        </div>
      </div>

      <section className={styles.section1}>
        <div className="container">
          <div className="grid">
            <div>
              <h2>Are you an agro input retailer?</h2>
              <p>
                Stock your agro shops easily at the comfort of your phones. Get
                access to a wide range of agro input products from top
                manufacturers/distributors. Products like; fertilizer, seeds,
                agro chemicals, Animal feeds, drugs, accessories etc
              </p>
              <Link href="/account/">Get started</Link>
            </div>
            <div>
              <Image src={bags} alt="A man smiling" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className="container">
          <h2>Are you an agro input manufacturer or distributor ?</h2>
          <p>
            Get your products to thousands of agro input shop owners easily and
            quickly. Access data insights on agro market and trends
          </p>
        </div>
      </section>

      <section className={styles.section3}>
        <div className="container">
          <div className="grid">
            <div>
              <Image src={dashboard} alt="a farmer checking her crops" />
            </div>
            <div>
              <h2>Benefits of working with us</h2>
              <ul>
                <li>Buy easily from top agro brands at a competitive price</li>
                <li>Easy payment and inventory management</li>
                <li>free delivery to your shop</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section4}>
        <div className="container">
          <h2>We bring Retailers Orders to you</h2>
          <p>interested in our solution but not yet clear?</p>

          <button>Book a demo</button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default index;
