import React from 'react'
import TableCliente from '../Componet/TableCliente'
import { useNavigate } from 'react-router-dom'
import { LOGIN } from '../Router/RouteApp'

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada");
    navigate(LOGIN);
  };

  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
        <TableCliente />
    </div>
  )
}

export default HomePage