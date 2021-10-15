import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expart = props => {
    const {name,img,expartOf,age}=props.expart
    return (
        <Col>
            <Card className="text-start">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title className="fw-bold text-warning fs-4">{name}</Card.Title>
                <Card.Text className="text-warning fw-bold fs-2">
                    Our {expartOf} Expart.
                </Card.Text>
                <Card.Text className='fs-5'>
                    age: {age} years.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expart;