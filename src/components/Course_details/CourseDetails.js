import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {  Link } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
   const [data, setData] = useState({});

   useEffect(() => {
    fetch('http://localhost:5000/details_data')
    .then(res => res.json())
    .then(data=>setData(data))
   },[])
    return (
        <div >
          
           <div className='container d-flex mt-11'>
            
           <div className='category'>
             <h3>Category:</h3>

                <Link className="button btn btn-wide"><h5>Programming</h5></Link>
                <br />
                <Link className=" btn btn-wide"><h5>Business</h5></Link>
            </div>
            <div className='card_style'>
                <div >
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={data.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <p>{data.description}</p>
                            <div className="card-actions justify-end">
                            <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <Link to={'/detail'} className="btn btn-primary">DETAILS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default CourseDetails;