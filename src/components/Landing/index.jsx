import React from 'react';
import './index.css';
import LandingImg from '../../assets/images/landing.png';

const Landing = () => {
    return(
        <div className="container">
            <img src={LandingImg} alt="landing pic" width="980" height="150"/>
        </div>
    )
}

export default Landing;