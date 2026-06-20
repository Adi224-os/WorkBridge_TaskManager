import React, { useContext } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import { userContext } from '../../context/userContext';

const Dashboard = () => {
  useUserAuth();

  const {user} = useContext(userContext)
  return <div>Dashboard</div>;
};

export default Dashboard;