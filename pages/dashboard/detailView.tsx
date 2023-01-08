import React from 'react'
import LeftSidebar from '../../components/dashboard/leftSidebar';
import TopNavbar from '../../components/dashboard/topBar';
import AgentList from '../../components/dashboard/agentList';
const  Dashboard = () => {
  return (
    <div>
        <TopNavbar />
        <div className='flex'>
        <LeftSidebar />
        <AgentList data={[]}  />
        </div>
    </div>
  )
}

export default Dashboard;