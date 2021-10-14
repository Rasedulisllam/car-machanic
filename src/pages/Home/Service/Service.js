import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './service.css'

const Service = (props) => {
    const {name,img,price,details}=props.service
    return (
        <Col className="">
        <Card className="p-4 card">
            <Card.Img variant="top" src={img}/>
            <Card.Body>
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text >
                {details}
            </Card.Text>
            <Card.Text>
              Cost:{price} Taka
            </Card.Text>
            <Button variant="outline-secondary">Get Our {name} Service</Button>{' '}
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Service;