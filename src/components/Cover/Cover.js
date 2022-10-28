import React from 'react';
import { Link } from 'react-router-dom';
import './Cover.css'



const Cover = () => {
   

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className=" mb-5 text-5xl font-bold text-white"><span>World</span>No<span> 1 Online Course Platform </span></h1>
                        <h5 className="mb-5">WHAT WOULD YOU LEAN? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolorem quis provident eaque quod, nulla aperiam? Quae repellat non rerum explicabo recusandae error, quidem quis aperiam esse animi doloremque. Cum neque illo ullam ipsa aperiam laudantium provident reiciendis dolorum ducimus laboriosam nesciunt esse voluptatum, sed tenetur modi eaque consequuntur sapiente!</h5>
                        <Link to={'/courseDetails'} className="startedButton text-decoration-none"><h3>Get Started</h3></Link>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Cover;