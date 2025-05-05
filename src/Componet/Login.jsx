import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom'
import {HOME} from '../Router/RouteApp'


const Login = () => {

    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3001/users");
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }
        useEffect(() => {
            getUsers();
        }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login successful!");
            navigate(HOME); 
        } else {
            alert("Invalid email or password.");
        }
    }

  return (
    <div>Login
    <Form onSubmit={handleSubmit}>
    
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange={(e) => {setPassword(e.target.value)}} />
        </Form.Group>
        <button type='submit'>ingresar</button>
    </Form>
    </div>
  )
}

export default Login