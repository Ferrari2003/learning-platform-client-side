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
               element:<Home></Home>,
               loader: () => fetch(`http://localhost:5000/detail`)
            },
            {
                path:'/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:'/details/:id',
                element:<Details></Details>
            },
            {
                path:'/button',
                element:<button></button>
            }
        ]
    }
 ])