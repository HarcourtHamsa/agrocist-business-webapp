import React from "react";
import styles from "../../styles/sass/carousel.module.scss";

const CAROUSEL_CARDS = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

function Caurosel() {
  return (
    <>
      <div className={styles.container}>
        <div className={"carousel"}>
          {CAROUSEL_CARDS.map((carousel) => {
            return <div className="card" key={carousel.id}></div>;
          })}
        </div>
      </div>

      <div className={styles.dots}>
        {CAROUSEL_CARDS.map((carousel) => {
          return <div className="dot" key={carousel.id}></div>;
        })}
      </div>
    </>
  );
}

export default Caurosel;
