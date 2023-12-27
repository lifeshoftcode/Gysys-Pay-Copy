import React from 'react'
import { FirstBlock } from './components/FirstBlock'
import { SecondBlock } from './components/SecondBlock'
import styled from 'styled-components'

export const CartOverview = ({order}) => {
    return (
        <Container>
            <FirstBlock order={order} />
            <SecondBlock order={order} />
        </Container>
    )
}
const Container = styled.div`
    padding: 1rem;
    min-height: 10em;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
`
