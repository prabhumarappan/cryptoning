import React, { Component } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Top10 } from './Top10';
import '../css/Home.css';

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