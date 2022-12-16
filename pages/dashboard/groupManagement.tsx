import React from 'react'
import TopNavbar from '../../components/dashboard/topBar';
import LeftSidebar from '../../components/dashboard/leftSidebar';
import GroupsManagement from '../../components/dashboard/groupsManagement';
function GroupManagement() {
  return (
    <div>
          <TopNavbar />
        <div className='flex'>
        <LeftSidebar />
        <GroupsManagement />
        </div>
    </div>
  )
}

export default GroupManagement;