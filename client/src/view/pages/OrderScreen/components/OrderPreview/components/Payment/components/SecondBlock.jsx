import React from 'react'
import styled from 'styled-components'
import { formatValue } from '../../../../../../../../Utils/formatValue'
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
/**
 *
 *
 * @param {*} { order }
 * @return {*} 
 */
export const SecondBlock = ({ order }) => {

  console.log(order)
  return (
    <Container>
      <TotalWrapper>
        <TotalTitle>Total: </TotalTitle>
        <TotalPrice>{formatValue(order?.total?.totalAmount, "money") || 0}</TotalPrice>
      </TotalWrapper>
      <NextPayment>
        <NextPaymentPrice>Próximo pago: {formatValue(order?.total?.nextPayment, "money") || 0}</NextPaymentPrice>
        <NextPaymentDescription>
          Tu suscripción se renovará automáticamente
        </NextPaymentDescription>
      </NextPayment>
      <CheckoutWrapper>
        {/* <Button size='large' >
          Transferencia bancaria
        </Button> */}
        <Link to={"/order/checkout/203094568"}>
          <Button size='large' type='primary' >
            Continuar
          </Button>
        </Link>
      </CheckoutWrapper>
      <CheckoutWrapper>
        <Typography.Text
          type='secondary'
          align='right'
        >
          Al hacer clic en 'Pagar' confirmas que estás de acuerdo con nuestra Política de privacidad y el Acuerdo de licencia.
          {/* Al hacer clic en 'Transferencia bancaria' o 'Pagar' confirmas que estás de acuerdo con nuestra Política de privacidad y el Acuerdo de licencia. */}
        </Typography.Text>
      </CheckoutWrapper>

    </Container>
  )
}
const Container = styled.div`
  display: grid;
  gap: 1em;
`
const TotalWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
`
const TotalTitle = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
`
const TotalPrice = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    text-align: right;
`
const NextPayment = styled.div`
`
const NextPaymentPrice = styled.div`
    font-size: 1rem;
    font-weight: 500;
    text-align: right;
`
const NextPaymentDescription = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    text-align: right;
    color: #8c8c8c;
`

const CheckoutWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1em;
`