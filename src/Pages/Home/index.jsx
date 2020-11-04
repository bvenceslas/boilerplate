import React from 'react';
import BlogPostOne from '../../components/BlogPostOne';
import Header from '../../components/Header';
import Landing from '../../components/Landing';
import SubHeader from '../../components/SubHeader';
import './index.css';
 const Home = () => {
     return (
         <div>
             <Header />
             <SubHeader />
             <Landing />
             <BlogPostOne />
         </div>
     )
}

export default Home;