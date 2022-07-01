import React from "react";
import styles from "../../styles/sass/transactions.module.scss";
import Wrapper from "../../components/dashboard/Wrapper";

function Transactions() {
  return (
    <div>
      <Wrapper>
        <div className={styles.container}>
          <h1>Transactions Report</h1>

          <div className="card">
            <div id="filters">
              {/* code goes here */}
              <p>Select Date</p>
              <span>
                <button>Apply</button>
                <button>Download</button>
              </span>
            </div>

            <div className="section">
              <p className="date">APRIL 22 2022</p>

              <table>
                <tr className="table-headers">
                  <th>Order no</th>
                  <th>Qty</th>
                  <th>Sales Price</th>
                  <th>Commission Rate</th>
                  <th>Commission Amount</th>
                  <th>Payout Amount</th>
                </tr>
                <tr>
                  <td>KISHANSHREE-I </td>
                  <td>1</td>
                  <td>N 12,000.00</td>
                  <td>15%</td>
                  <td>N19,350.00</td>
                  <td>N10,200.00</td>
                </tr>
              </table>
            </div>

            <div className="section">
              <p className="date">APRIL 22 2022</p>

              <table>
                <tr className="table-headers">
                  <th>Order no</th>
                  <th>Qty</th>
                  <th>Sales Price</th>
                  <th>Commission Rate</th>
                  <th>Commission Amount</th>
                  <th>Payout Amount</th>
                </tr>
                <tr>
                  <td>KISHANSHREE-I </td>
                  <td>1</td>
                  <td>N 12,000.00</td>
                  <td>15%</td>
                  <td>N19,350.00</td>
                  <td>N10,200.00</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Transactions;
