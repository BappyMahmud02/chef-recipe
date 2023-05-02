import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Card from "../Pages/Cards/Card";
import Cart from "../Pages/Cart/Cart";

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
                path:'details',
                element:<Cart></Cart>
            }
        
            
           
        ]
    }
])

export default router ;