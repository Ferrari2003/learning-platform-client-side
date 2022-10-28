import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CardBlog.css'

const CardBlog = () => {
    const [data,setData] = useState({});
    const{title,image,description} = data


    useEffect(() => {
        fetch('http://localhost:5000/details_data')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='container'> 
            <div className='texts'>
                <h3 >Popular Blog</h3>
                <h5>Read ours blogs to gain knowledge</h5>
            </div>
            <div className='cardBlog mt-11 gap-5'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <Link to={'/blogs'} className="btn btn-primary">VISIT BLOGS</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                        <Link to={'/blogs'} className="btn btn-primary">VISIT BLOGS</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                        <Link to={'/blogs'} className="btn btn-primary">VISIT BLOGS</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                        <div className="card-actions justify-end">
                        <Link to={'/blogs'} className="btn btn-primary">VISIT BLOGS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button mt-4'>
            <Link to={'/cardBlog'} className=" btn btn-active btn-dark">View All Blogs</Link>
            </div>
        </div>
    );
};

export default CardBlog;