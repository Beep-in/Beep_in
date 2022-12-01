import React from 'react'
import TopNavbar from '../../components/dashboard/topBar';
import LeftSidebar from '../../components/dashboard/leftSidebar';
import PaymentMethod from '../../components/dashboard/paymentMethod';

function MethodofPayment() {
  return (
    <div>
           <TopNavbar />
        
        <LeftSidebar />
        <PaymentMethod />
       
    </div>
  )
}

export default MethodofPayment;