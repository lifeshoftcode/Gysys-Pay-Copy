import React from 'react'
import { Form, Input, Typography } from 'antd'
export const CreditCardInputFields = () => {
    return (
        <div>
            <Form.Item name="cardNumber" label="Número de Tarjeta" rules={[{ required: true }]}>
                <Input placeholder="1234 1234 1234 1234" />
            </Form.Item>

            <Form.Item name="expiryDate" label="Fecha de Expiración" rules={[{ required: true }]}>
                <Input placeholder="MM/AA" />
            </Form.Item>

            <Form.Item name="cvv" label="CVV/CVC" rules={[{ required: true }]}>
                <Input placeholder="123" />
            </Form.Item>
        </div>
    )
}
