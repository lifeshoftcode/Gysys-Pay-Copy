import styled from 'styled-components'
import ProductItem  from './components/ProductItem'

export default function OrderSummary ({order}) {
    return (
        <Container>
            {
                order.cartItem.map((product) => {
                    return <ProductItem productData={product} />
                })
            }
            {
                order.cartItem.leg
            }
        </Container>
    )
}

const Container = styled.div`
    max-width: 1040px;
    align-items: flex-start;
    width: 100%;
    min-height: 10em;
    margin: 0 auto;
    display: grid;
    gap: 1em;
`