import Image from "next/image"
import Link from "next/link"
export default function Signin(){
    return(
        <div>
            <div>
            {/* <img src="./icons/corner.svg" alt="corner" className="mt-0" />*/}
            <img src="/icons/logo.svg" alt="logo"  className='ml-auto mr-auto mt-4'/> 

            </div>
            {/* <div className='relative'> */}
            <div className="flex mt-8 justify-center">
            <div className='mt-6'>
             <Image 
              width={600}
              height={600}
             alt='signup image'
             src={'/images/login.png'}
             
             />
            </div>
            {/* </div> */}
            <div className="float-right w-1/2 h-auto pb-10" >
              
             <h1 className='text-center font-karia font-bold text-2xl'>Welcome back</h1>
             <form action="" className='block mt-16  ml-[25%]'>
                <input type="email" placeholder='Email' className=' block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6 rounded-lg pl-8 '/>
                <input type="password" placeholder='Password' className='block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-4'/>
                <div className="flex justify-evenly mt-4">
                <div className="flex ">
                <input type="checkbox" className='h-4 w-4 mt-4 relative  border-solid border border-[#6C63FF] border-opacity-10 flex' /><span className='pl-2 font-karia pt-3 '>Remember me</span>
                 </div>
                <a href="" className="pt-3 font-karia text-[#6C63FF]">Forgot password?</a>
                </div>
                <button className='rounded-lg bg-[#6C63FF] block text-white w-52 h-12 ml-auto mr-auto mt-6 font-semibold'>Log in</button>
                <div className='flex mt-4 ml-16'>
                <img src="/icons/line1.svg" alt="line1" />
                <p className='text-[#6C63FF] pl-2 pr-2'>OR</p>
                <img src="/icons/line1.svg" alt="line1" />
                </div>
                <button className='bg-[#D9D9D9] bg-opacity-10 flex shadow-md font-karia  shadow-slate-400  rounded-lg h-12 w-64 text-center items-center pl-8 ml-auto mr-auto mt-4'><img src="/icons/google.svg" alt="google" className='pr-3'/>Sign In With Google</button>
                <p className='font-karia pt-8 text-center'>Don't have an account?<Link href = "/dashboard/navbar" className='text-[#6C63FF] pl-1'>Sign up</Link></p>
             </form> 
          
          </div>
          </div>
        </div>
    )
}