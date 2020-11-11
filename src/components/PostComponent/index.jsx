import React from 'react';
import './index.css';
import ImageArea from '../../assets/images/image_area.png';

const PostComponent = () => {
    return (
        <div className="post-content">
            <div className="picture-area">
                <img src={ImageArea} alt="pic for post" width="400" height="300"/>
            </div>
            <div className="post-form">
                {'TITLE'}
                <input type='text' />
                {'DESCRIPTION'}
                <textarea name="description"></textarea>
                <button>{'POST'}</button>
            </div>
        </div>
    )
}

export default PostComponent;
