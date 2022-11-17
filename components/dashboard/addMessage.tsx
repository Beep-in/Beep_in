import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
function AddMessage() {
  return (
    <div>
      <div className=" flex w-[120em] float-right h-20 border-b-2 justify-center items-center ">
        <h1 className="pl-64">Messages</h1>
        <button className="flex bg-[#6C63FF]  text-white rounded-lg h-12  items-center pl-3 w-12 absolute right-14">
          <AiOutlinePlus className="text-xl" />
        
        </button>
      </div>
    </div>
  );
}

export default AddMessage;
