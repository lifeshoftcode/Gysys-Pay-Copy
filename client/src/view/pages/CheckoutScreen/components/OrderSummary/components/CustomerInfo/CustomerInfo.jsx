import { Button, Card } from 'antd'
import React from 'react'
import { EditOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import styled from 'styled-components';



export const CustomerInfo = ({customer}) => {
    return (
        <Card
            title="Información de contacto"
            extra={
                <Button icon={<EditOutlined />}>Editar</Button>
            }
        >
           
            <Row>
                <Text strong>Nombre:</Text>
                <Text >{customer?.firstName}</Text>
            </Row>
            <Row>
                <Text strong>Apellido:</Text>
                <Text>{customer?.lastName}</Text>
            </Row>
            <Row>
                <Text strong>Email:</Text>
                <Text>{customer?.email}</Text>
            </Row>
            <Row>
                <Text strong>Teléfono:</Text>
                <Text>{customer?.phoneNumber}</Text>
            </Row>
            <Row>

                <Text strong>Empresa:</Text>
                <Text>value</Text>
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