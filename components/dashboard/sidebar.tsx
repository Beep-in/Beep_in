import {
  FaRegComments,
  FaRegAddressBook,
  FaBook,
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

  return (
    <div className="flex">
      <div className="w-24 bg-[hsl(0,0%,95%)]  pt-28 h-auto pb-9 flex gap-7 flex-col">
       
        <FaRegComments 
        onClick={()=> setShow(!show)}
        className="w-full h-8  hover:text-[#6C63FF] hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />   
        {show && <div className="absolute left-32 top-56 list-none flex gap-8 flex-col border-r-2 ">
   
            <div className="flex"><AiOutlineRight /><li className="">Personal</li></div>
            <div className="flex"><AiOutlineRight /><li className="">Bulk</li></div>
            <div className="flex"><AiOutlineRight /><li className="">Group</li></div>

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
    
    </div>

  );
}
