
import { AiOutlineRight } from "react-icons/ai";
import { useState,useReducer } from "react";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import { Upload } from "react-bootstrap-icons";
type ACTIONTYPE = 
 | { type: "typeContacts"}
 | { type: "uploadFile"}


const initialMethod = {
  typeContacts: false,
  uploadFile:false
}
const methodType = (method: typeof initialMethod,action: ACTIONTYPE ) => {
   method = {
    typeContacts: false,
    uploadFile: false
   }
   switch(action.type) {
    case "typeContacts":
      return {
        ...method,
        typeContacts:true
      }
    case "uploadFile" : 
    return {
      ...method,
      uploadFile:true
    }
    default: 
    return {
      ...method
    }

    }
   }

function GroupsManagement() {
  const [createGroup, setCreateGroup] = useState(false);
  const [method, setDisplayMethod] = useReducer(methodType, initialMethod);
  return (
    <div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <button onClick = {() => setCreateGroup(true)} className="flex hover:text-[#6C63FF]  rounded-r-lg w-full pr-20"> 
          
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Group</li>
        </button>
        <button className="flex hover:text-[#6C63FF]  rounded-r-lg w-full pr-20">
        
         <AiOutlineRight className="mt-1" />
         <li className="pl-4">Group list</li>
         
       </button>
      </div>
       {createGroup && (
             <div className="h-full w-full bg-gray-800 opacity-90 absolute top-0 left-0">
              <div className="h-[74vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <img
                src="/icons/group.svg"
                alt="topup-tick"
                className="pt-6 ml-[14vw]"
              />
              <h1 className="text-center font-bold text-2xl">Create a group</h1>
               <form action="" className="ml-16 mt-10">
                <input
                  type="text"
                  name="groupname"
                  placeholder="Name of agent"
                  required
                  className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 "
                />
                  <select
              name="agent"
              id=""
              required
              className="block border-solid border bg-[#D9D9D9] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-6 "
            >
              <option value="">Type of agent</option>
              <option value="">Admin</option>
              <option value="">Super Reseller</option>
              <option value="">Reseller</option>
              <option value="">Agent</option>
            </select>
            <p className="pt-8 font-bold">What kind of method do you prefer?</p>
            <div className="flex items-center mt-3">
                <input
                  onClick={() => setDisplayMethod({type:"typeContacts"})}
                  id="default-radio-2"
                  type="radio"
                  value="typeContact"
                  name="default-radio"
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 pl-8"
             
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Type contacts
                </label>
              <div className="flex items-center">
                <input
                onClick={() => setDisplayMethod({type: "uploadFile"})}
                  id="default-radio-2"
                  type="radio"
                  value="uploadFile"
                  name="default-radio"
                  className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 ml-10"
                  
                  />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                 Upload a file
                </label>
                    </div>
                  </div>

                  <div className="block">
                  {method.typeContacts && (
                   <textarea className="h-24 mt-4 w-5/6 min-h-24 max-h-24 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 pl-8 pt-4 rounded-lg" placeholder="Type telephone numbers of group members">
                   
                   </textarea>
                  )}
                  {method.uploadFile && (
                     <div className="flex mt-4 w-full">
                     <label className="flex flex-col items-center justify-center w-5/6 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                       <div className="flex flex-col items-center justify-center pt-5 pb-6">
                         <Upload className="text-3xl mt-4" />
                         <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 pt-4 pb-4">
                           Upload contacts
                         </p>
                       </div>
                       <input id="dropzone-file" type="file" className="hidden" />
                     </label>
                   </div>
                  )}
                  </div>
                </form>
                <button
               
                className="flex float-right mr-20 mt-4 items-center font-normal"
              >
                Continue
                <BiChevronRightCircle className="text-4xl text-blue-500 ml-4" />
              </button>
               </div>
               </div>
       )}
    </div>
  );
}

export default GroupsManagement;
