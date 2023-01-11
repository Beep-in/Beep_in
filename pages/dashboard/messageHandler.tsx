import React from 'react'
import LeftSidebar from '../../components/dashboard/leftSidebar';
import MessageType from '../../components/dashboard/messageType';
import TopNavbar from '../../components/dashboard/topBar';
import Response from '../../components/utils/response';
function MessageHandler() {
  return (
    <div>
        <TopNavbar />
        <div className='flex'>
        <LeftSidebar />
        <MessageType />
        </div>
        <Response/>
    </div>
  )
}

export default MessageHandler;