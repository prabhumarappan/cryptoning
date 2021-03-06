import React from "react";
import { Link } from "react-router-dom";

import "../../style/banner.css";

//This is file to display coin related information such as full name, id and internals
//It is using the fetched url data and storing it in coinInfo and then displaying those
//data on banner section of page accordingly. It is linked with banner.css file for styling
//purposes.

export function Banner({ AggregatedData, CoinInfo, Exchanges }) {
  const { PRICE } = AggregatedData;
  const { FullName, Id, ImageUrl, Internal } = CoinInfo;

  const breadcrumbItems = ["Cryptocurrencies", FullName];
  let tagcount = 0;
  return (
    //create table to accomodate data from api using map.

    <div className="banner_container">
      <div className="breadcrumb">
        <ul className="breadcrumb__lists">
          {breadcrumbItems.map((item, i, row) => (
            <li className="breadcrumb__item" key={i}>
              <Link
                to={
                  item === "Cryptocurrencies" ? "/" : `/historical/${Internal}`
                }
              >
                <span
                  className={
                    (row.length === i + 1 && "breadcrumb__active") || ""
                  }
                >
                  {item}
                </span>
                {row.length !== i + 1 && (
                  <span className="breadcrumb__separator">/</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="banner__content">
        <div className="banner__left">
          <div className="currency">
            <img
              src={`https://www.cryptocompare.com${ImageUrl}`}
              className="currency__icon"
              alt="Crypto Symbol"
            />

            <div className="currency__content">
              <p className="currency__name">
                {FullName} <span className="currency__count">#{Id}</span>
              </p>
              <p className="currency__rate">${PRICE}</p>
            </div>
          </div>
          <div className="currency__tag__container">
            <p>Exchanges</p>
            <ul className="currency__tags">
              {Exchanges.map((item, key) => {
                if (tagcount > 3) return false;
                tagcount += 1;
                return (
                  <li key={key} className="currency__tag">
                    {item.MARKET}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
