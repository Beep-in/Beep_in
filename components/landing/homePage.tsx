import React from 'react'

function HomePage() {
  return (
    <div className='w-full '>
      <nav className='flex justify-between  w-full mt-4'>
        <img src="icons/logo.svg" alt="logo" className='ml-28'/>
        <div className='flex float-right'>
        <button className='h-12 bg-white text-blue-500 shadow-md shadow-slate-700 w-28 rounded-lg mr-6'>Login</button>
        <button className='bg-gradient-to-l from-green-700 to-blue-500 text-white rounded-lg h-12 w-28 mr-28'>Sign up</button>
        </div>
      </nav>
      <div className='flex mt-20'>
        <div className='w-[50vw]'>
        <div className='pl-28 w-[30vw] pt-[8%]'>
          <h1 className='text-blue-500 text-3xl'>Easily engage your customers anywhere.</h1>
          <p className='pt-8'>Lorem ipsum dolor sit amet consectetur. Cursus tempor enim viverra sed. Felis quisque.</p>
          <button className='bg-gradient-to-l from-green-700 to-blue-500 text-white rounded-lg h-12 w-28 mt-10'>Get started</button>
        </div>
        </div>
        <div className=''>
          <div className='h-80 w-72 bg-[#D9D9D9] rounded-lg'>

          </div>
          <div className='h-80 w-72 bg-[#D9D9D9] rounded-lg absolute top-[40%] ml-[10%]'>

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
      <div>
        <div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage