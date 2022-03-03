import React from "react";
import Banner from "./Banner";
import Card from "./Cards";
import "../css/Cards.css";

function Historical() {
  const card_items = [
    { title: "Market Cap", price: "384748" },
    { title: "Fully Diluted", price: "29393" },
    { title: "Volume", price: "4993" },
    { title: "Circulating ", price: "38389" },
  ];

  return (
    <div>
      <Banner />
      <div className="cards">
        {card_items.map((item, key) => (
          <Card key={key} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Historical;
