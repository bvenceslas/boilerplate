import React from 'react';
import './index.css';
import Landing from '../../assets/images/landing.png';

const PostImage = () => {
    return (
        <div className="image-post-container">
            <img src={Landing}  alt="pic on post add" width="1200" height="500"/>
        </div>
    )
}

export default PostImage;