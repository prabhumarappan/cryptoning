import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

// Class component which which use the top 10 api data to display top 10 coins
// Home component sends the API data through props
class Top10 extends Component {
  // constructor to set up component and set state
  constructor(props) {
    super(props);
    this.state = {
      latestListings: props.data,
    };
  }

  // function to return the table heading
  getTableHeadings = () => {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>24hr %</th>
          <th>7d %</th>
          <th>MarketCap</th>
          <th>Volume</th>
        </tr>
      </thead>
    );
  };

  // helper function to return the round figure of a float upto 3 decimal points
  getRoundFigure = (num) => {
    return Math.round(num * 1000) / 1000;
  };

  // helper function to return the round figure in terms of millions
  getRoundInMillion = (num) => {
    return this.getRoundFigure(num / 1000000);
  };

  // helper function to return a span with the font color depending on postivie or negative change
  showPercentChange = (per) => {
    const className = per < 0 ? "text-danger" : "text-success";
    return <span className={className}>{this.getRoundFigure(per)}</span>;
  };

  // helper function to return image depending on the id 
  getThumbnailImageURL = (id) => {
    const imageUrl = `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
    return imageUrl;
  };

  // helper function to return the hyperlink for redirection
  getCurrencyHref = (name) => {
    return `/historical/${name}`;
  };

  // main function that formats rest of the table depending on the API data
  getTableContents = () => {
    return (
      <tbody>
        {this.state.latestListings.map((item) => (
          <tr key={item.id}>
            <td>{item.cmc_rank}</td>
            <td>
              <Nav.Link href={this.getCurrencyHref(item.symbol)}>
                <Image
                  src={this.getThumbnailImageURL(item.id)}
                  key={item.id}
                  width={30}
                  height={30}
                  alt={item.name + " logo"}
                ></Image>{" "}
                <span className="ml-5">{item.name}</span>
              </Nav.Link>
            </td>
            <td>${this.getRoundFigure(item.quote.USD.price)}</td>
            <td>{this.showPercentChange(item.quote.USD.percent_change_24h)}</td>
            <td>{this.showPercentChange(item.quote.USD.percent_change_7d)}</td>
            <td>${this.getRoundInMillion(item.quote.USD.market_cap)}M</td>
            <td>${this.getRoundInMillion(item.quote.USD.volume_24h)}M</td>
          </tr>
        ))}
      </tbody>
    );
  };

  // render function to return the responsive table
  render() {
    return (
      <Table responsive>
        {this.getTableHeadings()}
        {this.getTableContents()}
      </Table>
    );
  }
}

export { Top10 };
