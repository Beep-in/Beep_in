// import { useReducer, useState } from "react";
import Image from "next/image";
import React from "react";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Recieved",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: " sent",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    },
    {
      label: "Failed",
      data: [40, 20, 40, 51, 50, 76],
      fill: false,
      borderColor: "red"
    }
  ]
};

import {
  FaRegComments,
  FaRegAddressBook,
  FaBook,
  FaTrashAlt,
  FaRegPaperPlane,
} from "react-icons/fa";
import { GraphUp, Folder, People, JournalCheck, Download } from "react-bootstrap-icons";

import {
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineLineChart,
  AiOutlineRight,
  AiOutlineEye,
  AiOutlineCheck
} from "react-icons/ai";
import { useReducer,useRef } from "react";
// import { deflate } from "zlib";
const initialEvent = {
  message: false,
  book: false,
  teams: false,
  topup: false,
  chart: false,
};
const initialReciever = {
  single: false,
  bulk: false,
  group: false,
  messageIcon: false,
};
const initialStatics = {
  overview:false,
  report:false,
  sms_list:false
}
type ACTIONTYPE =
  | { type: "message" }
  | { type: "book" }
  | { type: "teams" }
  | { type: "topup" }
  | { type: "chart" }
  | { type: "single" }
  | { type: "bulk" }
  | { type: "group" }
  | { type: "messageIcon" }
  | { type: "overview" }
  | { type: "report" }
  | { type: "sms_list" }
 const staticsDisplay = (view: typeof initialStatics,action:ACTIONTYPE) => {
  view = {
    overview:false,
    report:false,
    sms_list:false
  }
  switch (action.type) {
    case "overview":
      return {
        ...view,
        overview: true,
      };

    case "report":
      return {
        ...view,
        report: true,
      };

    case "sms_list":
      return {
        ...view,
        sms_list: true,
      };
    default:
      return {
        ...view,
      };
  }

 }

const recieverType = (reciever: typeof initialReciever, action: ACTIONTYPE) => {
  reciever = {
    single: false,
    bulk: false,
    group: false,
    messageIcon: false,
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

const setEvents = (state: typeof initialEvent, action: ACTIONTYPE) => {
  state = {
    message: false,
    book: false,
    teams: false,
    topup: false,
    chart: false,
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

export default function Sidebar(): JSX.Element{
  const ref = useRef();
  const [state, dispatch] = useReducer(setEvents, initialEvent);
  const [recieve, display] = useReducer(recieverType, initialReciever);
  const [statistics,displayStatistics] = useReducer(staticsDisplay, initialStatics)
  const options = [
    { value: "Type numbers", label: "Type numbers" },
    { value: "upload file", label: "upload file" },
  ];

  const messageType = [
    { value: "Message Type", label: "Message Type" },
    { value: "Single", label: "Single" },
    { value: "Bulk", label: "Bulk" },
    { value: "Group", label: "Group" },
  ];
  const messageStatus = [
    { value: "Message Status", label: "Message Status" },
    { value: "Sent", label: "Sent" },
    { value: "Recieved", label: "Recieved" },
    { value: "Failed", label: "Failed" },
  ];
const tableData = [{
  date:"2020-10-12",
  messageStatus: "Sent",
  recipient: "KALIGIRWA Sonia",
  mobileNumber: "+2507783466743"
},
{
date:"2020-10-12",
messageStatus: "Sent",
recipient: "KALIGIRWA Sonia",
mobileNumber: "+2507783466743"
},
{
  date:"2020-10-12",
  messageStatus: "Sent",
  recipient: "KALIGIRWA Sonia",
  mobileNumber: "+2507783466743"
  },
  {
    date:"2020-10-12",
    messageStatus: "Sent",
    recipient: "KALIGIRWA Sonia",
    mobileNumber: "+2507783466743"
    },
    {
      date:"2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743"
      }
     

]
  return (
    <div className="flex">
      <div className="h-[76vh] w-2 border-r-2 border-[] absolute left-72 top-44"></div>
      <div className="w-24 bg-[hsl(0,0%,95%)]  pt-28 h-auto pb-9 flex gap-7 flex-col">
        <FaRegComments
          onClick={() => {
            dispatch({ type: "message" });
          }}
          className="w-full h-8   hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />
        {state.message && (
          <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
            <button
              onClick={() => display({ type: "single" })}
              className="flex  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
            >
              <AiOutlineRight className="mt-1" />
              <li className="pl-4 ">Single</li>
              {/* <AiOutlinePlus className=""/> */}
            </button>
            <button
              onClick={() => display({ type: "bulk" })}
              className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
            >
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">Bulk</li>
            </button>
            <button
              onClick={() => display({ type: "group" })}
              className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
            >
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">Group</li>
            </button>
          </div>
        )}

        <JournalCheck
          onClick={() => dispatch({ type: "book" })}
          className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />
        <People
          onClick={() => dispatch({ type: "teams" })}
          className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />
        <Folder
          onClick={() => dispatch({ type: "topup" })}
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
          onClick={() => dispatch({ type: "chart" })}
          className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light"
        />
        {state.chart && (
          <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
            <button onClick={()=> displayStatistics({type:"overview"})} className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">Overview</li>
            </button>
            <button onClick={()=> displayStatistics({type:"report"})} className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">Report</li>
            </button>
            <button onClick={() => displayStatistics({type:"sms_list"})} className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
              <AiOutlineRight className="mt-1" />
              <li className="pl-4">SMS List</li>
            </button>
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
      {statistics.overview && (
      <div className="h-96 w-3/4 mt-28 absolute right-10">
      <div className="flex justify-between">
        <h1>Today's Overview</h1>
        <button className="flex bg-white text-[#6C63FF] items-center text-center gap-3">Download Report <Download /></button>
      </div>
      <div className="flex justify-between">
        <table className="w-1/3 mt-4">
          <tr className="border-b-2">
            <th className="text-start">Messages</th>
          </tr>
          <tr>
            <td>Sent</td>
            <td>0</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Recieved</td>
            <td>0</td>
            <td>0%</td>
          </tr>
        </table>
        <table className="w-1/3 mt-4 mr-40">
          <tr className="border-b-2">
            <th className="text-start">Message Status</th>
          </tr>
          <tr>
            <td>Delivered</td>
            <td>0</td>
            <td>0%</td>
          </tr>
          <tr>
            <td>Failed</td>
            <td>0</td>
            <td>0%</td>
          </tr>
        </table>
      </div>
      <div className="mt-8">
        <h1>Today</h1>
        <div className="flex mt-4"> 
        <button className="bg-blue-400 rounded-lg text-white h-10 w-36">Sent</button>
        <button className="bg-white border-2 border-blue-400 rounded-lg ml-4 w-36">Recieved</button>
        </div>
      </div>
      <div className="h-40 w-1/2">
      <Line ref={ref} data={data} />
      </div>
      </div>
      )}
      {statistics.report && (

        <div className="h-96 w-3/4 mt-28 absolute right-10">
           <div className="flex justify-between">
        <h1 className="font-bold text-xl">Report</h1>
        <button className="flex bg-white text-[#6C63FF] items-center text-center gap-3">Download Report <Download /></button>
      </div>
       <div className="mt-4">
        <button className="bg-white text-blue-500 shadow-xl rounded-lg h-14 w-40 text-center">Sent</button>
        <button className="bg-[#6C63FF] text-white rounded-lg h-14 w-40 text-center ml-4">Recieved</button>
       </div>
       <div className="mt-12">
         <input type="date" placeholder="Start date" className="h-14 w-56 border-solid border border-[#6C63FF] border-opacity-10 rounded-lg pl-4 pr-2"/>
         <input type="date" placeholder="Start date" className="h-14 w-56 ml-14 border-solid border border-[#6C63FF] border-opacity-10 rounded-lg pl-4 pr-2"/>
       </div>
       <div className="flex mt-6">
       <select className="block border-solid border border-[#6C63FF] border-opacity-10 h-14   rounded-lg w-56 pl-3">
                  {messageType.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                  ;
                </select>
                <select className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  rounded-lg w-56 pl-3  ml-14">
                  {messageStatus.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                  ;
                </select>


       </div>
       <button className="h-14 bg-blue-500 rounded-lg text-white w-48 mt-14">Generate report</button>
      </div>
        )}
        {statistics.sms_list && (
           <div className="h-96 w-3/4 mt-28 absolute right-10">
           <div className="flex justify-between">
        <h1 className="font-bold text-xl">SMS List</h1>
        <button className="flex bg-white text-[#6C63FF] items-center text-center gap-3">Download Report <Download /></button>
      </div>
      <div className="mt-12">
         <input type="date" placeholder="Start date" className="h-14 w-56 border-solid border border-[#6C63FF] border-opacity-10 rounded-lg pl-4 pr-2"/>
         <input type="date" placeholder="Start date" className="h-14 w-56 ml-14 border-solid border border-[#6C63FF] border-opacity-10 rounded-lg pl-4 pr-2"/>
       </div>
    <div className="flex flex-col mt-10">
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Message Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Recipients
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Mobile Number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Options
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tableData.map((sms_data)=> (
                    <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                 {sms_data.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap flex">{sms_data.messageStatus} <AiOutlineCheck className="text-green-500 ml-3"/></td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                 {sms_data.recipient}      
                   </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                   {sms_data.mobileNumber}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right absolute right-4  gap-2  whitespace-nowrap flex">
                    <AiOutlineEye className="text-blue-500 text-xl" />
                    <FaTrashAlt className="text-red-500 text-xl" />
                  </td>
                </tr>
              ))}
               
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

       </div>
        )}
   
    </div>
  );
}
