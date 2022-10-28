import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('http://localhost:5000/details_data')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div className='container mt-11'>
            <h2>{details.slug}</h2>
            <div className='mt-11'>
                <img className='w-100' src={details.image} alt="" />
            </div>
            <div className='mt-4 text-center mb-11 '>
                <Link to={'/'} className="btn btn-outline btn-primary">Back to Home</Link>
            </div>
            <div>
                <h3>{details.description}</h3>
                <u>
                    <li>{details.category}</li>
                    <li>{details.instructor}</li>
                    <li>{details.lastUpdated}</li>
                    <li>{details.id}</li>
                </u>
                <h2 className='mt-5'>{details.title}</h2>
                <u>
                    <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore perspiciatis odit voluptas atque consequatur voluptates quaerat, dignissimos eligendi sapiente alias animi aspernatur cumque optio repellat nam nesciunt cum nobis minus distinctio culpa porro. Ipsam quibusdam explicabo iure ducimus officia facilis, perspiciatis totam est iusto inventore earum rerum, officiis quae enim nulla? Ipsa quam nam illo optio recusandae nesciunt omnis error commodi necessitatibus harum, soluta impedit culpa libero provident, repellendus nisi quo repellat! Atque ipsa voluptatum, eum similique sunt nemo praesentium doloribus illum culpa eius perferendis omnis ducimus quo corporis quasi inventore sed quod excepturi, fugit ipsam repellendus. Temporibus, voluptatibus aliquam.</li>
                </u>
            </div>
        </div>
    );
};

export default Blogs;