import React from 'react'
import LeftSidebar from '../../components/dashboard/leftSidebar';
import TopNavbar from '../../components/dashboard/topBar';
import Topup from '../../components/dashboard/topup';
function TopUpDetails() {
  return (
    <div>
        <TopNavbar />
        <div className='flex'>
        <LeftSidebar />
        <Topup />
        </div>
    </div>
  )
}

export default TopUpDetails;