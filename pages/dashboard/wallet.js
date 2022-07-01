import React from "react";
import styles from "../../styles/sass/wallet.module.scss";
import Wrapper from "../../components/dashboard/Wrapper";

function WalletCard({ title, amount, bg }) {
  return (
    <div id="wallet-card" style={{ backgroundColor: bg }}>
      <div>
        <p className="amount">{amount}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  );
}

function Wallet() {
  return (
    <div>
      <Wrapper>
        <div className={styles.container}>
          <h1>Wallet</h1>

          <div className="cards">
            <WalletCard
              amount="N235,945.00"
              title="Total Balance"
              bg="#7D4646"
            />
            <WalletCard
              amount="N235,945.00"
              title="Paid Invoices"
              bg="#3F7A3E"
            />
            <WalletCard
              amount="N235,945.00"
              title="UnPaid Invoices"
              bg="#2A4670"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Wallet;
