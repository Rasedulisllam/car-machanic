import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link ,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {GoogleSignIn,setUser,setErr,setIsLoading}=useAuth()
    const history=useHistory()
    const location =useLocation();
    // console.log(location?.state?.from.pathname)
    const Redirect_url=location?.state?.from?.pathname || '/';

    const handleGoogleSignIn=()=>{
        setIsLoading(true)
        GoogleSignIn()
            .then(result =>{
                setUser(result.user)
                history.push(Redirect_url)
            })
            .catch(err =>{
                setErr(err.message)
            })
            .finally(()=> setIsLoading(false))

    }


    return (
        <div className=' from'>
            <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    login
                </Button>
            </Form>

            <div className='text-center'>
                <h2>Or</h2>
                <p><Link>Create new acount?</Link></p>
                <Button variant='warning' onClick={handleGoogleSignIn}>continue with Google</Button>
            </div>
        </div>
    );
};

export default Login;