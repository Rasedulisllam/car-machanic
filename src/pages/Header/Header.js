import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user,Logout}=useAuth();
    const handleLogOut=()=>{
        Logout()
    }
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="md">
                <Container>
                <Navbar.Brand href="#home">Car-Machanic</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#exparts">Exparts</Nav.Link>
                    {
                         user?.email?<Button variant="light" onClick={handleLogOut}>Logout</Button>: <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                    }
                                  
                    <Navbar.Text>
                        Welcome <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;