import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Course.css'


const Course = () => {
    const [data,setData] = useState({});

    const {image,title,description} = data


    useEffect(() => {
        fetch('http://localhost:5000/details_data')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
   
    return (
        <div className='container mb-11'>
            <div className='texts'>
                <h3>Popular Courses</h3>
                <h5>Fine your Dream Course online with low Price</h5>
            </div>
            <div className=' Card mt-5 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}?</p>
                        <div className="card-actions">
                            <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}?</p>
                        <div className="card-actions">
                        <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                        </div>
                    </div>
                </div><div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}?</p>
                        <div className="card-actions">
                        <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                        </div>
                    </div>
                </div><div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}?</p>
                        <div className="card-actions">
                        <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button mt-4'>
            <Link to={'/course'} className=" btn btn-active btn-dark">View All Courses</Link>
            </div>
        </div>
    );
};

export default Course;