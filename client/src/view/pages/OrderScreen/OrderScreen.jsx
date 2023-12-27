import React, { useEffect, useState } from 'react'
import { OrderPreview } from './components/OrderPreview/OrderPreview'
import styled from 'styled-components'
import { AppHeader } from '../../components/common/Header/AppHeader'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setOrderDetails } from '../../../features/orders/orderPreviewSlice/orderPreviewSlice'
import { setCustomer, setCustomerAddress } from '../../../features/orders/orderPreviewSlice/orderCustomerSlice'

export const OrderScreen = () => {
  const [currentSection, setCurrentSection] = useState('orderPreview')
  const [order, setOrder] = useState(null);
  // const [orderDetails, setOrderDetails] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/v1/orders/${id}`); // Modificar según la URL de tu API
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error('Error al cargar los detalles del pedido:', error);
      }
    };
    fetchOrderDetails();
  }, [id])

  useEffect(() => {
    if (order?.OrderDetails) {
      dispatch(setOrderDetails(order.OrderDetails))
    }
    if (order?.Customer) {
      const { firstName, lastName, email, phoneNumber } = order.Customer;
      const customer = { firstName, lastName, email, phoneNumber };
      dispatch(setCustomer(customer));
      if (order?.Customer?.Address) {
        const { address, city, country, street, postalCode } = order.Customer.Address;
        const addressData = { address, city, country, postalCode, street };
        dispatch(setCustomerAddress(addressData));
      }
    }
  }, [order])
  return (
    <Container>
      <AppHeader />
   
      {currentSection === 'orderPreview' && <OrderPreview />}
      {/* {currentSection === 'orderSummary' && <OrderSummary />} */}
      {/* {currentSection === 'orderConfirmation' && <OrderConfirmation />} */}
    </Container>
  )
}
const Container = styled.div`

`