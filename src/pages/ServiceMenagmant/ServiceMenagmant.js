import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container} from 'react-bootstrap';
import EditableService from '../EditableService/EditableService';

const ServiceMenagmant = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://morning-journey-62915.herokuapp.com/services')
            .then(res=> res.json())
            .then(data => setServices(data))
    },[])
    
    // handle delete
    const handleDelete=(id)=>{
        const isDelete=window.confirm('Are you sure, delete this service')
        const url=`https://morning-journey-62915.herokuapp.com/services/${id}`

        if(isDelete){
            axios.delete(url)
            .then(res =>{
                if(res.data.deletedCount>0){
                    alert('successfully delete')
                    const restServices=services.filter(service=> service._id !==id);
                    setServices(restServices);
                }
            })
        }
    }

    return (
       <Container className="my-5" id="services">
            <h1 className="text-uppercase my-5 pt-4 text-warning">Our services</h1>
            <div className='w-50 mx-auto'>
                {
                    services.map(service => <EditableService
                          service={service}
                          key={service._id}
                          handleDelete={handleDelete}
                          ></EditableService>)
                }
            </div>
        </Container>
    );
};

export default ServiceMenagmant;