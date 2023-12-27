import { createSlice } from '@reduxjs/toolkit'

// let cartItem = [
//     {
//         id: "Dg-92ghs-trw-2",
//         name: "Ventamax",
//         perAuthor: true,
//         subscriptionPeriod: "1-Month",
//         quantity: 1,
//         price: 1200.00,
//         features: [
//             "iSpring Suite Max",
//             "iSpring Cam Pro",
//             "iSpring Content Library",
//             "iSpring Cloud",
//             "iSpring TalkMaster",
//             "iSpring Flip",
//             "iSpring Space",
//             "iSpring Market",
//             "iSpring Learn LMS"
//         ]
//     },


// ]


const initialState = {
    cartItem: [],
    currency: 'USD',
    discount: 0,
    total: {
        subtotal: 0,
        totalAmount: 0
    }
}

export const orderPreviewSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setProductQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const product = state.cartItem.find(item => item.id === id);
            product.quantity = quantity;
            state.total.subtotal = state.cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
            state.total.totalAmount = state.total.subtotal - state.discount;
        },
        setOrderDetails: (state, action) => {
            // Actualizar los artículos del carrito
            state.cartItem = action.payload.map(item => ({
                ...item.Product, // propiedades de Product
                ...item, // propiedades de orderDetails
            }));

            // Calcular el subtotal iterando sobre cada artículo del carrito
            // Calcular el subtotal iterando sobre cada artículo del carrito
            state.total.subtotal = state.cartItem.reduce((acc, item) => {
                // Asegurar que el precio y la cantidad sean números y calcular el total para cada artículo
                const itemTotal = (item.price || 0) * (item.quantity || 0);
                // Acumular el total
                return acc + itemTotal;
            }, 0);

            // Calcular el monto total restando cualquier descuento del subtotal
            // Asegurar que el descuento sea un número
            const discountAmount = state.discount || 0;
            state.total.totalAmount = state.total.subtotal - discountAmount;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProductQuantity, setOrderDetails } = orderPreviewSlice.actions

export default orderPreviewSlice.reducer

export const selectOrderPreview = state => state.orderPreview;

//how i can use setProductQuantity in my component
