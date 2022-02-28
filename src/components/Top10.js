import axios from 'axios';
import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'


class Top10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latestListings: props.data,
        };
    }

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
        )
    }

    getRoundFigure = (num) => {
        return Math.round( num * 1000)/1000;
    }

    getRoundInMillion = (num) => {
        return this.getRoundFigure(num / 1000000);
    }

    showPercentChange = (per) => {
        const className = per < 0 ? 'text-danger' : 'text-success'
        return (
            <span className={className}>
                {this.getRoundFigure(per)}
            </span>
        )
    }

    getThumbnailImageURL = (id) => {
        const imageUrl = `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`;
        return imageUrl
    }


    getTableContents = () => {
        return (
            <tbody>
                
                {
                    this.state.latestListings.map(item => (
                        <tr key={item.id}>
                            <td>{item.cmc_rank}</td>
                            <td><Image src={this.getThumbnailImageURL(item.id)} key={item.id} width={30} height={30}></Image> <span className='ml-5'>{item.name}</span></td>
                            <td>${this.getRoundFigure(item.quote.USD.price)}</td>
                            <td>{this.showPercentChange(item.quote.USD.percent_change_24h)}</td>
                            <td>{this.showPercentChange(item.quote.USD.percent_change_7d)}</td>
                            <td>${this.getRoundInMillion(item.quote.USD.market_cap)}M</td>
                            <td>${this.getRoundInMillion(item.quote.USD.volume_24h)}M</td>
                        </tr>
                    ))
                }
            </tbody>
        )
    }

    render() {
        return (
            <Table responsive>
            {this.getTableHeadings()}
            {this.getTableContents()}
        </Table>
        )
    }
}

export { Top10 };