import React from 'react';
import './UserHome.css';
import { useParams } from 'react-router-dom';
import VotingFrom from '../../components/VotingForm/VotingForm.jsx';

const UserHome = () => {
  const { userId } = useParams();
  return (
  <div className='userhome-container'>
    <p className='poppins-light txt-m'>Welcome back, Adrian!</p>
    <div className='form-container'>
      <p className='poppins-light txt-xl'>Create a poll</p>
      <VotingFrom />
    </div>
  </div>
)};

export default UserHome;
