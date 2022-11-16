import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
function AddMessage() {
  return (
    <div>
      <div className=" flex w-[120em] float-right h-20 border-b-2 justify-center items-center ">
        <h1 className="pl-64">Messages</h1>
        <button className="flex bg-[#6C63FF]  text-white rounded-lg h-10 w-24 items-center text-center pl-4 absolute right-10">
          <AiOutlinePlus className="" />
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddMessage;
