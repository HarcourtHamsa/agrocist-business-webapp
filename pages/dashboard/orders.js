import React from "react";
import Wrapper from "../../components/dashboard/Wrapper";
import styles from "../../styles/sass/orders.module.scss";

function Orders() {
  return (
    <>
      <Wrapper>
        <div className={styles.container}>
          <h1>Orders</h1>

          <div className="sort-buttons-container">
            <div>
              <button>All orders</button>
              <button>Active orders</button>
              <button>Pending orders</button>
              <button>Delivered orders</button>
            </div>

            <div>
              <label>sort: </label>

              <select>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          <div className={styles.orders}>
            <table>
              <tr>
                <th>Order no</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Item</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>736263</td>
                <td>22/11/2021</td>
                <td>Remi Adams</td>
                <td>KISHANSHREE-I </td>
                <td>N19,350.00</td>
                <td>Processing</td>
              </tr>
              <tr>
                <td>736263</td>
                <td>22/11/2021</td>
                <td>Remi Adams</td>
                <td>KISHANSHREE-I </td>
                <td>N19,350.00</td>
                <td>Processing</td>
              </tr>
              <tr>
                <td>736263</td>
                <td>22/11/2021</td>
                <td>Remi Adams</td>
                <td>KISHANSHREE-I </td>
                <td>N19,350.00</td>
                <td>Processing</td>
              </tr>
              <tr>
                <td>736263</td>
                <td>22/11/2021</td>
                <td>Remi Adams</td>
                <td>KISHANSHREE-I </td>
                <td>N19,350.00</td>
                <td>Processing</td>
              </tr>
              <tr>
                <td>736263</td>
                <td>22/11/2021</td>
                <td>Remi Adams</td>
                <td>KISHANSHREE-I </td>
                <td>N19,350.00</td>
                <td>Processing</td>
              </tr>
              <tr>
                <td>736263</td>
                <td>22/11/2021</td>
                <td>Remi Adams</td>
                <td>KISHANSHREE-I </td>
                <td>N19,350.00</td>
                <td>Processing</td>
              </tr>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Orders;
