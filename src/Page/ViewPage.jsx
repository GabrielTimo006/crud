import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewPage = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);

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

  if (!cliente) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Detalle del Cliente</h2>
      <p><strong>Nombre:</strong> {cliente.name}</p>
      <p><strong>Email:</strong> {cliente.email}</p>
    </div>
  );
};

export default ViewPage;