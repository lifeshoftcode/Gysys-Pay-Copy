import { Button, InputNumber, message } from "antd";
import { useEffect } from "react";
import styled from "styled-components";

export default function Counter({ quantity, setQuantity, negativeAllowed = true }) {
    const [messageApi, contextHolder] = message.useMessage();
    const handleDecrease = () => {
        if (negativeAllowed || quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'La cantidad mínima es 1',
        });
    };




    return (
        <Container>
            {contextHolder}
            <Button
                disabled={!negativeAllowed && quantity == 1}
                onClick={handleDecrease}
            >
                -
            </Button>
            <InputNumber
                min={negativeAllowed ? undefined : 0}
                value={quantity}
                onBlur={() => {
                    if (quantity < 1) {
                        setQuantity(1);
                        warning();
                    }
                } }
                onChange={value => (setQuantity(value))}
            />
            <Button onClick={handleIncrease}>
                +
            </Button>
        </Container>
    )
}

const Container = styled.div`
    max-width: 200px;
    display: flex;
    align-items: center;
    gap: 0.6em;
`;
