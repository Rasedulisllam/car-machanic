import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
    const {user,isLoading}=useAuth()
    if(isLoading){
        return (
            <Spinner animation="border" role="status" style={{marginTop:'5rem'}}>
                    <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <Route
            {...rest}
            render={({location})=>
                user?.email?children:(
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                )
            }
        >
            
        </Route>
    );
};

export default PrivateRoute;