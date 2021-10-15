import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expart from '../Expart/Expart';

const Exparts = () => {
    const [exparts ,setExparts]=useState([])
    useEffect(()=>{
        fetch('./exparts.json')
            .then(res => res.json())
            .then(data => setExparts(data))
    },[])
    return (
        <Container className="my-5" id="exparts">
            <h1 className="text-uppercase my-4 text-warning">Our Exparts</h1>

            <Row xs={1} md={2} className="g-4">
                {
                    exparts.map(expart => <Expart expart={expart} key={expart.key}></Expart>)
                }
            </Row>
        </Container>
    );
};

export default Exparts;


// const exparts=[
//     {
//         key:1,
//         name:'John cena',
//         expartOf:'Oil Change',
//         age:29,
//         img:'https://i.ibb.co/txdnMJ3/mechanic-1.jpg',
//     },
//     {
//         key:2,
//         name:'Tom cruise',
//         expartOf:'Brake',
//         age:40,
//         img:'https://i.ibb.co/2Mp7p0x/mechanic-2.jpg',
//     },
//     {
//         key:3,
//         name:'Tom hanks',
//         expartOf:'Engin',
//         age:50,
//         img: 'https://i.ibb.co/RvyGzbT/mechanic-3.jpg',
//     },
//     {
//         key:4,
//         name:'Carli caplin',
//         expartOf:'paint',
//         age:35,
//         img:'https://i.ibb.co/0Jw066h/mechanic-4.jpg',
//     },
//     {
//         key:1,
//         name:'kevin de',
//         expartOf:'Tire',
//         age:43,
//         img:'https://i.ibb.co/dL7B6H6/mechanic-5.jpg',
//     },
// ]


// https://i.ibb.co/txdnMJ3/mechanic-1.jpg
// https://i.ibb.co/2Mp7p0x/mechanic-2.jpg
// https://i.ibb.co/RvyGzbT/mechanic-3.jpg
// https://i.ibb.co/0Jw066h/mechanic-4.jpg
// https://i.ibb.co/dL7B6H6/mechanic-5.jpg