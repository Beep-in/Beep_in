import React from 'react'
import LeftSidebar from '../../components/dashboard/leftSidebar';
import TopNavbar from '../../components/dashboard/topBar';
import AgentList from '../../components/dashboard/agentList';
const  Dashboard = ():JSX.Element => {
  return (
    <>
        <TopNavbar />
        <div className='flex'>
        <LeftSidebar />
        <AgentList  />
        </div>
    </>
  )
}

export default Dashboard;