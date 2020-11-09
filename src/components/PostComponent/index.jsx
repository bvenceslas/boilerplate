import React from 'react';
import './index.css';
import ImageArea from '../../assets/images/image_area.png';

export default function PostComponent() {
    return (
        <div className="post-content">
            <div className="picture-area">
                <img src={ImageArea} alt="pic for post" />
            </div>
            <div className="post-text">
                {'TITLE'}
                <input type='text' />
                {'DESCRIPTION'}
                <input type="textArea"/>
            </div>
        </div>
    )
}
