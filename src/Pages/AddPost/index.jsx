import React  from 'react';
import Header from '../../components/Header';
import PostComponent from '../../components/PostComponent';
import PostHeader from '../../components/PostHeader';
import PostImage from '../../components/PostImage';
import PostPreview from '../../components/PostPreview';

const AddPost = ( ) => {
    return (
        <div>
            <Header />
            <PostImage />
            <PostHeader />
            <PostComponent />
            <PostPreview />
        </div>
    )
}

export default AddPost;