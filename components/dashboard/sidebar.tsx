// import { useReducer, useState } from "react";
import {
  FaRegComments,
  FaRegAddressBook,
  FaBook,
  FaRegPaperPlane,
} from "react-icons/fa";
import { GraphUp } from "react-bootstrap-icons";
import {
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineLineChart,
  AiOutlineUsergroupAdd,
  AiOutlineRight,
} from "react-icons/ai";
import {useReducer } from "react";
// import { deflate } from "zlib";
const initialEvent = {
  message: true,
  book: false,
  teams: false,
  topup: false,
  chart:false,
  

};
const initialReciever = {
  single:false,
  bulk:false,
  group:false
}
type ACTIONTYPE =
    | { type: "message" }
    | { type: "book" }
    | { type: "teams"}
    | { type: "topup"}
    | {type: "chart"}
    | { type: "single"}
    | { type: "bulk" }
    | { type: "group"}
  
   const recieverType = (reciever: typeof initialReciever, action:ACTIONTYPE) =>{
    reciever = {
      single:false,
      bulk:false,
      group:false
    }
    switch(action.type){
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
          ...reciever
        }
    }

   }
  
const setEvents = (state: typeof initialEvent, action: ACTIONTYPE) => {
  state = {
    message: false,
    book: false,
    teams: false,
    topup: false,
    chart:false
  };
  switch (action.type) {
    case "message":
      return {
        ...state,
        message: true,
      };
 
    case "book":
      return {
        ...state,
        book: true,
      };
          
    case "teams":
      return {
        ...state,
        group: true,
      };
          
    case "topup":
      return {
        ...state,
        topup: true,
      };
      
      case "chart":
        return {
          ...state,
          chart: true,
        };

    default:
      return { ...state };
  }
};

export default function Sidebar() {
  
  const [state, dispatch] = useReducer(setEvents, initialEvent);
  const [recieve,display] = useReducer(recieverType, initialReciever);
    const options = [
    { value: "Type numbers", label: "Type numbers" },
    { value: "upload file", label: "upload file" },
  ];

  return (
    <div className="flex">
      <div className="h-[76vh] w-2 border-r-2 border-[] absolute left-72 top-44"></div>
      <div className="w-24 bg-[hsl(0,0%,95%)]  pt-28 h-auto pb-9 flex gap-7 flex-col">
        <FaRegComments
          onClick={() => { dispatch({type:"message"})
        
        }}
          className="w-full h-8   hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />
        {state.message && (
          <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
            <button onClick = {() => display({type:"single"})} className="flex  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">
                
                Single
              </li>
            </button>
            <button onClick = {() => display({type:"bulk"})} className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">
                Bulk
              </li>
            </button>
            <button onClick = {() => display({type:"group"})} className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4" >
                Group
              </li>
            </button>
          </div>
         )} 
        
        <FaRegAddressBook onClick={() => dispatch({type:"book"})} className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
        <AiOutlineUsergroupAdd   onClick={() => dispatch({type:"teams"})} className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
        <FaBook
         onClick={() => dispatch({type:"topup"})} 
          className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />
        {state.topup && (
          <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
            <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">Topup history</li>
            </div>
            <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">Buy SMS</li>
            </div>
            <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">SMS List</li>
            </div>
          </div>
          )}

        <AiOutlineLineChart
         onClick={() => dispatch({type:"chart"})} 
      
          className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />
        {state.chart && (
          <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
            <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">Overview</li>
            </div>
            <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">Report</li>
            </div>
            <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">SMS List</li>
            </div>
          </div>
          )}
        <div className=" gap-7 flex flex-col mt-28">
          <AiOutlinePlus className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
          <AiOutlineSetting className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
        </div>
      </div>
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
                    <option value={option.value}>{option.label}</option>
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
