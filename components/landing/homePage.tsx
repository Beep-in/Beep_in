import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Telephone,EnvelopeOpen } from 'react-bootstrap-icons'
function HomePage() {
  return (
    <div className='w-full '>
      <nav className='flex justify-between  w-full mt-8'>
        <img src="icons/logo.svg" alt="logo" className='ml-28'/>
        <div className='flex float-right'>
          <Link href='auth/login'>
        <button className='h-12 bg-white text-blue-500 shadow-md shadow-slate-700 w-28 rounded-lg mr-6'>Login</button>
        </Link>
        <Link href='auth/signup'>
        <button className='bg-gradient-to-l from-green-700 to-blue-500 text-white rounded-lg h-12 w-28 mr-28'>Sign up</button>
        </Link>
        </div>
      </nav>
      <div className='flex mt-20'>
        <div className='w-[50vw]'>
        <div className='pl-28 w-[30vw] pt-[8%]'>
          <h1 className='text-blue-500 text-3xl'>Easily engage your customers anywhere.</h1>
          <p className='pt-8'>Lorem ipsum dolor sit amet consectetur. Cursus tempor enim viverra sed. Felis quisque.</p>
          <button className='bg-gradient-to-l from-green-700 to-blue-500 text-white rounded-lg h-12 w-40 mt-10'>Get started</button>
        </div>
        </div>
        <div className=''>
          <div className='h-80 w-72 bg-[#D9D9D9] rounded-lg'>
           <img src="/images/home.png" alt="home" className='h-80' />
          </div>
          <div className='h-80 w-72 bg-[#D9D9D9] rounded-lg absolute top-[40%] ml-[10%]'>
             <img src="/images/home2.png" alt="home" className='h-80' />
        </div>
        <div className='flex'>
         
          <div className='flex'>
          <div className='bg-[#6c63ff26] rounded-full w-16 h-16 text-center absolute mt-10 top-[30%] ml-[29.5%]'>
            <h1 className='items-center text-3xl pt-3 text-green-700'>A</h1>
          </div>
          <div className='h-12  w-56 bg-white shadow-sm shadow-slate-700 pt-3 text-center absolute mt-12 top-[30%] ml-[15%]'>
          <p>Lorem ipsum sit amet.</p>
          </div>
          </div>
          <div className='flex'>
          <div className='bg-[#6c63ff26] rounded-full w-16 h-16 text-center mt-6 '>
            <h1 className='items-center text-3xl pt-3 text-blue-500'>K</h1>
          </div>
          <div className='h-12  w-56 bg-white shadow-sm shadow-slate-700 pt-3 text-center absolute mt-12 top-[60%] ml-20'>
          <p>Lorem ipsum sit amet.</p>
          </div>
          </div>
          </div>
         </div>
      </div>
      <div className='h-auto w-[83vw] shadow-sm shadow-gray-500 pb-20 pt-24 ml-24 pl-24 mt-[12%]'>
        <div className='flex'>
          <div className='flex'>
             <img src="icons/message.svg" alt="message" className='h-12 w-12' />
             <div className='pl-6'>
              <h1>SMS-Channel Messaging</h1>
              <p>Use sms to verify, authenticate and engage customers.</p>
             </div>
          </div>
          <div className='flex ml-40'>
             <img src="icons/topupTick.svg" alt="message" className='h-12 w-12'  />
             <div className='pl-6'>
              <h1 className='text-lg '>SMS-Channel Messaging</h1>
              <p>Use sms to verify, authenticate and engage customers.</p>
             </div>
          </div>
          </div>
          <div className='flex mt-16'>
          <div className='flex'>
             <img src="icons/folder.svg" alt="message" className='h-12 w-12'  />
             <div className='pl-6'>
              <h1>SMS-Channel Messaging</h1>
              <p>Use sms to verify, authenticate and engage customers.</p>
             </div>
          </div>
          <div className='flex ml-40'>
             <img src="icons/team.svg" alt="message" className='h-12 w-12'  />
             <div className='pl-6'>
              <h1>SMS-Channel Messaging</h1>
              <p>Use sms to verify, authenticate and engage customers.</p>
             </div>
          </div>
          </div>
     
      </div>
      <div className='flex'>
        <div className='w-1/2 mt-[10%]'>
        <div className='pl-24 w-[35vw]'>
          <h1 className='text-blue-500 text-3xl'>Deliver messages efficiently.</h1>
          <p className='pt-4'>Enhance customer loyalty and retention by guaranteeing the delivery of bulk, group or single message. 
        </p>
        </div>
       </div>
       <div>
        <Image 
          width={500}
          height={600}
          alt="signup image"
          src={"/images/form.png"}
          className="ml-8 mt-32"
            />
       </div>
      </div>
      <div className='flex pl-24 border-b-4 border-opacity-25 pb-4 border-[#6C63FF] border-solid'>
       <div className='w-1/2'>
        <Image 
          width={500}
          height={600}
          alt="signup image"
          src={"/images/chart.png"}
          className="ml-8 mt-32"
            />
       </div>
       <div className='w-1/2 mt-[10%]'>
        <div className='pl-24 w-[35vw]'>
          <h1 className='text-blue-500 text-3xl'>Retrieve real-time reports.</h1>
          <p className='pt-4'>Generate detailed cross-channel reports for incoming and outgoing agent messages. 
        </p>
        </div>
       </div>
      </div>
      <div className='flex pb-14 justify-around'>
      <div className='mt-8'>
        <img src="icons/logo.svg" alt="logo" />
        <p className='w-72 pt-12'>Termii helps businesses use messaging channels to verify and authenticate sms topups.
        </p>
      </div>
      <div className='mt-14'>
        <h1 className='text-2xl text-blue-500'>Contact Us </h1>
        <p>Any questions? Talk to the admin.</p>
        <div className='flex mt-4'>
        <Telephone className='text-blue-500' />
        <p className='pl-3'>+250785341151</p>
        </div>
          <div className='flex'>
        <EnvelopeOpen className='text-blue-500' />
        <p className='pl-3'>supaad@gmail.com</p>
        </div>
      </div>
        <div className='w-80 mt-14'>
          <p>2022 Beep-in is focused on delivering great customer messaging experience globally.</p>
          <p className='text-blue-500 pt-8'>Thank you!</p>
        </div>
    </div>
    </div>
  )
}

export default HomePage