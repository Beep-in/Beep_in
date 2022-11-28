import React from 'react'
import LeftSidebar from '../../components/dashboard/leftSidebar';
import TopNavbar from '../../components/dashboard/topBar';
import MessageType from '../../components/dashboard/messageType';
function MessageHandler() {
  return (
    <div>
        <TopNavbar />
        <div className='flex'>
        <LeftSidebar />
        <MessageType />
        </div>
    </div>
  )
}

export default MessageHandler;