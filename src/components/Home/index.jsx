import React from 'react';
import BlogPostOne from '../BlogPostOne';
import Header from '../Header';
import Landing from '../Landing';
import SubHeader from '../SubHeader';
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