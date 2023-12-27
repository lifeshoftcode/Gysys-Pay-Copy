import { configureStore } from '@reduxjs/toolkit'
import orderPreviewReducer from '../features/orders/orderPreviewSlice/orderPreviewSlice'
import orderCustomerReducer from '../features/orders/orderPreviewSlice/orderCustomerSlice'
export const store = configureStore({
  reducer: {
    orderPreview: orderPreviewReducer,
    orderCustomer: orderCustomerReducer,
  },
})