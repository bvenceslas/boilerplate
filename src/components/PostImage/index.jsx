import React from 'react';
import './index.css';
import Landing from '../../assets/images/landing.png';

const PostImage = () => {
    return (
        <div className="image-post-container">
            <img src={Landing}  alt="pic on post add" width="980" height="270"/>
        </div>
    )
}

export default PostImage;