import React, { Component } from 'react'
import { Table } from 'react-bootstrap';


class Top10 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData: props.data,
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

    getTableContents = () => {
        return (
            <tbody>
                
                {
                    [1,2,3,4].map(item => (
                        <tr>
                            <td>3</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                            ))}
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