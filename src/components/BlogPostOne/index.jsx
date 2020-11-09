import React from 'react';
import './index.css';
import PostOneImg from '../../assets/images/post_one.png';
import FaceBookIcon from '../../assets/images/facebook.png';
import TwitterIcon from '../../assets/images/twitter.png';
import InstagramIcon from '../../assets/images/instagram.png';

const BlogPostOne = ( ) => {
    return (
        <div className="postone_container">
            <div className="PostImage">
                <img src={PostOneImg}  alt=""  width="439" height="326" /> 
            </div>
            <div className="post">
                <div className="post_title">
                    {'THIS IS A RANDOM TITLE FOR A SINGLE BLOG POST'}
                </div>
                <div className="post_content">
                    {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                    {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                </div>
                <div className="social">
                    <img src={FaceBookIcon} alt="facebook icon" width="20" height="20" />
                    <img src={TwitterIcon} alt="twitter icon" width="20" height="20" />
                    <img src={InstagramIcon} alt="instagram icon" width="20" height="20" />
                </div>
            </div>
        </div>
    );
}
export default BlogPostOne;