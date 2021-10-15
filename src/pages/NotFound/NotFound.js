import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" style={{maxWidth:'50%', marginTop:'5rem'}} src="https://i.ibb.co/b2f51hM/not-found.jpg" alt="not-found-img" />
            <br/>
            <Link to='/home'>
                <Button className="my-5" variant='warning'>Go Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;