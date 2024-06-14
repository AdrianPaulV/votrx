import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <main className='main'>
      <h1>Welcome to VotrX. Let's vote!</h1>
      <p className='poppins-light txt-xl'>Create a poll, share and vote in a flash.</p>
        <div className='btns-container'>
        <Link to="/user-home" className="login btn btn-1">Login</Link>
        <button className='signup btn btn-2'>Signup</button>
        </div>
    </main>
);

export default HomePage;
