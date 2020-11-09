import React from 'react';
import './index.css';
import PostOne from '../../assets/images/post_one.png';

const PostPreview = () => {
    return (
        <dic>
            <div className="preview-title">
                {'POST PREVIEW'}
            </div>
            <div className="post-preview-image">
                <img src={PostOne} alt="post preview pic"/>
            </div>
            <div className="post-preview-text">
                {'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book.'}
            </div>
        </dic>
    )
}
export default PostPreview;