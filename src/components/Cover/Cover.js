import React from 'react';
import image from '../../assests/images/image.jpg';
import './Cover.css'

const Cover = () => {
    return (
        <div>
            <div className='cover_photo'> 
               <div>
                 <img src={image} alt="" />
               </div>
               
               
            </div>
        </div>
    );
};

export default Cover;