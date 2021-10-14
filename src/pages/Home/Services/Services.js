import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./services.json')
            .then(res=> res.json())
            .then(data => setServices(data))
    },[])
    return (
        <Container className="my-5">
            <h1 className="text-upparcase my-5">Our services</h1>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;

// https://i.ibb.co/tcj3f2n/6.jpg
// https://i.ibb.co/Trjvshx/1.jpg
// https://i.ibb.co/RDRWxfT/2.jpg
// https://i.ibb.co/vmDpRf8/3.jpg
// https://i.ibb.co/q9Rd55M/4.jpg
// https://i.ibb.co/vdkrStq/5.jpg

// const service=[
//     {
//         id:1,
//         name:'Engin Repair',
//         img:'https://i.ibb.co/Trjvshx/1.jpg',
//         details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit temporibus ea beatae exercitationem possimus ab voluptatum distinctio, eum, officia autem quibusdam',
//         price:7000,
//         time:3,
//     },
//     {
//         id:2,
//         name:'Tire Repair',
//         img:'https://i.ibb.co/RDRWxfT/2.jpg',
//         details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit temporibus ea beatae exercitationem possimus ab voluptatum distinctio, eum, officia autem quibusdam',
//         price:3000,
//         time:2,
//     },
//     {
//         id:3,
//         name:'Engin oil change',
//         img:'https://i.ibb.co/vmDpRf8/3.jpg',
//         details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit temporibus ea beatae exercitationem possimus ab voluptatum distinctio, eum, officia autem quibusdam',
//         price:2000,
//         time:1,
//     },
//     {
//         id:4,
//         name:'Brake Repair',
//         img:'https://i.ibb.co/q9Rd55M/4.jpg',
//         details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit temporibus ea beatae exercitationem possimus ab voluptatum distinctio, eum, officia autem quibusdam',
//         price:6000,
//         time:2,
//     },
//     {
//         id:5,
//         name:'Car body paint',
//         img:'https://i.ibb.co/vdkrStq/5.jpg',
//         details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit temporibus ea beatae exercitationem possimus ab voluptatum distinctio, eum, officia autem quibusdam',
//         price:8000,
//         time:24,
//     },
//     {
//         id:6,
//         name:'Battery Repair',
//         img:'https://i.ibb.co/vdkrStq/5.jpg',
//         details:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit temporibus ea beatae exercitationem possimus ab voluptatum distinctio, eum, officia autem quibusdam',
//         price:4000,
//         time:2,
//     },
// ]