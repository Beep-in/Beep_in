import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  FaRegPaperPlane,
} from "react-icons/fa";
import {
  GraphUp,
  Folder,
  People,
  JournalCheck,
  Download,
  Check2All,
  Trash3,
} from "react-bootstrap-icons";

import {
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineLineChart,
  AiOutlineRight,
  AiOutlineEye,
} from "react-icons/ai";
import { useReducer, useRef } from "react";
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
  | { type: "sms_list" };

const initialStatics = {
  overview: false,
  report: false,
  sms_list: false,
};
const staticsDisplay = (view: typeof initialStatics, action: ACTIONTYPE) => {
  view = {
    overview: false,
    report: false,
    sms_list: false,
  };
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
};
function Dashboard(): JSX.Element{
  const [statistics, displayStatistics] = useReducer(
    staticsDisplay,
    initialStatics
  );
  const ref = useRef();

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
    <div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <button
          onClick={() => displayStatistics({ type: "overview" })}
          className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Overview</li>
        </button>
        <button
          onClick={() => displayStatistics({ type: "report" })}
          className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Report</li>
        </button>
        <button
          onClick={() => displayStatistics({ type: "sms_list" })}
          className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">SMS List</li>
        </button>
      </div>
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
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap flex">{sms_data.messageStatus} <Check2All className="text-green-500 ml-3"/></td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                 {sms_data.recipient}      
                   </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                   {sms_data.mobileNumber}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right absolute right-4  gap-2  whitespace-nowrap flex">
                    <AiOutlineEye className="text-blue-500 text-xl" />
                    <Trash3 className="text-red-500 text-xl" />
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

export default Dashboard;
