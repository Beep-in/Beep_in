import React from "react";
import Image from "next/image";
import { useReducer, useRef } from "react";
import {
  
  FaRegPaperPlane,
} from "react-icons/fa";

import {
  AiOutlinePlus,
  AiOutlineRight,

} from "react-icons/ai";

const initialReciever = {
  single: false,
  bulk: false,
  group: false,
  messageIcon:true
};
type ACTIONTYPE =
  | { type: "single" }
  | { type: "bulk" }
  | { type: "group" }
  | {type: "messageIcon"}
  

const recieverType = (reciever: typeof initialReciever, action: ACTIONTYPE) => {
  reciever = {
    single: false,
    bulk: false,
    group: false,
    messageIcon:false
  };
  switch (action.type) {
    case "single":
      return {
        ...reciever,
        single: true,
      };

    case "bulk":
      return {
        ...reciever,
        bulk: true,
      };

    case "group":
      return {
        ...reciever,
        group: true,
      };
    default:
      return {
        ...reciever,
      };
  }
};

function MessageType(): JSX.Element{
  const [recieve, dispatch] = useReducer(recieverType, initialReciever);
  const options = [
    { value: "Type numbers", label: "Type numbers" },
    { value: "upload file", label: "upload file" },
  ];

  return (
    <div className="w-full">
      <div className="h-20 w-full border-b-2 border-solid flex justify-center float-right items-center">
        <h1>Messages</h1>
        <button className="bg-blue-500 h-12 w-12 text-center rounded-lg absolute right-10"><AiOutlinePlus className="text-white text-center ml-3 text-xl font-bold"/></button>
      </div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
          <button
            onClick={() => dispatch({ type: "single" })}
            className="flex  hover:text-[#6C63FF] w-full pr-20"
          >
            <AiOutlineRight className="mt-1" />
            <li className="pl-4 ">Single</li>
        
          </button>
        
        <button
          onClick={() => dispatch({ type: "bulk" })}
          className="flex hover:text-[#6C63FF] w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Bulk</li>
        </button>
        <button
          onClick={() => dispatch({ type: "group" })}
          className="flex hover:text-[#6C63FF]  w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Group</li>
        </button>
      </div>
         {recieve.messageIcon && ( 
         <div className="h-96 mt-28 absolute right-[35%]">
          <Image
            width={400}
            height={400}
            alt="signup image"
            src={"/images/messages.png"}
          />
          <h1 className="text-xl font-bold text-center pt-4 drop-shadow-lg shadow-black">
            START SENDING MESSAGES
          </h1>
        </div> 
         )} 
      {recieve.single && (
        <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
            <h1 className="text-2xl text-center">SEND MESSAGE</h1>
            <div className="bg-blue-400 w-2/3 ml-auto mr-auto"></div>
            <form action="" className=" w-3/4 ml-auto mr-auto">
              <div className="flex ml-20 mt-10">
                <label htmlFor="name" className="pt-4">
                  Sender :
                </label>
                <input
                  type="text"
                  placeholder="Add name"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-24 "
                />
              </div>
              <div className="flex ml-20 mt-4">
                <label htmlFor="name" className="pt-4">
                  Phone number :
                </label>
                <input
                  type="telephone"
                  placeholder="Add telephone"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-8"
                />
              </div>
              <div className="flex ml-20 mt-4">
                <label htmlFor="Message">Message :</label>
                <textarea
                  name="message"
                  id=""
                  placeholder="Type a message.."
                  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"
                ></textarea>
              </div>
              <button className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 ">
                <FaRegPaperPlane className="mr-3" />
                SEND
              </button>
            </form>
          </div>
        </div>
      )}

      {recieve.bulk && (
        <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
            <h1 className="text-2xl text-center">SEND MESSAGE</h1>

            <form action="" className=" w-3/4 ml-auto mr-auto">
              <div className="flex ml-36 mt-10">
                <label htmlFor="name" className="pt-4">
                  Sender :
                </label>
                <input
                  type="text"
                  placeholder="Add name"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-24 "
                />
              </div>
              <div className="flex ml-36 mt-4">
                <label htmlFor="name" className="pt-4">
                  Method type :
                </label>
                <select className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3  rounded-lg pl-8   ml-12">
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                  ;
                </select>
              </div>

              <div className="flex ml-36 mt-4">
                <label htmlFor="Message">Message :</label>
                <textarea
                  name="message"
                  id=""
                  placeholder="Type a message.."
                  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"
                ></textarea>
              </div>
              <button className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 ">
                <FaRegPaperPlane className="mr-3" />
                SEND
              </button>
            </form>
          </div>
        </div>
      )}


      {recieve.group && (
        <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
            <h1 className="text-2xl text-center">SEND MESSAGE</h1>

            <form action="" className=" w-3/4 ml-auto mr-auto">
              <div className="flex ml-36 mt-10">
                <label htmlFor="name" className="pt-4">
                  Sender :
                </label>
                <input
                  type="text"
                  placeholder="Add name"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-24 "
                />
              </div>
              <div className="flex ml-36 mt-4">
                <label htmlFor="name" className="pt-4">
                  Phone number :
                </label>
                <input
                  type="telephone"
                  placeholder="Add telephone"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-8"
                />
              </div>
              <div className="flex ml-36 mt-4">
                <label htmlFor="Message">Message :</label>
                <textarea
                  name="message"
                  id=""
                  placeholder="Type a message.."
                  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"
                ></textarea>
              </div>
              <button className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 ">
                <FaRegPaperPlane className="mr-3" />
                SEND
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessageType;
