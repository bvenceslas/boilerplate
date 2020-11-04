import React from 'react';
import './index.css';
import PostOneImg from '../../assets/images/post_one.png';
import FaceBookIcon from '../../assets/images/facebook.png';
import TwitterIcon from '../../assets/images/twitter.png';
import InstagramIcon from '../../assets/images/instagram.png';

const BlogPostTwo = ( ) => {
    return (
        <div className="posttwo_container">
            <div className="posttwo">
                <div className="post_titletwo">
                    {'THIS IS A RANDOM TITLE FOR A SINGLE BLOG POST'}
                </div>
                <div className="post_contenttwo">
                    {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                    {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                </div>
                <div className="socialtwo">
                    <img src={FaceBookIcon} alt="facebook icon" width="20" height="20" />
                    <img src={TwitterIcon} alt="twitter icon" width="20" height="20" />
                    <img src={InstagramIcon} alt="instagram icon" width="20" height="20" />
                </div>
            </div>
            <div className="PostImagetwo">
                <img src={PostOneImg}  alt=""  width="439" height="326" /> 
            </div>
        </div>
    );
}
export default BlogPostTwo;