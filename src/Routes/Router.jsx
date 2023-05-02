import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Card from "../Pages/Cards/Card";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
           
        ]
    }
])

export default router ;