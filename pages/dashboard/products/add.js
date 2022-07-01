import React from "react";
import styles from "../../../styles/sass/addProduct.module.scss";
import Wrapper from "../../../components/dashboard/Wrapper";

const PRODUCT_CATEGORY = []

function AddProduct() {
  return (
    <div>
      <Wrapper>
        <div className={styles.container}>
          <h1>Add a product</h1>

          <div className="card" id="product-category">
            <h2>Product Category</h2>
            <p>Please Select a primary category for your product</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default AddProduct;
