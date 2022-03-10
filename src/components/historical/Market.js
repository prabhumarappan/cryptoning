import React from "react";

//This is the file to display market section of the page. It uses the API data to
//display market, exchange rate, price and 24 hours exchange volume for that currency
//It is using a simple table and all information are displayed using map

export function Market({ marketList }) {
  return (
    <div className="market__container">
      <table className="table">
        <thead>
          <th>#</th>
          <th>Market</th>
          <th>Price</th>
          <th>Open 24</th>
        </thead>
        <tbody>
          {marketList?.map((item, key) => (
            //using map to display data for market, price and open 24 hours.

            <tr key={key} class="table_color">
              <td data-label="No">{key + 1}</td>
              <td data-label="Market">{item.MARKET}</td>
              <td data-label="Price">${item.PRICE.toFixed(2)}</td>
              <td data-label="Open 24">${item.VOLUME24HOUR.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
