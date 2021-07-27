import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => {
    
    const handleLogin = (e) => {
      e.preventDefault();
      console.log({
            email: e.target.email.value,
            password: e.target.password.value
    })
    }

    return (
        <div>
            <Form onSubmit={handleLogin}>
                <h1>Login Page</h1> <br/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" name="email" placeholder="Enter email" />
                
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" name="password" placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </div>
    );
};

export default LoginPage;