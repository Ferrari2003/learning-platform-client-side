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
                            <li><Link>Course</Link></li>
                            <li tabIndex={0}>                                  
                            </li>
                            <li><Link>Blog</Link></li>
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