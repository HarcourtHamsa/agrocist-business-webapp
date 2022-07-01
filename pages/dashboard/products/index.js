import React, { useState } from "react";
import Wrapper from "../../../components/dashboard/Wrapper";
import styles from "../../../styles/sass/products.module.scss";
import StatsCard from "../../../components/dashboard/StatsCard";
import InputElement from "../../../components/InputElement";

import { FiMoreVertical } from "react-icons/fi";

function Products() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Wrapper>
        <div className={styles.container}>
          <h1>Products</h1>

          <div className="stats">
            <StatsCard number={74} title="total products" />
            <StatsCard number={12} title="available products" />
            <StatsCard number={27} title="sold out" />
            <StatsCard number={32} title="rejected" />
          </div>

          <button id="add-product-btn">Add Product</button>

          <div className="filter-container">
            <div id="select-container">
              <select>
                <option>All</option>
                <option>Live Products</option>
                <option>Rejected</option>
                <option>Sold Out</option>
              </select>
            </div>

            <InputElement placeholder="search by product name" />
          </div>

          <div className={styles.products}>
            <table>
              <tr>
                <th>Date</th>
                <th>Item</th>
                <th>Amount</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>736263</td>
                <td>22/11/2021</td>
                <td>Remi Adams</td>
                <td>KISHANSHREE-I </td>
                <td>N19,350.00</td>
                <td id="vertical-menu">
                  <FiMoreVertical
                    size={25}
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Products;
