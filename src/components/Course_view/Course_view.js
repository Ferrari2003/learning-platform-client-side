import React from 'react';
import './Course_view.css'
import { FaGraduationCap } from "react-icons/fa";

const Course_view = () => {
    return (
        <div  className='view mb-12'>
            <div>
                <div className='icon'><FaGraduationCap></FaGraduationCap></div>
                <h4>300 Course</h4>
                <p>Explore a variety fresh topics</p>
            </div>
            <div>
                <div className='icon'><FaGraduationCap></FaGraduationCap></div>
                <h4>Expert Teachers</h4>
                <p>Find the right instructor for you</p>
            </div>
            <div>
                <div className='icon'><FaGraduationCap></FaGraduationCap></div>
                <h4>Focus an target</h4>
                <p>Increase your personal expertise</p>
            </div>
        </div>
        
    );
};

export default Course_view;