import { Button, Form, Input, Typography } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
/**
 *
 *
 * @return {*} 
 */
export const FirstBlock = ({ }) => {
    const [couponWrapper, setCouponWrapper] = useState(false)
    const [coupon, setCoupon] = useState("");
    return (
        <div></div>
    )
    // return (
    //     <Container>
    //         <Coupon>
    //             <div>
    //                 <Text type="secondary" underline onClick={() => setCouponWrapper(!couponWrapper)}>
    //                     Aplicar cupón
    //                 </Text>

    //             </div>
    //             {
    //                 couponWrapper &&
    //                 <CouponContainer>
    //                     <Form.Item
    //                         label="Cupón"
    //                         style={{width: '100%', maxWidth: '200px'}}
    //                         name="coupon"
    //                         rules={[{ required: true, message: 'Por favor ingrese un cupón' }]}
    //                     >
    //                         <Input onChange={value => setCoupon(value)} />
    //                     </Form.Item>
    //                     <FormItem>
    //                         <Button disabled={!coupon}>
    //                             Aplicar
    //                         </Button>
    //                     </FormItem>
    //                 </CouponContainer>
    //             }

    //         </Coupon>
    //     </Container>
    // )
}
const Container = styled.div`
 max-width: 300px;
    width: 100%;
`
const Text = styled(Typography.Text)`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
    cursor: pointer;
   
`
const Coupon = styled.div`
    padding-top: 1em;
   display: grid;
   
    gap: 1em;
`
const CouponContainer = styled.div`
    display: grid;
    grid-template-columns: max-content min-content;
    gap: 1em;
    align-items: bottom;
    
`
const FormItem = styled(Form.Item)` 
   display: flex;
   align-items: end;
    
  
`