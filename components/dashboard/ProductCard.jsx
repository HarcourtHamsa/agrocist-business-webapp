import React from "react";
import styles from "../../styles/sass/productCard.module.scss";
import { MdBookmarkBorder } from "react-icons/md";

function ProductCard() {
  return (
    <div className={styles.product_card}>
      <div className={"top"}></div>
      <div className={"bottom"}>
        <div>
          <p className="product-name">NPK SERIES</p>
          <p className="product-price">N180,000</p>
        </div>

        <div id="bookmark">
          <MdBookmarkBorder size={25} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
