import React from "react";
import "../css/Banner.css";

function Banner() {
  const breadcrumbItems = ["Cryptocurrencies", "Coins", "Bitcoin"];
  return (
    <div className="banner_container">
      <div className="breadcrumb">
        <ul className="breadcrumb__lists">
          {breadcrumbItems.map((item, i, row) => (
            <li key={i} className="breadcrumb__item">
              <a href="#">
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
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="banner__content">
        <div className="banner__left">
          <div className="currency">
            <img
              src="https://www.iconpacks.net/icons/2/free-bitcoin--icon-2689-thumb.png"
              className="currency__icon"
            />
            <div className="currency__content">
              <p className="currency__name">
                Bitcoin <span className="currency__count">#1</span>
              </p>
              <p className="currency__rate">$457155.3569</p>
            </div>
          </div>
          <div className="currency__tag__container">
            <p>Tags</p>
            <ul className="currency__tags">
              <li className="currency__tag">Mineable</li>
              <li className="currency__tag">Bitcoin</li>
              <li className="currency__view__all">
                <a href="#">View all</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
