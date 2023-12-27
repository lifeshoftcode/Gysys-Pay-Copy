import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Radio, Card } from 'antd';
import { CreditCardInputFields } from './PaymentFormFields/CreditCardInputFields';
import { PaypalInputFields } from './PaymentFormFields/PaypalInputFields';

const PaymentForm = () => {
    const [form] = Form.useForm();
    const [paymentMethodOption, setPaymentMethodOption] = useState('creditCard');
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [isCreditCard, setIsCreditCard] = useState(false);
    const [isPaypal, setIsPaypal] = useState(false);

    const handleSubmit = (values) => {
        console.log('Información de pago recibida:', values);
    };

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            const response = await fetch("http://localhost:5000/api/v1/payment-method",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            const paymentMethodsData = await response.json();
            const paymentMethods = paymentMethodsData.map((paymentMethod) => ({
                label: paymentMethod.name,
                value: paymentMethod.id,
                disabled: !paymentMethod.active,
            }));

            const paymentMethodsFinal = [
                {
                    label: 'Tarjeta de Crédito',
                    value: 'creditCard',
                },
                ...paymentMethods,
            ]

            setPaymentMethods(paymentMethodsFinal);
            const creditCardMethod = paymentMethodsFinal.find(method => method.label === 'Tarjeta de Crédito');
            if (creditCardMethod) {
                setPaymentMethodOption(creditCardMethod.value);
                form.setFieldsValue({ paymentMethod: creditCardMethod.value });
            }
        };
        fetchPaymentMethods();
    }, []);

    const handlePaymentMethodChange = (method) => {
        setIsCreditCard(method === 'creditCard');
        setIsPaypal(method === 'paypal');
        // actualiza otros estados aquí
    };

    return (
        <Card title="Cargo de Hoy 610.00 USD" extra="Próximo pago: 610.00 USD + impuestos">
            <Form form={form} layout="vertical" onFinish={handleSubmit} >
                <Form.Item name="paymentMethod" label="Método de Pago">
                    <Radio.Group
                        options={paymentMethods}
                        value={paymentMethodOption}
                        onChange={(e) => {
                            setPaymentMethodOption(e.target.value);
                            form.setFieldsValue({ paymentMethod: e.target.value });
                            handlePaymentMethodChange(e.target.value);
                        }
                        }
                        optionType="button"
                        buttonStyle="solid"
                    />
                </Form.Item>
                {isCreditCard && <CreditCardInputFields />}
                {isPaypal && <PaypalInputFields />}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Confirmar Pedido
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default PaymentForm;
