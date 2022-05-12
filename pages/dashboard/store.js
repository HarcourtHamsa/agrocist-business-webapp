import React from "react";
import styles from "../../styles/sass/store.module.scss";
import Wrapper from "../../components/dashboard/Wrapper";
import Caurosel from "../../components/dashboard/Carousel";
import ProductCard from "../../components/dashboard/ProductCard";

function Store() {
  return (
    <div>
      <Wrapper>
        <div className={styles.container}>
          <Caurosel />
          
          <div className="products">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Store;
