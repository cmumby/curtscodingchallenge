/* eslint-disable prettier/prettier */
import React, { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';




function App() {
  return <>
   <Navbar className="bg-primary-subtle">
        <Container>
          <Navbar.Brand href="#home">      <img
              alt=""
              src="/img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{'   '}Clone Projects: <strong>Twitter</strong></Navbar.Brand>
        </Container>
      </Navbar>
  <Container className="container-xl p-3">
    <Row>
      <Col className="col-3"> <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup></Col>
      <Col className="col-6">Column 2</Col>
      <Col className="col-3">Column 3</Col>
      
    </Row>
  </Container>
  </>
}

export default App;
