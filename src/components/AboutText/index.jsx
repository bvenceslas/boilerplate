import React from 'react';
import './index.css';
import FaceBookIcon from '../../assets/images/facebook.png';
import TwitterIcon from '../../assets/images/twitter.png';
import InstagramIcon from '../../assets/images/instagram.png';

const AboutText = ( ) => {
    return (
        <div className="about-container">                
            <div className="about-text">
                {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                <br />
                <br />
                {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                <br />
                <br />
                {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                <br />
            </div>
            <div className="about-social">
                <img src={FaceBookIcon} alt="facebook icon" width="20" height="20" />
                <img src={TwitterIcon} alt="twitter icon" width="20" height="20" />
                <img src={InstagramIcon} alt="instagram icon" width="20" height="20" />
            </div>
        </div>
    );
}
export default AboutText;