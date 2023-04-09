import React from "react";
import styles from "../styles/Crypto.module.css";

const Crypto = ({ data }) => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className={`col-md-10 ${styles.secContainer}`}>
              <section className={styles.cryptoData}>
                <div className={styles.detail}>
                  <img src={data.image} alt={data.name} title={data.name} />
                </div>
                <div className={styles.detail}>
                  <h4>{data.name}</h4>
                </div>
                <div className={styles.detail}>{data.symbol.toUpperCase()}</div>
                <div className={styles.detail}>
                  {data.current_price.toLocaleString()} $
                </div>
                <div className={styles.detail}>
                  <span
                    className={
                      data.price_change_percentage_24h >= 0
                        ? styles.green
                        : styles.red
                    }
                  >
                    {data.price_change_percentage_24h.toFixed(3)} %
                  </span>
                </div>
              </section>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crypto;
