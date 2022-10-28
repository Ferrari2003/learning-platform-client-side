import React from 'react';
import { Link } from 'react-router-dom';
import CardBlog from '../CardBlog/CardBlog';

import Course from '../Course/Course';
import Course_view from '../Course_view/Course_view';
import Cover from '../Cover/Cover';
import './Header.css'


const Header = () => {
    return (
        <div >
            <div className="text navbar bg-black ">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link className="btn text btn-ghost normal-case text-xl"><h4>Learning</h4></Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to={'/courseDetails'}className="text-decoration-none " ><h5>Course</h5></Link></li>
                            <li tabIndex={0}>
                                <Link className="text-decoration-none">
                                    <h5>Blogs</h5>
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-base-100">
                                    <li><Link to={'/login'} className="text-decoration-none"><h5>Login</h5></Link></li>
                                    <li><Link to={'/register'} className="text-decoration-none"><h5>Register</h5></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Cover></Cover>
            <Course_view></Course_view>
            <Course></Course>
            <CardBlog></CardBlog>
        </div >
    );
};

export default Header;