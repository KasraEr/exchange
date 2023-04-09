import React, { useState, useEffect } from "react";
//api
import { fetch_coin_data } from "../services/api";
// components
import Crypto from "./Crypto";
import Loader from "./Loader";

const LandingPage = ({ searched }) => {
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetch_coin_data();
      setCryptoData(data);
    };
    fetchAPI();
  }, []);
  const searchedCoins = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(searched.toLowerCase())
  );

  return (
    <>
      {cryptoData.length ? (
        searchedCoins.map((item) => <Crypto key={item.id} data={item} />)
      ) : (
        <Loader />
      )}
    </>
  );
};

export default LandingPage;
