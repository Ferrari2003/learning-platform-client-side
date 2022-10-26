import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../Pages/Category/Category/Category";
import Details from "../../Pages/Details/Details/Details";
import Home from "../../Pages/Home/Home/Home";


 export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
               path:'/',
               element:<Home></Home>
            },
            {
                path:'/category/:id',
                element: <Category></Category>
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            },
        ]
    }
 ])