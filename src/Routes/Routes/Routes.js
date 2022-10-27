import { createBrowserRouter } from "react-router-dom";
import Course from "../../components/Course/Course";
import Cover from "../../components/Cover/Cover";
import Header from "../../components/Header/Header";
import Main from "../../Layout/Main";

 export const  router = createBrowserRouter([
        {
            path:'/',
            element:<Main></Main>,
            children:[
               {
                path:'/',
                element:<Header></Header>
               },
               {
                path:'/course',
                element:<Course></Course>
               },
               {
                path:'/cover',
                element:<Cover></Cover>
               },
               
               
            ]
        }
 ])