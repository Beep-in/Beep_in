import React from 'react'
import AddMessage from '../../components/dashboard/addMessage';
import Sidebar from '../../components/dashboard/sidebar';
// import Submenu from '../../components/dashboard/submenu';
import TopNavbar from '../../components/dashboard/topNavbar';
// import Submenu from '../../components/dashboard/submenu';
function Navbar() {
  return (
    <div>
        <TopNavbar />
        <AddMessage />
        <div className='flex'>
        <Sidebar />
        {/* <Submenu /> */}
        </div>
    </div>
  )
}

export default Navbar