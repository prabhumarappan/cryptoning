import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Banner, Card, CurrencyNavBar, Graph, Market } from "./index";
import "../../style/cryptomain.css";
import BarGraph from "./BarGraph";

function Historical(props) {
  const [info, setInfo] = useState();
  const { symbol } = useParams();

  const card_items = [
    {
      title: "Market Cop",
      price: info?.AggregatedData.MKTCAP || info?.AggregatedData.VOLUMEHOUR,
    },
    {
      title: "Fully Diluted",
      price:
        info?.AggregatedData.TOTALVOLUME24HTO || info?.AggregatedData.VOLUMEDAY,
    },
    {
      title: "Volume",
      price:
        info?.AggregatedData.VOLUME24HOUR || info?.AggregatedData.VOLUMEHOURTO,
    },
    {
      title: "Cirulating supply",
      price:
        info?.AggregatedData.CIRCULATINGSUPPLY ||
        info?.AggregatedData.TOPTIERVOLUME24HOUR,
    },
  ];

  const pages = [
    { title: "Line chart", component: <Graph /> },
    { title: "Bar chart", component: <BarGraph /> },
    { title: "Market", component: <Market marketList={info?.Exchanges} /> },
  ];
  const [activePage, changePage] = useState(pages[0]);

  const fetchCurrency = async () => {
    try {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/top/exchanges/full?fsym=${symbol.toUpperCase()}&tsym=USD&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`
      );
      const { Data, Response } = await response.json();

      if (Response == "Success") {
        setInfo(Data);
      }
    } catch (error) {
      console.log({ error: "faild to fetch informations" });
    }
  };

  useEffect(() => {
    fetchCurrency();
  }, [symbol]);

  return (
    <>
      {info?.CoinInfo ? (
        <div className="historical">
          <Banner {...info} />
          <div className="cards">
            {card_items.map((item, key) => (
              <Card key={key} {...item} />
            ))}
          </div>
          <div className="crypo__main">
            <CurrencyNavBar
              pages={pages}
              active={activePage}
              changePage={changePage}
            />
            {activePage.component}
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </>
  );
}

export default Historical;
