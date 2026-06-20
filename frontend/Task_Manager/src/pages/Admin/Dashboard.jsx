import React, { useContext, useState } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import { userContext } from '../../context/userContext';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const Dashboard = () => {
  useUserAuth();

  const {user} = useContext(userContext)

  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [pieChartData, setPieChartData] = useState([]);
  const [barChartData, setBarChartData] = useState([]);

  const getDashboardData = async () => {
    // try{
    //   const response = await axiosInstance.get(
    //     API_PATHS.TASKS.GET_DASHBOARD_DATA
    //   );
    //   if (response.data){
    //     setDashboardData(response.data);
    //   }
    // }
  }
  return <DashboardLayout activeMenu="Dashboard">Dashboard</DashboardLayout>;
};

export default Dashboard;