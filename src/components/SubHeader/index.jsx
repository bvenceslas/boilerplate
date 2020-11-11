import React from 'react';
import './index.css';
import BrainImg from '../../assets/images/brain.png';
import FaceBookIcon from '../../assets/images/facebook.png';
import TwitterIcon from '../../assets/images/twitter.png';
import InstagramIcon from '../../assets/images/instagram.png';


const SubHeader = () => {
    return(
        <div className="subHeader-container">
            <div className="profile_container">
                <img className="profile" src={BrainImg} alt="profile pic" />
            </div>
                
            <div className="subheader-text">
                <div className="title">
                    {'HI! CANT HELP READING THIS AGAIN AND AGAIN!'}
                </div>
                <div className="slogan">
                    {'This is a slogan from the blog post owner!'}
                </div>
                <div className="social-icons">
                    <img src={FaceBookIcon} alt="facebook icon" width="20" height="20" />
                    <img src={TwitterIcon} alt="twitter icon" width="20" height="20" />
                    <img src={InstagramIcon} alt="instagram icon" width="20" height="20" />
                </div>
            </div>
        </div>
    )
}

export default SubHeader;