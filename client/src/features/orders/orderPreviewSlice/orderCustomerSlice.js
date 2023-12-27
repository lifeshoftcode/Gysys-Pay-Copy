import { createSlice } from '@reduxjs/toolkit';

const OrderCustomerSlice = createSlice({
    name: 'orderCustomer',
    initialState: {
        customer: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
        },
        address: {
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
        },
    },
    reducers: {
        setCustomer: (state, action) => {
            state.customer = action.payload;
        },
        setCustomerAddress: (state, action) => {
            state.address = action.payload;
        },
    },
});

export const { setCustomer, setCustomerAddress } = OrderCustomerSlice.actions;

export default OrderCustomerSlice.reducer;

export const selectOrderCustomer = (state) => state.orderCustomer;