import React from 'react';
import './index.css';
import PostOneImg from '../../assets/images/post_one.png';
import FaceBookIcon from '../../assets/images/facebook.png';
import TwitterIcon from '../../assets/images/twitter.png';
import InstagramIcon from '../../assets/images/instagram.png';

const PostPreview = ( ) => {
    return (
        <div className="postpreview_container">
            <div className="postpreview">
                <div className="post_titletwo">
                    {'THIS IS A RANDOM TITLE FOR A SINGLE BLOG POST'}
                </div>
                <div className="post_contenttwo">
                    {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                    {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
                </div>
                
            </div>
            <div className="PostImagetwo">
                <img src={PostOneImg}  alt=""  width="439" height="326" /> 
            </div>
        </div>
    );
}
export default PostPreview;