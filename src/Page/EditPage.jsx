import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { HOME } from "../Router/RouteApp";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cliente, setCliente] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/clientes/${id}`);
        setCliente(response.data);
      } catch (error) {
        console.error("Error fetching cliente:", error);
      }
    };
    fetchCliente();
  }, [id]);

  const handleChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/clientes/${id}`, cliente);
      alert("Cliente actualizado");
      navigate(HOME);
    } catch (error) {
      console.error("Error updating cliente:", error);
    }
  };

  return (
    <div>
      <h2>Editar Cliente</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={cliente.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={cliente.email}
            onChange={handleChange}
          />
        </Form.Group>

        <button type="submit">Actualizar</button>
      </Form>
    </div>
  );
};

export default EditPage;