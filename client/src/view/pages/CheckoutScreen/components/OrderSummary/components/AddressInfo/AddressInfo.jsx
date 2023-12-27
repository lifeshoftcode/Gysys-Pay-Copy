import { Button, Card } from 'antd'
import React from 'react'
import { EditOutlined } from '@ant-design/icons';

import { Typography } from 'antd';
import styled from 'styled-components';


export const AddressInfo = ({address}) => {
  return (
    <Card
    title="Información de pago"
    extra={
        <Button icon={<EditOutlined />}>Editar</Button>
    }
>
    <Row>
        <Text strong>País </Text>
        <Text>{address?.country}</Text>
    </Row>
    <Row>
        <Text strong>Ciudad:</Text>
        <Text>{address?.city}</Text>
    </Row>
    <Row>
        <Text strong>Dirección</Text>
        <Text>{address?.street}</Text>
    </Row>
    <Row>
        <Text strong>Código Zip:</Text>
        <Text>{address?.postalCode}</Text>
    </Row>

</Card>
  )
}
export const Text = styled(Typography.Text)`
   white-space: nowrap;

    `;

export const Row = styled.div`
    display: grid;
  
    grid-template-columns: 0.4fr 1fr;
    `