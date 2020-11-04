import React from 'react';
import BlogPostOne from '../../components/BlogPostOne';
import BlogPostTwo from '../../components/BlogPostTwo';
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
             <BlogPostTwo />
         </div>
     )
}

export default Home;