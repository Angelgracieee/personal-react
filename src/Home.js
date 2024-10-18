import React from 'react';
import myImage from './Images/my-image.jpg';

const Home = () => (
  <div className="home">
    <h1>Welcome to My Profile!</h1>
    <p>Welcome to my personal profile. I am working towards my career goals.</p>
    <img className="profile-pic" src={myImage} alt="My Profile Picture" />
  </div>
);

export default Home;