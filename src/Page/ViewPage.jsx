import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { HOME } from "../Router/RouteApp";

const ViewPage = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const navigate = useNavigate();

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

  return (
    <div>
      {!cliente ? (
        <div>Loading...</div>
      ) : (
        <>
          <h2>Detalle del Cliente</h2>
          <p><strong>Nombre:</strong> {cliente.name}</p>
          <p><strong>Email:</strong> {cliente.email}</p>

          <button onClick={() => navigate(HOME)}>Volver a Home</button>
        </>
      )}
    </div>
  );
};

export default ViewPage;