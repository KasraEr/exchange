import React from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <>
      <section className="container text-align-center">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <div className={styles.loader}></div>
            <h1>Please Wait...</h1>
          </div>
          <div className="col-md-1"></div>
        </div>
      </section>
    </>
  );
};

export default Loader;
