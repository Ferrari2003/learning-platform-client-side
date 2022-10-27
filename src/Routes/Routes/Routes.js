import { createBrowserRouter } from "react-router-dom";
import Course from "../../components/Course/Course";
import Course_view from "../../components/Course_view/Course_view";
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
               {
                path:'/course_view',
                element:<Course_view></Course_view>
               },
              
               
            ]
        }
 ])