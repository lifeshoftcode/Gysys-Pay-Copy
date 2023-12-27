import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { OrderScreen } from "./view/pages/OrderScreen/OrderScreen";
import { Home } from "./view/pages/Home/Home";
import { CheckoutScreen } from "./view/pages/CheckoutScreen/CheckoutScreen";
import NotFoundScreen from "./view/pages/notFound/NotFoundScreen";
import { Ventamax } from "./view/Ventamax/Ventamax";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
    ,
    {
        path: "/cart/view/:id",
        element: <OrderScreen />,
    },
    {
        path: "/order/checkout/:id",
        element: <CheckoutScreen />,
    },
    {
        path: "/ventamax/",
        element: <Ventamax />,
    },
    {
        path: "*",
        element: <NotFoundScreen />,
    },
]);