import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const UpdateService = () => {
    const {id}=useParams();
    const [service,setService]=useState({});
    const history=useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();

    // load service for update
    useEffect(()=>{
        const url=`https://morning-journey-62915.herokuapp.com/services/${id}`
        axios.get(url)
            .then(res=>{
                setService(res.data)
            })
    },[])
    
    // update service data 
    const onSubmit = data => {
        const url=`https://morning-journey-62915.herokuapp.com/services/${id}`;
        const isUpdate=window.confirm('Are you sure UPDATE this service!')
        if(isUpdate){
            axios.put(url,data)
            .then(data =>{
                if(data.data.modifiedCount>0){
                    alert('Service modified successfully')
                    history.push('/')
                }
            })
        }
    };

    return (
        <div className='my-5'>
            <h1>Update service Data</h1>
            <div className="w-50 mx-auto my-5 text-start">
                 <form  onSubmit={handleSubmit(onSubmit)}>
                   <div className='my-3'>
                        <Form.Control type="text" defaultValue={service.name}  className="w-100"{...register("name",{required:'Name is required'})} />
                        {errors.name && <small className='text-danger'>{errors.name.message}</small>}
                   </div>
                   <div className='my-3'>
                        <Form.Control type="text" defaultValue={service.price} className="w-100"{...register("price",{required:'price is required', pattern:{ 
                                value: /^[0-9]*$/, 
                                message: "You must enter number value" 
                            } })} />
                        {errors.price && <small className='text-danger'>{errors.price.message}</small>}
                   </div>
                   <div className='my-3'>
                        <Form.Control type="text" defaultValue={service.image} className="w-100"{...register("image",{required:'image is required' })} />
                        {errors.image && <small className='text-danger'>{errors.image.message}</small>}
                   </div>
                   <div className='my-3'>
                        <Form.Control type="text" defaultValue={service.time} className="w-100"{...register("time",{required:'time is required',  pattern:{ 
                                value: /^[0-9]*$/i, 
                                message: "You must enter number value" 
                            },
                            })} />
                        {errors.time && <small className='text-danger'>{errors.time.message}</small>}
                   </div>
                   <div className='my-3'>
                        <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        defaultValue={service.details} className="w-100"{...register("details",{required:'details is required'})} />
                        {errors.details && <small className='text-danger'>{errors.details.message}</small>}
                   </div>
                    
                    <Button type="submit" variant='outline-warning'>Update</Button>
                </form>
            </div>
        </div>
    );
};

export default UpdateService;