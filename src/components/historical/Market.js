import React from "react";

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
            <tr key={key}>
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
