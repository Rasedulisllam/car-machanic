import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const EditableService = (props) => {
    const history=useHistory()
    const {name,image,_id}=props.service
    const handleDelete= props.handleDelete;

    // handle update
    const handleUpdate=()=>{
        history.push(`/updateService/${_id}`)
    }
    
    return (
        <div className='d-flex justify-content-between bg-secondary align-items-center p-3 rounded my-4 '>
            <div className='d-flex align-items-center' >
                <img className='img-fluid me-3' width='120px' src={image} alt="service img" />
                <h3 className='text-white'>{name}</h3>
            </div>
            <div>
                    <Button onClick={handleUpdate} variant='outline-warning'>Update</Button>
                    <Button 
                    className='ms-3'
                    variant='outline-danger'
                    onClick={()=>handleDelete(_id)}
                    >Delete</Button>
            </div>
        </div>
    );
};

export default EditableService;