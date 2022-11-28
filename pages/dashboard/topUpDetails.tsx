import React from 'react'
import LeftSidebar from '../../components/dashboard/leftSidebar';
import TopNavbar from '../../components/dashboard/topBar';
import Topup from '../../components/dashboard/topup';
function TopUpDetails() {
  return (
    <div>
        <TopNavbar />
        <LeftSidebar />
        <Topup />
    </div>
  )
}

export default TopUpDetails;