import React from "react";
import Image from "next/image";
import Link from "next/link";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {
  Download,
  Filter,
  Check2All, 
  Trash3
} from "react-bootstrap-icons";

import {
  AiOutlineEye,
  AiOutlineRight,
 
} from "react-icons/ai";
import { BiChevronRightCircle,BiChevronLeftCircle } from "react-icons/bi"

import { useReducer, useRef } from "react";
import TopupPreparation from "./topupPreparation";
type ACTIONTYPE =
  | { type: "topupHistory" }
  | { type: "buySms" }


const inititialHistory = {
  topupHistory:false,
  buySms:false
}

const topupDisplay = (topup:typeof inititialHistory, action:ACTIONTYPE) => {
   topup = {
    topupHistory:false,
    buySms:false
   }
   switch(action.type){
    case "topupHistory":
      return {
        ...topup,
        topupHistory:true,
      }
      case "buySms":
        return {
          ...topup,
          buySms:true
        }
        default :
        return {
          ...topup
        }
   }
}
function Topup() {
  const [topup, display ] = useReducer(topupDisplay,inititialHistory);
  
  const tableData = [
    {
      date: "2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      messageStatus: "Sent",
      recipient: "KALIGIRWA Sonia",
      mobileNumber: "+2507783466743",
    }
  ];

  return (
    <div className="w-full">
      <div className="h-20 w-full border-b-2 border-solid flex justify-center float-right items-center">
        <h1>Topup History</h1>
        <button className="flex bg-gray-100 h-12 text-center rounded-lg absolute right-64 pl-4 w-32 items-center">Filter by <Filter className="text-blue-500  ml-2 mt-1" /></button>
        <button className="flex bg-white text-[#6C63FF] items-center text-center gap-3 absolute right-10">
          Download Report <Download />
        </button>
      </div>
      
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <button onClick={() =>display({type : "topupHistory"})}  className="flex hover:text-[#6C63FF]  rounded-r-lg w-full pr-20" >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Topup history</li>
        </button>
        <Link href="topupResult">
        <Popup trigger={
        <button className="flex hover:text-[#6C63FF] rounded-r-lg w-full pr-20">
          <AiOutlineRight className="mt-1" />
          
         <li className="pl-4">Buy SMS</li>
        </button>
        }>
        </Popup>
        </Link>
      </div>

      {topup.topupHistory && (
    <div className="h-96 w-3/4 mt-28 absolute right-10">
         <div className="flex flex-col mt-4">
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
                      {tableData.map((sms_data) => (
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {sms_data.date}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap flex">
                            {sms_data.messageStatus}{" "}
                            <Check2All className="text-green-500 ml-3" />
                          </td>
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
                <div className="flex justify-center mt-2">
                    <BiChevronLeftCircle className="text-3xl text-blue-500" />
                    <BiChevronRightCircle className="text-3xl text-blue-500" />
                  </div>
    </div>
      )}
    </div>
  );
}

export default Topup;
