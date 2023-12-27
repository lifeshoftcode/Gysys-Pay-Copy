import styled from "styled-components";
import Counter from "./Counter";
import { useState } from "react";
import { setProductQuantity } from "../../../../../../../../features/orders/orderPreviewSlice/orderPreviewSlice";
import { useDispatch } from "react-redux";
import { formatValue } from "../../../../../../../../Utils/formatValue";
import { Typography } from "antd";
const { Text } = Typography;
export default function ProductItem({ productData }) {
    const dispatch = useDispatch();
    const handleQuantityChange = (quantity) => {
        dispatch(setProductQuantity({ id: productData.id, quantity }));
    };

    if (productData) {
        return (
            <Container>
                <ProductInfo>
                    <div>
                        <Typography.Title level={4}
                            style={{ margin: "0", lineHeight: "1.2" }}
                        >
                            {productData?.name || "Nombre del Producto"}
                        </Typography.Title>

                        <Typography.Text type="secondary">
                            {productData?.subscriptionPeriod || "Duración la Suscripción"}
                        </Typography.Text>
                        <div>

                        </div>
                    </div>
                    <div>
                        <Typography.Text
                            style={{ fontSize: "1em", marginTop: "0.6em", display: "block" }}  >
                            {formatValue(productData.price, "money")}
                        </Typography.Text>
                    </div>
                </ProductInfo>
                <PriceWrapper>
                    <Counter
                        quantity={productData.quantity}
                        setQuantity={handleQuantityChange}
                        negativeAllowed={false}
                    />
                    <Typography.Text
                        style={{ fontSize: "1em", marginTop: "0.6em", display: "block" }} >
                        {formatValue(productData.price * productData.quantity, "money")}
                    </Typography.Text>
                </PriceWrapper>
            </Container>
        );
    }

}
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    justify-content: space-between;
    border: 1px solid #e8e8e8;
    background-color: rgb(251,251,252);
    gap: 2em;
    
    padding: 1em 2.4em;
    border-radius: 0.4em;

   
   

`
const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-right: 1px solid #e8e8e8;
    padding-right: 1em;
    
`
const PriceWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    gap: 1em;
    width: 100%;
`
const PriceTotal = styled.div``
