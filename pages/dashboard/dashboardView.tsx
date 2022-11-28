import React from 'react'
import LeftSidebar from '../../components/dashboard/leftSidebar';
import TopNavbar from '../../components/dashboard/topBar';
import Dashboard from '../../components/dashboard/dashboard';
function DashboardView() {
  return (
    <div>
        <TopNavbar />
        <LeftSidebar />
       <Dashboard />
    </div>
  )
}

export default DashboardView;