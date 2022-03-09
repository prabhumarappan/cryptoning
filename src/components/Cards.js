import React from "react";

function Card({ title, price }) {
  return (
    <div className="card__container">
      <div className="card__content">
        <div className="card__title">
          <h3>{title}</h3>
          <img src="https://www.pngfind.com/pngs/m/201-2015527_alert-icon-white-transparent-hd-png-download.png" />
        </div>
        <div className="card__price">
          <p>
            <span className="price__symbol">$</span>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
