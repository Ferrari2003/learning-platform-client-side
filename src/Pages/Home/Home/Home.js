import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const details = useLoaderData();
    return (
        <div>
            <h2>This is home: {details.length}</h2>
        </div>
    );
};

export default Home;