import styled from "styled-components";
import { ProductItem } from "./components/ProductItem";

const ProductInfo = ({ order }) => {
        
    return (
        <Container>
            <Products>
                {/* {JSON.stringify(order)} */}
                {
                   
                       <ProductItem cartItem={order.cartItem} />
                  
                }
            </Products>
        </Container>
    );
}

export default ProductInfo;

const Container = styled.div``

const Products = styled.div`

`