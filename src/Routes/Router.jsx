import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Card from "../Pages/Cards/Card";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Viewdetails from "../Pages/Detals/Viewdetails";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },

            {
                path: 'details',
                element: <Cart></Cart>,

            },
            {
                path: 'details/:id',
                element: <Privateroute> <Viewdetails></Viewdetails></Privateroute>
            }



        ]
    }
])

export default router;