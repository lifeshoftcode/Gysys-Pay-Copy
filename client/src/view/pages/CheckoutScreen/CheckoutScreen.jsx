import React from 'react'
import { AppHeader } from '../../components/common/Header/AppHeader'
import { GoBackWrapper } from './components/GoBackWrapper/GoBackWrapper'
import styled from 'styled-components'
import { BillingSection } from './components/BillingSection/BillingSection'
import OrderSummary from './components/OrderSummary/OrderSUmmary'
import { useNavigate } from 'react-router-dom'


export const CheckoutScreen = () => {
    const navigate = useNavigate();
    const goBack = () => {
        // Intenta ir hacia atrás y captura si no es posible
        try {
          navigate(-1);
        } catch (error) {
          // Si no hay historial, redirige a la página de inicio o a otra ruta por defecto
          navigate('/cart/view/20', { replace: true });
        }
      };
    return (
        <Container>
            <AppHeader />
            <Body>
                <GoBackWrapper onClick={goBack} />
                <Group>
                    <BillingSection />
                    <OrderSummary />
                </Group>
            </Body>

        </Container>
    )
}
const Container = styled.div` 
background-color: #f1f1f1;
`
const Body = styled.div`
    max-width: 1236px;
    width: 100%;
    margin: 0 auto;  
    padding-top: 1em;
    display: grid;
    gap: 1em;
`
const Group = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(200px, 1fr);
    gap: 1em;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`