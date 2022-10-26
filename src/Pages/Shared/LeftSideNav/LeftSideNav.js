import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";

const LeftSideNav = () => {
    const [programming, setProgramming] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/programming-data')
            .then(res => res.json())
            .then(data => setProgramming(data))
    }, [])

    return (
        <div>
            <h4>All Programming data: {programming.length}</h4>
            <div>
                {
                    programming.map(program => <p key={program.id}>
                        <Link to={`/category/${program.id}`}>{program.name}</Link>
                    </p>)
                }
            </div>
            <div>

                <ButtonGroup vertical>
                    <Button variant='outline-warning' ><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button variant='outline-dark'><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
                
            </div>

        </div>
    );
};

export default LeftSideNav;
