import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './service.css'

const Service = (props) => {
    const {name,image,price,details,id}=props.service
    const history =useHistory();
    
    const handleBtnClick=()=>{
        history.push(`/booking/${id}`)
    }
    return (
        <Col className="">
        <Card className="p-4 card">
            <Card.Img variant="top" src={image}/>
            <Card.Body>
            <Card.Title className="fw-bold">{name}</Card.Title>
            <Card.Text >
                {details}
            </Card.Text>
            <Card.Text>
              Cost:{price} Taka
            </Card.Text>
            <Button variant="outline-warning" onClick={handleBtnClick}>book our {name.toLowerCase()} service</Button>{' '}
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Service;