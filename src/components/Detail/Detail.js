
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Detail = () => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/details_data')
        .then(res => res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div className='container mt-11'>
            <h2>{details.slug}</h2>
            <div className='mt-11'>
            <img className='w-100' src={details.image} alt="" />
            </div>
            <div className='mt-4 text-center '>
            <Link to={'/'} className="btn btn-outline btn-primary">Home</Link>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Detail;