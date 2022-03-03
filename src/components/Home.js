import React, { Component } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Top10 } from './Top10';
import '../css/Home.css';
var axios = require('axios');

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			latestListings: []
		}
	}
	
	componentDidMount = () => {
		// api call and add that to state

		if (JSON.parse(localStorage.getItem('cmcdata')) == null) {
			axios.get('/.netlify/functions/getLatestCMC')
			.then((response) => {
				localStorage.setItem('cmcdata', JSON.stringify(response.data.data));

				this.setState({latestListings: response.data.data}, () => {
					this.setState({isLoading: false});
				});
			})
			.catch((error) => {
				console.log(error);
			});
		} else {
			console.log("FOUND DATA IN LOCAL STORE");
			
			this.setState({latestListings: JSON.parse(localStorage.getItem('cmcdata'))}, () => {
				this.setState({isLoading: false});
			});
		}
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
				<Col md="12" sm="12" xs="12">
				<h1 className='text-center'>Today's Cryptocurrency Prices by Market Cap</h1>
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