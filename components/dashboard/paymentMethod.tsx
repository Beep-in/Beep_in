import React from 'react'
import Link from 'next/link'
import { BiChevronRightCircle,BiChevronLeftCircle } from "react-icons/bi"


function PaymentMethod() {
  return (
    <div className='h-full w-full bg-gray-800 opacity-60 absolute top-0'>
        <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
        <img
          src="/icons/topupTick.svg"
          alt="topup-tick"
          className="absolute top-14 ml-[14vw]"
        />
        <h1 className="font-bold text-xl pt-20 text-center">Payment method</h1>
        <form action="" className="ml-16 mt-10">
          <div className="flex items-center mb-4 mt-14">
            <input
              type="radio"
              value="mtnMomo"
              name="default-radio"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
             MTN momo
            </label>
          </div>
          <div className="flex items-center mt-10">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value="bankPayment"
              name="default-radio"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300   dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Bank Payment
            </label>
          </div>
          <div className="flex items-center mt-10">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value="cardPayment"
              name="default-radio"
              className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Master Card / Paypal / VISA Card
            </label>
          </div>
        </form>
        <div className='flex mt-28 justify-between ml-16 mr-16'>
            <Link href = "topupResult">
        <button className="flex  items-center font-normal">
            
            <BiChevronLeftCircle className="text-4xl text-blue-500 mr-4" />
            Topup
          </button>
          </Link>
          <button className="flex  items-center font-normal">
            Continue
            <BiChevronRightCircle className="text-4xl text-blue-500 ml-4" />
          </button>
          </div>
      </div>
    </div>
  )
}

export default PaymentMethod