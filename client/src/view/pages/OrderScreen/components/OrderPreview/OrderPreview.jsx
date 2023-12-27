import React, { useEffect, useState } from 'react'
import { AppHeader } from '../../../../components/common/Header/AppHeader'
import { OrderTitleCurrency } from './components/OrderTitleCurrency/OrderTitleCurrency'
import styled from 'styled-components'
import OrderSummary from './components/OrderSummary/OrderSummary'
import { useSelector } from 'react-redux'
import { selectOrderPreview } from '../../../../../features/orders/orderPreviewSlice/orderPreviewSlice'
import { CartOverview } from './components/Payment/CartOverview'

export const OrderPreview = () => {
  const [message, setMessage] = useState('Loading...');
  const orderPreview = useSelector(selectOrderPreview);

  return (
    <Container>
      
      <OrderTitleCurrency />
      
      <OrderSummary order={orderPreview} />
      <CartOverview order={orderPreview} />
    </Container>
  )
}

const Container = styled.div`
      max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`