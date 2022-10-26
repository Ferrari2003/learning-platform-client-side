import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaFacebook } from "react-icons/fa";


const LeftSideNav = () => {
    const [programming, setProgramming] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/programming-data')
            .then(res => res.json())
            .then(data => setProgramming(data))
    }, [])

    return (
        <div>
            
            <div>
                {
                    programming.map(program => <p key={program.id}>
                        <Link to={`/category/${program.id}`}>{program.name}</Link>
                    </p>)
                }
            </div>
            <div>
            <ButtonGroup vertical>
                    <Button className='mb-4 rounded' variant='outline-info' ><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button className='rounded' variant='outline-dark'><FaFacebook></FaFacebook> Facebook</Button>
                </ButtonGroup>
                
            </div>

        </div>
    );
};

export default LeftSideNav;
