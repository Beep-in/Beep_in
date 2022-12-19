import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { PieChart, Pie } from "recharts";
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Recieved",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: " sent",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
    {
      label: "Failed",
      data: [40, 20, 40, 51, 50, 76],
      fill: false,
      borderColor: "red",
    },
  ],
};
const details = [
  { name: "Accepted topup requests", students: 400 ,fill: "#8a000080",label:"25%"},
  { name: "Pending topup requests", students: 400,fill: "#E5DAFB",label:"25%"},
  { name: "Denied topup requests ", students: 600,fill: "#4caf5080",label:"50%"},
];

import { Download, Check2All, Trash3, People,Archive } from "react-bootstrap-icons";
import { BiChevronRightCircle,BiChevronLeftCircle } from "react-icons/bi"
import { AiOutlineRight, AiOutlineEye } from "react-icons/ai";
import { useReducer, useRef } from "react";
type ACTIONTYPE =
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
function Dashboard(): JSX.Element {
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
  ];

  return (
    <div className="w-full">
      <div className="h-14 w-full border-b-2 border-solid flex justify-center float-right items-center">
        <h1>Analytics</h1>
        <button className="flex bg-white text-[#6C63FF] items-center text-center gap-3 absolute right-10">
          Download Report <Download />
        </button>
      </div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <button
          onClick={() => displayStatistics({ type: "overview" })}
          className="flex hover:text-[#6C63FF]  w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Overview</li>
        </button>
        <button
          onClick={() => displayStatistics({ type: "report" })}
          className="flex hover:text-[#6C63FF] rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Report</li>
        </button>
        <button
          onClick={() => displayStatistics({ type: "sms_list" })}
          className="flex hover:text-[#6C63FF] rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">SMS List</li>
        </button>
      </div>
      {statistics.overview && (
        <div className="h-96 w-3/4 mt-16 absolute right-10 ">
            <h1 className="font-bold
            ">Today's Overview</h1>
          <div className="flex">
            <div className="flex">
       
         
          <div className="flex mt-2 w-1/2">
            <div className="">
              <div className="flex">
            <PieChart width={100} height={100}>
              <Pie
                data={details}
                dataKey="students"
                outerRadius={50}
              />

            </PieChart>
            <div className="block mt-4 ml-4">
            <div className="flex">
              <div className="h-4 w-4 bg-[#4caf5080] rounded-full mt-1">
              </div>
                <p className="pl-2">Accepted topup requests</p>
              </div>
              <div className="flex">
              <div className="h-4 w-4 bg-[#E5DAFB] rounded-full mt-1">
              </div>
                <p className="pl-2">Pending topup requests</p>
              </div>
              <div className="flex">
              <div className="h-4 w-4 bg-[#8a000080] rounded-full mt-1">
              </div>
                <p className="pl-2">Denied topup requests </p>
              </div>
              </div>
            </div>
            <div className="flex mt-6">
            <div className="h-8 w-8 bg-slate-200 rounded-lg text-center items-center flex">
              <People className="text-blue-500 text-xl text-center ml-2" />
              </div>
              <div className="pl-8">
                <h1>Your groups</h1>
                <p>50</p>
            </div>
            <div className="h-8 w-8 bg-slate-200 rounded-lg text-center items-center flex ml-24">
              <People className="text-green-500 text-xl text-center ml-2"/>
              </div>
              <div className="pl-8">
                <h1>Your groups</h1>
                <p>50</p>
            </div>
          </div>
          <div className="flex">
            <div className="h-8 w-8 bg-slate-200 rounded-lg text-center items-center flex">
              <People className="text-green-500 text-xl text-center ml-2" />
              </div>
              <div className="pl-8">
                <h1>Your groups</h1>
                <p>50</p>
            </div>
            <div className="h-8 w-8 bg-slate-200 rounded-lg text-center items-center flex ml-24">
              <People className="text-blue-500 text-xl text-center ml-2" />
              </div>
              <div className="pl-8">
                <h1>Your groups</h1>
                <p>50</p>
            </div>
          </div>
          <div className="">
            <div className="flex mt-4 w-5/6 border-b-2 border-solid pb-4">
            <h1>Recent Activity</h1>
            <Archive className = "pt-1 ml-40 mr-2" />
            <p>6 Sep 20 - 13 Sep 20</p>
            </div>
            <div className="flex mt-4">
              <button className="bg-blue-400 rounded-lg text-white h-10 w-36">
                Sent
              </button>
              <button className="bg-white border-2 border-blue-400 rounded-lg ml-4 w-36">
                Recieved
              </button>
            </div>
          </div>
          <div className="h-56 w-[40vw]">
            <Line ref={ref} data={data} />
          </div>
            </div>
            </div>
            <div className="block">
            <table className="w-[18vw] h-36">
              <tr className="border-b-2">
                <th className="text-start">Message Status</th>
                <th>Rate</th>
                <th>Rate</th>
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
            <div className="mt-6">
              <h1 className="font-bold">Your cards</h1>
            <div className="h-12 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl">
                
                </div>
                <div className="h-12 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl">
                
                </div>
                <div className="h-12 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl">
                
            </div>
                </div>
                </div>
            </div>
            <div className="block absolute right-0">
              <h1 className="font-bold">Recent Agents</h1>
              <p>15 participants</p>
              <div className="flex mt-6">
              <div className="h-12 w-12 rounded-full bg-slate-200 hover:border-b-4 hover:border-solid hover:border-blue-400"></div>
              <div className="h-12 w-12 rounded-full bg-slate-200 ml-2"></div>
              <div className="h-12 w-12 rounded-full bg-slate-200 ml-2"></div>
              <div className="h-12 w-12 rounded-full bg-slate-200 ml-2"></div>
              <div className="h-12 w-12 rounded-full bg-slate-200 ml-2"></div>
              <AiOutlineRight className="mt-4 ml-4" />

              </div>
               <h1 className="font-bold pt-6">Groups</h1>
              <div className="h-36 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl flex pt-4">
              <div className="h-10 w-10 rounded-full bg-slate-200 ml-2"></div>
              <div className="h-10 w-10 rounded-full bg-slate-200 ml-[-15px]"></div>
              <div className="h-10 w-10 rounded-full bg-slate-200 ml-[-15px]"></div>
              <div className="h-10 w-10 rounded-full bg-slate-200 ml-[-15px]"></div>
              <div className="h-12 w-12 rounded-full bg-white ml-6 border-dashed border-2 text-center items-center">
                <p className="pt-2">+15</p>
              </div>
              </div>
              <h1 className="font-bold pt-6">New Topup Requests</h1>
              <div className="h-36 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl">
                
                </div>
            </div>
          </div>
       
   
   
        </div>
      )}
      {statistics.report && (
        <div className="h-96 w-3/4 mt-20 absolute right-10">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Report</h1>
            <button className="flex bg-white text-[#6C63FF] items-center text-center gap-3">
              Download Report <Download />
            </button>
          </div>
          <div className="mt-4">
            <button className="bg-white text-blue-500 shadow-xl rounded-lg h-14 w-40 text-center">
              Sent
            </button>
            <button className="bg-[#6C63FF] text-white rounded-lg h-14 w-40 text-center ml-4">
              Recieved
            </button>
          </div>
          <div className="mt-12">
            <input
              type="date"
              placeholder="Start date"
              className="h-14 w-56 border-solid border border-[#6C63FF] border-opacity-10 rounded-lg pl-4 pr-2"
            />
            <input
              type="date"
              placeholder="Start date"
              className="h-14 w-56 ml-14 border-solid border border-[#6C63FF] border-opacity-10 rounded-lg pl-4 pr-2"
            />
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
          <button className="h-14 bg-blue-500 rounded-lg text-white w-48 mt-14">
            Generate report
          </button>
        </div>
      )}
      {statistics.sms_list && (
        <div className="h-96 w-3/4 mt-20 absolute right-10">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">SMS List</h1>
            <button className="flex bg-white text-[#6C63FF] items-center text-center gap-3">
              Download Report <Download />
            </button>
          </div>
          <div className="mt-12">
            <input
              type="date"
              placeholder="Start date"
              className="h-14 w-56 border-solid border border-[#6C63FF] border-opacity-10 rounded-lg pl-4 pr-2"
            />
            <input
              type="date"
              placeholder="Start date"
              className="h-14 w-56 ml-14 border-solid border border-[#6C63FF] border-opacity-10 rounded-lg pl-4 pr-2"
            />
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
                  <div className="flex justify-center mt-8">
                    <BiChevronLeftCircle className="text-3xl text-blue-500" />
                    <BiChevronRightCircle className="text-3xl text-blue-500" />
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
