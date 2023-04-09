import React, { useState } from "react";
import styles from "./styles/App.module.css";
// components
import LandingPage from "./components/LandingPage";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
document.title = "Crypto Prices";

const App = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <section className={styles.searchBox}>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="input-group mb-3">
                <input
                  defaultValue={search}
                  onChange={searchHandler}
                  type="text"
                  className={`form-control ${styles.inpoot}`}
                  placeholder="enter the crypto name..."
                  aria-label="enter the crypto name..."
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </section>
      <LandingPage searched={search} />
    </>
  );
};

export default App;
