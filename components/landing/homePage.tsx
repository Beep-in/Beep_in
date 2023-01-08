import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Telephone,EnvelopeOpen } from 'react-bootstrap-icons'
function HomePage() {
  return (
    <div className='w-full '>
      <nav className='flex justify-between  w-full mt-8'>
        <img src="icons/logo.svg" alt="logo" className='lg:ml-28 sm:ml-6'/>
        <div className='flex float-right'>
          <Link href='auth/login'>
        <button className='h-12 bg-white text-[#6C63FF] shadow-md shadow-slate-700 w-28 rounded-lg mr-6 font-karla'>Login</button>
        </Link>
        <Link href='auth/signup'>
        <button className='bg-gradient-to-l from-green-700 to-[#6C63FF] text-white rounded-lg h-12 w-28 mr-28 font-karla'>Sign up</button>
        </Link>
        </div>
      </nav>
      <div className='flex mt-20'>
        <div className='lg:w-[50vw] sm:w-[43vw]'>
        <div className='lg:pl-28 sm:pl-6 w-[30vw] pt-[8%]'>
          <h1 className='text-[#6C63FF] text-4xl font-karla'>Easily engage your customers anywhere.</h1>
          <p className='pt-8 font-inter text-lg text-black text-opacity-50'>Lorem ipsum dolor sit amet consectetur. Cursus tempor enim viverra sed. Felis quisque.</p>
          <button className='bg-gradient-to-l from-green-700 to-[#6C63FF] text-white rounded-lg h-12 w-40 mt-10 font-karla  text-xl'>Get Started</button>
        </div>
        </div>
        <div className=''>
          <div className='h-88 lg:w-80 sm:w-64 bg-[#D9D9D9] rounded-lg'>
           <img src="/images/home.png" alt="home" className='h-80' />
          </div>
          <div className='h-88 lg:w-80 sm:w-64 bg-[#D9D9D9] rounded-lg absolute top-[40%] ml-[10%]'>
             <img src="/images/home2.png" alt="home" className='h-80' />
        </div>
        <div className='flex'>
         
          <div className='flex'>
          <div className='bg-[#6c63ff26] rounded-full w-16 h-16 text-center lg:absolute sm:hidden mt-10 top-[30%] ml-[29.5%]'>
            <h1 className='items-center text-3xl pt-3 text-green-700'>A</h1>
          </div>
          <div className='h-12  w-56 bg-white shadow-sm shadow-slate-700 pt-3 text-center absolute mt-12 top-[30%] ml-[15%] font-inter'>
          <p>Lorem ipsum sit amet.</p>
          </div>
          </div>
          <div className='flex'>
          <div className='bg-[#6c63ff26] rounded-full w-16 h-16 text-center mt-6 '>
            <h1 className='items-center text-3xl pt-3 text-[#6C63FF]'>K</h1>
          </div>
          <div className='h-12  w-56 bg-white shadow-sm shadow-slate-700 pt-3 text-center absolute mt-12 top-[60%] ml-20 font-inter'>
          <p>Lorem ipsum sit amet.</p>
          </div>
          </div>
          </div>
         </div>
      </div>
      <div className='h-auto w-[83vw]  shadow-sm shadow-gray-500 pb-20 pt-24 lg:ml-24 sm:ml-4 lg:pl-24 sm:pl-10 mt-[12%]'>
        <div className='flex'>
          <div className='flex'>
             <img src="icons/message.svg" alt="message" className='h-12 w-12' />
             <div className='pl-6 font-karla'>
              <h1>SMS-Channel Messaging</h1>
              <p>Use sms to verify, authenticate and engage customers.</p>
             </div>
          </div>
          <div className='flex lg:ml-40 sm:ml-12 '>
             <img src="icons/topupTick.svg" alt="message" className='h-12 w-12'  />
             <div className='pl-6 font-karla'>
              <h1 className='text-lg '>SMS-Channel Messaging</h1>
              <p>Use sms to verify, authenticate and engage customers.</p>
             </div>
          </div>
          </div>
          <div className='flex mt-16'>
          <div className='flex'>
             <img src="icons/folder.svg" alt="message" className='h-12 w-12'  />
             <div className='pl-6 font-karla'>
              <h1>SMS-Channel Messaging</h1>
              <p>Use sms to verify, authenticate and engage customers.</p>
             </div>
          </div>
          <div className='flex lg:ml-40 sm:ml-12'>
             <img src="icons/team.svg" alt="message" className='h-12 w-12'  />
             <div className='pl-6 font-karla'>
              <h1>SMS-Channel Messaging</h1>
              <p>Use sms to verify, authenticate and engage customers.</p>
             </div>
          </div>
          </div>
     
      </div>
      <div className='flex'>
        <div className='w-1/2 mt-[10%]'>
        <div className='lg:pl-24 sm:pl-4 w-[35vw]'>
          <h1 className='text-[#6C63FF] text-3xl font-karla'>Deliver messages efficiently.</h1>
          <p className='pt-4 font-inter text-black text-opacity-50'>Enhance customer loyalty and retention by guaranteeing the delivery of bulk, group or single message. 
        </p>
        </div>
       </div>
       <div>
        <Image 
          width={500}
          height={600}
          alt="signup image"
          src={"/images/form.png"}
          className="lg:ml-8 sm:ml-4 lg:mt-32 lg:h-[60vh] sm:mt-20 sm:w-[38vw] sm:h-[38vh]"
            />
       </div>
      </div>
      <div className='flex lg:pl-24 sm:pl-0 border-b-4 border-opacity-25 pb-4 border-[#6C63FF] border-solid'>
       <div className='w-1/2'>
        <Image 
          width={500}
          height={600}
          alt="signup image"
          src={"/images/chart.png"}
          className="lg:ml-8 sm:ml-2 lg:mt-32 sm:mt-12"
            />
       </div>
       <div className='w-1/2 mt-[10%]'>
        <div className='lg:pl-24 sm:pl-14 lg:w-[35vw]'>
          <h1 className='text-[#6C63FF] text-3xl font-karla'>Retrieve real-time reports.</h1>
          <p className='pt-4 font-inter text-black text-opacity-50'>Generate detailed cross-channel reports for incoming and outgoing agent messages. 
        </p>
        </div>
       </div>
      </div>
      <div className='flex pb-14 justify-around'>
      <div className='mt-8'>
        <img src="icons/logo.svg" alt="logo" />
        <p className='w-72 pt-12 font-inter text-black text-opacity-80'>Termii helps businesses use messaging channels to verify and authenticate sms topups.
        </p>
      </div>
      <div className='mt-14 font-inter'>
        <h1 className='text-2xl text-[#6C63FF]'>Contact Us </h1>
        <p>Any questions? Talk to the admin.</p>
        <div className='flex mt-4'>
        <Telephone className='text-[#6C63FF]' />
        <p className='pl-3 text-black text-opacity-80'>+250785341151</p>
        </div>
          <div className='flex'>
        <EnvelopeOpen className='text-[#6C63FF]' />
        <p className='pl-3 text-black text-opacity-80'>supaad@gmail.com</p>
        </div>
      </div>
        <div className='w-80 mt-14 lg:block sm:hidden font-inter'>
          <p>2022 Beep-in is focused on delivering great customer messaging experience globally.</p>
          <p className='text-[#6C63FF] pt-8'>Thank you!</p>
        </div>
    </div>
    </div>
  )
}

export default HomePage