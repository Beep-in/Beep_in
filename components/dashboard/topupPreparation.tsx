import React from 'react'
import Link from 'next/link'
import { BiChevronRightCircle } from "react-icons/bi"


function TopupPreparation() {
  return (
    <div className='h-full w-full bg-gray-800 opacity-60 absolute top-0'>
        <div className='h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24'>
        <img src="/icons/topupTick.svg" alt="topup-tick" className='absolute top-14 ml-[14vw]' />
        <h1 className='font-bold text-xl pt-14 text-center'>Topup</h1>
          <form action="" className='ml-16 mt-10'>
          <input
            
              type="text"
              name="nameeofagent"
              placeholder="Name of agent"
              required
              className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 "
            />
              <input
            
            type="text"
            name="mobilrnumber"
            placeholder="Mobile number"
            required
            className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 mt-6"
          />
            <input
            
            type="text"
            name="numberofsms"
            placeholder="Number of SMS"
            required
            className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 mt-6 "
          />

          </form>
          <Link href='methodofPayment'>
          <button className='flex float-right mr-20 mt-16 items-center font-normal'>Payment method<BiChevronRightCircle className='text-4xl text-blue-500 ml-4'/></button>
          </Link>
        </div>
    </div>
  )
}

export default TopupPreparation