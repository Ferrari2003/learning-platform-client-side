import React from 'react';

const Page404 = () => {
    return (
        <>
            <head>{'The page is not found'}</head>
            <div className='hero min-h-screen bg-gray-800'>
                <div className='text-center hero-center text-3xl font-bold'>
                    <div>
                        <h1>
                            The pages is not found.
                        </h1>
                        <div className='mt-4'>
                            <a href="/" className='link-primary'>Top Page</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page404;