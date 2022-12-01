import React from 'react'
import TopNavbar from '../../components/dashboard/topBar';
import LeftSidebar from '../../components/dashboard/leftSidebar';
import TopupPreparation from '../../components/dashboard/topupPreparation';
function TopupResult() {
  return (
    <div>
           <TopNavbar />
        
        <LeftSidebar />
        <TopupPreparation />
       
    </div>
  )
}

export default TopupResult;