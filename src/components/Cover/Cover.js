import React from 'react';
import './Cover.css'

const Cover = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className=" mb-5 text-5xl font-bold text-white">World No 1 Online Course Platform </h1>
                        <p className="mb-5">WHAT WOULD YOU LEAN? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolorem quis provident eaque quod, nulla aperiam? Quae repellat non rerum explicabo recusandae error, quidem quis aperiam esse animi doloremque. Cum neque illo ullam ipsa aperiam laudantium provident reiciendis dolorum ducimus laboriosam nesciunt esse voluptatum, sed tenetur modi eaque consequuntur sapiente!</p>
                        <button className=" btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;