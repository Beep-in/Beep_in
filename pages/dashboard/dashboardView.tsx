import React from 'react'
import LeftSidebar from '../../components/dashboard/leftSidebar';
import TopNavbar from '../../components/dashboard/topBar';
import Dashboard from '../../components/dashboard/dashboard';
function DashboardView() {
  return (
    <div>
        <TopNavbar />
        <div className='flex'>
        <LeftSidebar />
       <Dashboard />
       </div>
    </div>
  )
}

export default DashboardView;