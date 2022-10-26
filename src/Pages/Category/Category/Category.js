import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const details = useLoaderData();

    return (
        <div>
            <h2>This is category : {details.length}</h2>
        </div>
    );
};

export default Category;
