import React from 'react'
import styled from 'styled-components'
import { Form, Select, Typography } from 'antd'
import currencies from '../../../../../../../constants/currencies.json'
const { Title } = Typography;
export const OrderTitleCurrency = () => {
    console.log(currencies);
    return (
        <Container>
            <Title
                style={{margin: 0,}}
            >
                Pedido
            </Title>
            {/* <Form.Item 
            name="currency" 
            label="Currency" 
           
         
            >
                <Select
                    placeholder="Currency: "
                    style={{ width: 200 }}
                    defaultValue={"DOP"}
                    allowClear
                >
                    {currencies.currencies.map((currency) => {
                        return <Option value={currency.value}>{currency.label}</Option>
                    })}
                </Select>
            </Form.Item> */}
        </Container>
    )
}
const Container = styled.div`

    display: grid;
    grid-template-columns: auto min-content;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    /* margin: 0 auto;
    max-width: 1040px; */
    padding: 3em 0 1em;
   
`