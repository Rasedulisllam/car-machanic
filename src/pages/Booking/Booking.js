import React from 'react';
import { useParams } from 'react-router';

const Booking = () => { 
    const {serviceId}=useParams();
    return (
        <div className="my-5">
            <h1>this is booking {serviceId}</h1>
        </div>
    );
};

export default Booking;
