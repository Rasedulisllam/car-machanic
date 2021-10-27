import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const url='https://morning-journey-62915.herokuapp.com/addService';
        axios.post(url,data)
            .then(data =>{
                if(data.data.insertedId){
                    alert('Service added successfully')
                    reset();
                }
            })
    };

    return (
        <div className='my-5'>
            <h1>Add a new service</h1>
            <div className="w-50 mx-auto my-5 text-start">
                 <form  onSubmit={handleSubmit(onSubmit)}>
                   <div className='my-3'>
                        <Form.Control type="text" placeholder="Service name" className="w-100"{...register("name",{required:'Name is required'})} />
                        {errors.name && <small className='text-danger'>{errors.name.message}</small>}
                   </div>
                   <div className='my-3'>
                        <Form.Control type="text" placeholder="Price" className="w-100"{...register("price",{required:'price is required', pattern:{ 
                                value: /^[0-9]*$/, 
                                message: "You must enter number value" 
                            } })} />
                        {errors.price && <small className='text-danger'>{errors.price.message}</small>}
                   </div>
                   <div className='my-3'>
                        <Form.Control type="text" placeholder="Service image" className="w-100"{...register("image",{required:'image is required' })} />
                        {errors.image && <small className='text-danger'>{errors.image.message}</small>}
                   </div>
                   <div className='my-3'>
                        <Form.Control type="text" placeholder="Requir Time" className="w-100"{...register("time",{required:'time is required',  pattern:{ 
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
                          placeholder="Service details" className="w-100"{...register("details",{required:'details is required'})} />
                        {errors.details && <small className='text-danger'>{errors.details.message}</small>}
                   </div>
                    
                    <Button type="submit" variant='outline-info'>Add service</Button>
                </form>
            </div>
        </div>
    );
};

export default AddService;