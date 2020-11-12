import React from 'react';
import './index.css';
import BrainImg from '../../assets/images/brain.png';


const SubHeaderAbout = () => {
    return(
        <div className="SubHeaderAbout-container">
            <div className="subprofile_container">
                <img className="sub-profile" src={BrainImg} alt="profile pic" />
            </div>
                
            <div className="SubHeaderAbout-text">
                <div className="subtitle">
                    {'HI! CANT HELP READING THIS AGAIN AND AGAIN!'}
                </div>
                <div className="subslogan">
                    {'This is a slogan from the blog post owner!'}
                </div>
            </div>
        </div>
    )
}

export default SubHeaderAbout;