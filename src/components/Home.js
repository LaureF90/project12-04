import React from "react";
import Likes from './Likes';
import Viewed from './Viewed';

const Home = (props) => {

  return (
  <div className='Home'>
      <h2>Home</h2>
      <Likes />
      <Viewed />
    </div>
  );
};

export default Home;
