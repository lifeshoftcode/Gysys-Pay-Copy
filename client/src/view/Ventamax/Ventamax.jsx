import React, { useState } from 'react'
import axios from 'axios';
import orderData from './prueba.json';

export const Ventamax = () => {
  const [response, setResponse] = useState(null);
  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/v1/orders/', orderData);
      console.log(res.data);
      setResponse(res.data);
    } catch (error) {
      console.error('Error al enviar el pedido:', error);
    }
  };
  return (
    <div>
      <button onClick={handleSubmit}>Enviar Pedido</button>
      {response && <div>
        <p>Pedido enviado con éxito. ID: {response.orderId}</p>
        <a href={response.orderURL}>Ver Pedido</a>
      </div>}
      {
        response && response.error && <p>Error al enviar el pedido: {response.error}</p>
      }
    </div>
  )
}
