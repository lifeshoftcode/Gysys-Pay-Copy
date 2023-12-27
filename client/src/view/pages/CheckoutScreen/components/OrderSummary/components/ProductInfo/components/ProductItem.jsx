import { Button, Card, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components';
import { EditOutlined } from '@ant-design/icons';
import { formatValue } from '../../../../../../../../Utils/formatValue';
const { Title, Link } = Typography;

export const ProductItem = ({ cartItem }) => {
    cartItem = cartItem || []
    const product = cartItem.map((product) => `
    ${product.name} 
    ${product.subscriptionPeriod} subscription
    ${formatValue(product.price * product.quantity, "money")}
    `)
    const productsDescription = product.join(', ')
    const total = cartItem.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
      }, 0);
    return (
        <Card
            title="Resumen del Pedido"
            extra={
                <Button icon={<EditOutlined />}>Editar</Button>
            }
        >
            <Title
                level={5}
                style={{
                    margin: 0,
                }}
            >
                {productsDescription}
            </Title>
            <Text
                align="right"
             >
                {
                    cartItem.length > 1 &&
                    formatValue(total, "money")
                }
            </Text>
        </Card>
    )
}
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr min-content;
    justify-content: space-between;
    border: 1px solid #e8e8e8;
    gap: 2em;
    padding: 1em 2.4em;
`
const Text = styled(Typography.Text)`
    font-size: 1em;
    margin-top: 0.6em;
    white-space: nowrap;
    display: block;
`