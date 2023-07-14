import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

const nonAuthRoutes = [
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/cart',
        element:<Cart/>
    },
]

const router = createBrowserRouter(nonAuthRoutes)

export default router

