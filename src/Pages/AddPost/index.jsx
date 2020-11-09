import React  from 'react';
import Header from '../../components/Header';
import PostComponent from '../../components/PostComponent';
import PostHeader from '../../components/PostHeader';
import PostImage from '../../components/PostImage';

const AddPost = ( ) => {
    return (
        <div>
            <Header />
            <PostImage />
            <PostHeader />
            <PostImage />
            <PostComponent />
        </div>
    )
}

export default AddPost;