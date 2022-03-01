import React, { Component } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Top10 } from './Top10';
import '../css/Home.css';
var axios = require('axios');

const { REACT_APP_CMC_API_KEY } = process.env; 

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			latestListings: null
		}
	}
	
	componentDidMount = () => {
		// api call and add that to state

		if (JSON.parse(localStorage.getItem('cmcdata')) == null) {
			var config = {
				method: 'get',
				url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10',
				headers: { 
					'X-CMC_PRO_API_KEY': REACT_APP_CMC_API_KEY
				}
			};

			axios(config)
			.then(function (response) {
				localStorage.setItem('cmcdata', JSON.stringify(response.data.data));
			})
			.catch(function (error) {
				console.log(error);
			});
		} else {
			console.log("FOUND DATA IN LOCAL STORE");
		}
		
		this.setState({latestListings: JSON.parse(localStorage.getItem('cmcdata'))});

		setTimeout(() => this.setState({isLoading: false}), 1000);
	}

	render() {
		if (this.state.isLoading) {
            return (
				<Container>
					<Row>
						<Col xs = "1" className='mx-auto mt-5'>
							<Spinner animation="border" role="status">
							</Spinner>
						</Col>
					</Row>
				</Container>
			);
		}

		return (
		<>
			<Container>
			<Row className='mt-4'>
				<Col md="8" sm="12" xs="12">
				<h3>Today's Cryptocurrency Prices by Market Cap</h3>
				</Col>
				<Col xs="12">
				<Top10 data={this.state.latestListings}></Top10>
				</Col>
			</Row>
			</Container>
		</>
		)
	}
}

export { Home };