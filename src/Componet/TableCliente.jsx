import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NEWCLIENTE } from "../Router/RouteApp";

const TableCliente = () => {
  const [clientes, setClientes] = useState([]);

  const GetClientes = async () => {
    try {
      const response = await axios.get("http://localhost:3001/clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    GetClientes();
  }, []);

  const HandleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`http://localhost:3001/clientes/${id}`);
      GetClientes();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };


  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map(({ name, email, id }, idx) => (
          <tr key={idx}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
              <Button variant="primary" onClick={() => alert(`Edit ${name}`)}>
                Editar
              </Button>
              <Button variant="danger" onClick={() => HandleDelete(id)}>
                Eliminar
              </Button>
              <Button variant="success" onClick={() => alert(`View ${name}`)}>
                Ver
              </Button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Link to={NEWCLIENTE}>
    <Button variant="primary" onClick={() => alert("Crear nuevo cliente")}>
      Crear nuevo cliente
    </Button>
    </Link>
    </>
  );
};

export default TableCliente;
