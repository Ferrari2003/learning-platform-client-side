import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import CardBlog from "../../components/CardBlog/CardBlog";
import Course from "../../components/Course/Course";
import CourseDetails from "../../components/Course_details/CourseDetails";
import Course_view from "../../components/Course_view/Course_view";
import Cover from "../../components/Cover/Cover";
import Detail from "../../components/Detail/Detail";
import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";

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
                path:'/cover',
                element:<Cover></Cover>
               },
               {
                path:'/courseDetails',
                element:<CourseDetails></CourseDetails>
               },
               {
                path:'/course',
                element:<Course></Course>,
               
               },
               
               {
                path:'/blogs',
                element:<Blogs></Blogs>
               },
               {
                path:'/detail',
                element:<Detail></Detail>
               },
               {
                path:'/course_view',
                element:<Course_view></Course_view>
               },
               {
                path:'/cardBlog',
                element:<CardBlog></CardBlog>
               },
              {
                path:'/login',
                element:<Login></Login>
              },
              {
                path:'/register',
                element:<Register></Register>
              },
              {
                path:'*',
                element:<div><h1 className="text-center">404_not Found</h1></div>
              }
               
            ]
        }
 ])