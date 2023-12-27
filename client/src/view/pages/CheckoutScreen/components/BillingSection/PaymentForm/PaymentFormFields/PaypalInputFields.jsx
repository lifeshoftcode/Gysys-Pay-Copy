import React from 'react'
import { Typography } from 'antd'
const { Text } = Typography;
export const PaypalInputFields = () => {
    return (
        <div>
            <Text>
                Para pagar con Paypal, haz click en el botón de abajo y serás redirigido a la página de Paypal para completar tu pago.
            </Text>
            <Form.Item name="cardNumber" label="Número de Tarjeta" rules={[{ required: true }]}>
                <Input placeholder="1234 1234 1234 1234" />
            </Form.Item>

          
        </div>
    )
}
