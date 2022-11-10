import {
  FaRegComments,
  FaRegAddressBook,
  FaBook,
  FaRegPaperPlane
} from "react-icons/fa";
import {
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineLineChart,
  AiOutlineUsergroupAdd,
  AiOutlineRight
} from "react-icons/ai";
import { useState } from "react";
export default function Sidebar() {
  const [show, setShow] = useState(false)
  const [single,setSingle] = useState(false)
  const [bulk,setBulk] = useState(false)
  const  [group,setGroup] = useState(false);

  return (
    <div className="flex">
      <div className="h-[76vh] w-2 border-r-2 border-[] absolute left-72 top-44">

      </div>
      <div className="w-24 bg-[hsl(0,0%,95%)]  pt-28 h-auto pb-9 flex gap-7 flex-col">
       
        <FaRegComments 
        onClick={()=> setShow(!show)}
        className="w-full h-8  hover:text-[#6C63FF] hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />   
        {show && <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
   
            <div className="flex"><AiOutlineRight className="mt-1" /><li className="pl-4"
            onClick={()=> setSingle(!single)} 
            >Single</li>           
            </div>
            <div className="flex"><AiOutlineRight className="mt-1"/><li className="pl-4" onClick={() => setBulk(!bulk)}>Bulk</li></div>
            <div className="flex"><AiOutlineRight className="mt-1" /><li className="pl-4" onClick={() => setGroup(!group)}>Group</li></div>

          </div>}
      
        <FaRegAddressBook className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
        <AiOutlineUsergroupAdd className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
        <FaBook className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
        <AiOutlineLineChart className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
        <div className=" gap-7 flex flex-col mt-28">
          <AiOutlinePlus className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
          <AiOutlineSetting className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
        </div>
      </div>
      {single && <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
             <h1 className="text-2xl text-center">SEND MESSAGE</h1>
             {/* <div className="bg-blue-400 w-2/3 ml-auto mr-auto"> */}
             <form action="" className=" w-3/4 ml-auto mr-auto">
              <div className="flex ml-36 mt-10">
             <label htmlFor="name" className="pt-4">Sender :</label>
             <input type="text" placeholder="Add name"  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-24 "/>
             </div>
             <div className="flex ml-36 mt-4">
             <label htmlFor="name" className="pt-4" >Phone number :</label>
             <input type="telephone" placeholder="Add telephone"  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-8"/>
             </div>
             <div className="flex ml-36 mt-4">
             <label htmlFor="Message">Message :</label>
             <textarea name="message" id="" placeholder="Type a message.."  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"></textarea>
             </div>
             <button className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 "><FaRegPaperPlane className="mr-3" />SEND</button>
             </form>
             </div>
          {/* </div> */}
            </div> }

            {bulk && <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
             <h1 className="text-2xl text-center">SEND MESSAGE</h1>
             {/* <div className="bg-blue-400 w-2/3 ml-auto mr-auto"> */}
             <form action="" className=" w-3/4 ml-auto mr-auto">
              <div className="flex ml-36 mt-10">
             <label htmlFor="name" className="pt-4">Sender :</label>
             <input type="text" placeholder="Add name"  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-24 "/>
             </div>
             <div className="flex ml-36 mt-4">
             <label htmlFor="name" className="pt-4" >Method type :</label>

             <select
              name="agent"
              id=""
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3  rounded-lg pl-8   ml-12"
            >
              <option value="">Choose method</option>
              <option value="">Type numbers</option>
              <option value="">Upload file</option>
              
            </select>            
             </div>
             <div className="flex ml-36 mt-4">
             <label htmlFor="Message">Message :</label>
             <textarea name="message" id="" placeholder="Type a message.."  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"></textarea>
             </div>
             <button className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 "><FaRegPaperPlane className="mr-3" />SEND</button>
             </form>
             </div>
          {/* </div> */}
            </div> }    
            {group && <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
             <h1 className="text-2xl text-center">SEND MESSAGE</h1>
             {/* <div className="bg-blue-400 w-2/3 ml-auto mr-auto"> */}
             <form action="" className=" w-3/4 ml-auto mr-auto">
              <div className="flex ml-36 mt-10">
             <label htmlFor="name" className="pt-4">Sender :</label>
             <input type="text" placeholder="Add name"  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-24 "/>
             </div>
             <div className="flex ml-36 mt-4">
             <label htmlFor="name" className="pt-4" >Phone number :</label>
             <input type="telephone" placeholder="Add telephone"  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-8"/>
             </div>
             <div className="flex ml-36 mt-4">
             <label htmlFor="Message">Message :</label>
             <textarea name="message" id="" placeholder="Type a message.."  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"></textarea>
             </div>
             <button className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 "><FaRegPaperPlane className="mr-3" />SEND</button>
             </form>
             </div>
          {/* </div> */}
            </div> }
    </div>

  );
}
