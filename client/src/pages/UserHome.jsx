import React from 'react';
import { useParams } from 'react-router-dom';

const UserHome = () => {
  const { userId } = useParams();
  return (
  <div>
    <h1>This is the user home for {userId}</h1>
  </div>
)};

export default UserHome;
