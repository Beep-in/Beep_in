import React,{ useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

function GroupsManagement() {
  const [createGroup, setCreateGrou] = useState(false);
  return (
    <div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <button className="flex hover:text-[#6C63FF]  rounded-r-lg w-full pr-20">
         
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Create group</li>
          
        </button>
      </div>
    </div>
  );
}

export default GroupsManagement;
