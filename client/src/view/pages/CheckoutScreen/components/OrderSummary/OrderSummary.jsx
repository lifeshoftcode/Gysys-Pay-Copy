import React from 'react';
import { Card, Form, Input, Typography, Button } from 'antd';
import styled from 'styled-components';
import ProductInfo from './components/ProductInfo/ProductInfo';
import { selectOrderPreview } from '../../../../../features/orders/orderPreviewSlice/orderPreviewSlice';
import { useSelector } from 'react-redux';
import { EditOutlined } from '@ant-design/icons';
import { selectOrderCustomer } from '../../../../../features/orders/orderPreviewSlice/orderCustomerSlice';
import { CustomerInfo } from './components/CustomerInfo/CustomerInfo';
import { AddressInfo } from './components/AddressInfo/AddressInfo';
const { Title } = Typography;

const OrderSummary = () => {
    const [form] = Form.useForm();
    const order = useSelector(selectOrderPreview);
    const {customer} = useSelector(selectOrderCustomer);
    const {address} = useSelector(selectOrderCustomer);
   // prompt('order', customer)
    return (
        <Container>
            <ProductInfo order={order} />
            <CustomerInfo customer={customer} />
            <AddressInfo address={address}/>
           
        </Container >
    );
};

export default OrderSummary;

const Container = styled.div`
    display: grid;
    gap: 1em;
    margin-bottom: 24px;
    `;

export const Text = styled(Typography.Text)`
   white-space: nowrap;

    `;

export const Row = styled.div`
    display: grid;
  
    grid-template-columns: 0.4fr 1fr;
    `