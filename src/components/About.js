import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Image } from 'react-bootstrap';

// Component to show the about developers section
class About extends Component {
  render() {
    return (
      <>
        <Container>
            <Row>
                <Col xs='6' sm='6' md='6' className='mx-auto my-5'>
                    <Row>
                        <Col xs='12' sm='12' md='6' className='mx-auto'>
                            <h2 className='mx-auto'>Prabhu</h2>
                            <p>Prabhu is a Graduate Student in Computer Science at Portland State University.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' sm='12' md='5' className='mx-auto'>
                            <Button target="_blank" href="https://www.buymeacoffee.com/prabhumarappan">
                                <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy Prabhu a coffee" />
                                <h4 style={{fontSize:"14px"}}>Buy Prabhu a Coffee</h4>
                            </Button>
                        </Col>
                    </Row>
                </Col>

                <Col xs='6' sm='6' md='6' className='mx-auto my-5'>
                    <Row>
                        <Col xs='12' sm='12' md='6' className='mx-auto'>
                            <h2 className='mx-auto'>Sayed</h2>
                            <p>Sayed is a Graduate Student in Computer Science at Portland State University.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' sm='12' md='5' className='mx-auto'>
                            <Button target="_blank" href="https://www.buymeacoffee.com/prabhumarappan">
                            <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy Sayed a coffee" />
                            <h4 style={{fontSize:"14px"}}>Buy Sayed a Coffee</h4>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
      </>
    )
  }
}

export { About };