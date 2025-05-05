import React from 'react'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { HOME } from '../Router/RouteApp'


const NewClient = () => {

    const [newcliente, setNewcliente] = useState({
        name: '',
        email: ''
    })

    const [namecliente, setnameCliente] = useState("")
    const [emailcliente, setemailCliente] = useState("")
    const navigatore = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const newCliente = {
            name: namecliente,
            email: emailcliente
        }
        setNewcliente(newCliente)
        try {
            axios.post("http://localhost:3001/clientes", newCliente)
            newcliente.name = ""
            newcliente.email = ""
            alert("Cliente creado")
            navigatore(HOME)
        } catch (error) {
            console.error("Error creating user:", error);
        }

    }

  return (
    <div>
        NewClient
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre Cliente</Form.Label>
                <Form.Control type="text" placeholder="Nombre" onChange={(e)=>{setnameCliente(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e)=> setemailCliente(e.target.value)} />
            </Form.Group>
            <button type='submit'>Crear</button>
        </Form>
        
        </div>
  )
}

export default NewClient