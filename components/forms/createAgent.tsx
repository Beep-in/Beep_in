import React from 'react'
import { useReducer } from 'react'
type ACTIONTYPE = 
| { type : "agentType"}
| { type : "superReseller"}
| { type : "reseller" }
| { type : "agent"}


const initialUser = { 
  agentType: true,
  superReseller : false,
  reseller : false,
  agent : false

}
const createUser = (user: typeof initialUser, action: ACTIONTYPE) => {
 user = {
  agentType: false,
  superReseller : false,
  reseller : false,
  agent : false
}
switch (action.type){
  case "agentType": 
  return {
    ...user,
    agentType : true
  }
  case "superReseller": 
  return {
    ...user,
    superReseller : true
  }
  case "reseller": 
  return {
    ...user,
    reseller : true
  }
  case "agent":
    return {
      ...user,
     agent :true
    }
    default : 
    return {
      ...user
    }
}
}
function CreateAgent() {
  const [user , dispatch] = useReducer(createUser,initialUser);
  return (
    <div>
      {user.agentType && (

        <div className='flex flex-col mt-24'>
      <h1 className='text-3xl font-extrabold text-center uppercase'>Which agent do you want to create?</h1>
      <div className='mt-14 flex flex-col ml-auto mr-auto'>

      <button onClick={() => dispatch({type: "superReseller"})} className='h-16 w-96 bg-blue-500 text-white text-center rounded-xl'>SUPER RESELLER</button>
      <button onClick={() => dispatch({type: "reseller"})} className='h-16 w-96 bg-blue-500 text-white text-center rounded-xl mt-10'>RESELLER</button>
      <button onClick={() => dispatch({type: "agent"})} className='h-16 w-96 bg-blue-500 text-white text-center rounded-xl mt-10'>AGENT</button>
      </div>
        </div>
        )}
        {user.superReseller && (
          <div>
            <div className='flex justify-center mt-8'>
           <img src="/icons/logo.svg" alt="" className='text-center' />
           </div>
           <p className='text-center'>Register Agents to give them access to Beep-In platform</p>
           <div className='mt-14 w-1/3 ml-auto mr-auto'>
           <form action="" className='flex flex-col'>
            <input type="text" placeholder='Names' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10' />
            <input type="text" placeholder='Email' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6'/>
            <input type="tel" placeholder='Contact Phone' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
            <input type="text" placeholder='TIN/NID' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6 '/>
            <input type="text" placeholder='Address' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
            <input type="text" placeholder='Password' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
            <div className='mt-8 flex justify-between'>
              <button className='h-14 w-28 shadow-sm rounded-xl shadow-slate-500 bg-white text-blue-500'>CANCEL</button>
              <button className='h-14 w-28 bg-blue-500 text-white rounded-xl '>SAVE</button>
            </div>
           </form>
           </div>
          </div>
        )}
        {user.reseller && (
           <div>
           <div className='flex justify-center mt-8'>
          <img src="/icons/logo.svg" alt="" className='text-center' />
          </div>
          <p className='text-center'>Register Agents to give them access to Beep-In platform</p>
          <div className='mt-14 w-1/3 ml-auto mr-auto'>
          <form action="" className='flex flex-col'>
           <input type="text" placeholder='Reseller Names' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10' />
           <input type="text" placeholder='Reseller Email' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6'/>
           <input type="tel" placeholder='Reseller Contact Phone' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
           <input type="text" placeholder='TIN/NID' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6 '/>
           <input type="text" placeholder='Reseller Address' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
           <input type="text" placeholder='Password' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
           <div className='mt-8 flex justify-between'>
             <button className='h-14 w-28 shadow-sm rounded-xl shadow-slate-500 bg-white text-blue-500'>CANCEL</button>
             <button className='h-14 w-28 bg-blue-500 text-white rounded-xl '>SAVE</button>
           </div>
          </form>
          </div>
         </div>
        )}
        {user.agent && (
           <div>
           <div className='flex justify-center mt-8'>
          <img src="/icons/logo.svg" alt="" className='text-center' />
          </div>
          <p className='text-center'>Register Agents to give them access to Beep-In platform</p>
          <div className='mt-14 w-1/3 ml-auto mr-auto'>
          <form action="" className='flex flex-col'>
           <input type="text" placeholder='Agent Names' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10' />
           <input type="text" placeholder='Agent Email' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6'/>
           <input type="tel" placeholder='Agent Contact Phone' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
           <input type="text" placeholder='TIN/NID' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6 '/>
           <input type="text" placeholder='Agent Address' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
           <input type="text" placeholder='Password' className='h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6' />
           <div className='mt-8 flex justify-between'>
             <button className='h-14 w-28 shadow-sm rounded-xl shadow-slate-500 bg-white text-blue-500'>CANCEL</button>
             <button className='h-14 w-28 bg-blue-500 text-white rounded-xl '>SAVE</button>
           </div>
          </form>
          </div>
         </div>
        )
        }
    </div>
  )
}

export default CreateAgent