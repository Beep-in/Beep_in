import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

// import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { PieChart, Pie } from "recharts";
const data = [
  { label: "January", sent: 21, recieved: 41, failed: 51 },
  { label: "February", sent: 35, recieved: 79, failed: 45 },
  { label: "March", sent: 75, recieved: 57, failed: 89 },
  { label: "April", sent: 51, recieved: 47, failed: 61 },
  { label: "May", sent: 41, recieved: 63, failed: 32 },
  { label: "June", sent: 47, recieved: 71, failed: 67 },
];
const details = [
  {
    name: "Accepted topup requests",
    students: 400,
    fill: "#8a000080",
    label: "25%",
  },
  {
    name: "Pending topup requests",
    students: 400,
    fill: "#E5DAFB",
    label: "25%",
  },
  {
    name: "Denied topup requests ",
    students: 600,
    fill: "#4caf5080",
    label: "50%",
  },
];

import {
  Download,
  Check2All,
  Trash3,
  People,
  Archive,
} from "react-bootstrap-icons";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
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
      time: "12:00AM",
      message: "Hello.....",
      recipient: "KALIGIRWA Sonia",
      status: "Delivered",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      time: "12:00AM",
      message: "Hello.....",
      recipient: "KALIGIRWA Sonia",
      status: "Delivered",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      time: "12:00AM",
      message: "Hello.....",
      recipient: "KALIGIRWA Sonia",
      status: "Delivered",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      time: "12:00AM",
      message: "Hello.....",
      recipient: "KALIGIRWA Sonia",
      status: "Delivered",
      mobileNumber: "+2507783466743",
    },
    {
      date: "2020-10-12",
      time: "12:00AM",
      message: "Hello.....",
      recipient: "KALIGIRWA Sonia",
      status: "Delivered",
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
      <div className="absolute left-24 top-52 list-none flex gap-8 flex-col">
        <button
          onClick={() => displayStatistics({ type: "overview" })}
          className="flex hover:text-[#6C63FF] w-auto focus:h-12 items-center pr-28 focus:bg-gradient-to-r from-blue-100 via-sky-100 focus:bg-opacity-5"
        >
          <AiOutlineRight className="mt-1 ml-2" />
          <li className="pl-4">Overview</li>
        </button>
        <button
          onClick={() => displayStatistics({ type: "report" })}
          className="flex hover:text-[#6C63FF] w-auto focus:h-12 items-center pr-28 focus:bg-gradient-to-r from-blue-100 via-sky-100 focus:bg-opacity-5"
        >
          <AiOutlineRight className="mt-1 ml-2" />
          <li className="pl-4">Report</li>
        </button>
        <button
          onClick={() => displayStatistics({ type: "sms_list" })}
          className="flex hover:text-[#6C63FF] w-auto focus:h-12 items-center pr-28 focus:bg-gradient-to-r from-blue-100 via-sky-100 focus:bg-opacity-5"
        >
          <AiOutlineRight className="mt-1 ml-2" />
          <li className="pl-4">SMS List</li>
        </button>
      </div>
      {statistics.overview && (
        <div className="h-96 w-3/4 mt-16 absolute right-10 ">
          <h1
            className="font-bold
            "
          >
            Today's Overview
          </h1>
          <div className="flex">
            <div className="flex">
              <div className="flex mt-2 w-1/2">
                <div className="">
                  <div className="flex">
                    <PieChart width={100} height={100}>
                      <Pie data={details} dataKey="students" outerRadius={50} />
                    </PieChart>
                    <div className="block mt-4 ml-4">
                      <div className="flex">
                        <div className="h-4 w-4 bg-[#4caf5080] rounded-full mt-1"></div>
                        <p className="pl-2 pt-1 text-sm">
                          Accepted topup requests
                        </p>
                      </div>
                      <div className="flex">
                        <div className="h-4 w-4 bg-[#E5DAFB] rounded-full mt-1"></div>
                        <p className="pl-2 pt-1 text-sm">
                          Pending topup requests
                        </p>
                      </div>
                      <div className="flex">
                        <div className="h-4 w-4 bg-[#8a000080] rounded-full mt-1"></div>
                        <p className="pl-2 pt-1 text-sm">
                          Denied topup requests{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-4">
                    <div className="h-7 w-7 bg-slate-200 rounded-lg text-center items-center flex">
                      <People className="text-[#6C63FF] text-xl text-center ml-1" />
                    </div>
                    <div className="pl-8">
                      <p className="text-sm">Your groups</p>
                      <p>50</p>
                    </div>
                    <div className="h-7 w-7 bg-slate-200 rounded-lg text-center items-center flex ml-24">
                      <People className="text-green-500 text-xl text-center ml-1" />
                    </div>
                    <div className="pl-8">
                      <p className="text-sm">Your groups</p>
                      <p>50</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-7 w-7 bg-slate-200 rounded-lg text-center items-center flex">
                      <People className="text-green-500 text-xl text-center ml-1" />
                    </div>
                    <div className="pl-8">
                      <p className="text-sm">Your groups</p>
                      <p>50</p>
                    </div>
                    <div className="h-7 w-7 bg-slate-200 rounded-lg text-center items-center flex ml-24">
                      <People className="text-[#6C63FF] text-xl text-center ml-1" />
                    </div>
                    <div className="pl-8">
                      <p className="text-sm">Your groups</p>
                      <p>50</p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex mt-2 w-2/3 border-b-2 border-solid pb-2">
                      <h1>Recent Activity</h1>
                    </div>
                    <div className="flex mt-2">
                      <button className="bg-blue-400 rounded-lg text-white h-8 w-24">
                        Sent
                      </button>
                      <button className="bg-white border-2 border-blue-400 rounded-lg ml-4 w-24 h-8">
                        Recieved
                      </button>
                    </div>
                  </div>
                  <div className="h-56 w-[40vw]">
                    <div className="ml-[-2em]">
                      <div className="section-content">
                        <ResponsiveContainer width="70%" height={300}>
                          <LineChart
                            className="text-[10px]"
                            data={data}
                            margin={{ top: 25, right: 0, bottom: 0, left: 0 }}
                          >
                            <Tooltip />
                            <XAxis dataKey="label" />
                            <YAxis />
                            <CartesianGrid
                              stroke="#ccc"
                              strokeDasharray="5 5"
                            />
                            <Legend />
                            <Line type="monotone" dataKey="sent" stroke="red" />
                            <Line
                              type="monotone"
                              dataKey="recieved"
                              stroke="#17A8F5"
                            />
                            <Line
                              type="monotone"
                              dataKey="failed"
                              stroke="#009355"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block ml-10">
                <table className="w-[18vw] h-36">
                  <tr className="border-b-2">
                    <th className="text-start">Message Status</th>
                    <th>Rate</th>
                    <th>Rate</th>
                  </tr>
                  <tr>
                    <td>Sent</td>
                    <td>0</td>
                    <td>0%</td>
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
                <div className="mt-20">
                  <h1 className="font-bold">Your cards</h1>
                  <div className="h-12 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl pt-2 pl-4 flex">
                    <img
                      src="/images/masterCard.png"
                      alt="masterCard"
                      className="h-8 w-10 "
                    />
                    <p className="pt-2 pl-2">Master card</p>
                  </div>
                  <div className="h-12 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl pl-4 pt-2 flex">
                    <img
                      src="/images/payPal.png"
                      alt="masterCard"
                      className="h-8 w-10 "
                    />
                    <p className="pt-2 pl-3">Paypal</p>
                  </div>
                  <div className="h-12 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl pt-2 pl-4 flex">
                    <img
                      src="/images/visa.png"
                      alt="masterCard"
                      className="h-8 w-10 "
                    />
                    <p className="pt-2 pl-3">Visa</p>
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
              <div className="h-48 w-56 bg-white shadow-lg shadow-grey-200 mt-6 rounded-xl">
                <div className="flex border-b-2 border-solid border-[#6C63FF] border-opacity-10 pb-1 pt-2 ml-2">
                  <img
                    src="/images/profile.jpg"
                    alt="profile"
                    className="rounded-full h-8 w-8"
                  />
                  <p className="pl-2 pt-1">Kaligirwa Sonia</p>
                </div>
                <div className="flex border-b-2 border-solid border-[#6C63FF] border-opacity-10 pb-1 pt-2 ml-2">
                  <img
                    src="/images/profile.jpg"
                    alt="profile"
                    className="rounded-full h-8 w-8"
                  />
                  <p className="pl-2 pt-1">Kaligirwa Sonia</p>
                </div>
                <div className="flex border-b-2 border-solid border-[#6C63FF] border-opacity-10 pb-1 pt-2 ml-2">
                  <img
                    src="/images/profile.jpg"
                    alt="profile"
                    className="rounded-full h-8 w-8"
                  />
                  <p className="pl-2 pt-1">Kaligirwa Sonia</p>
                </div>
                <div className="flex  pt-2 ml-2">
                  <img
                    src="/images/profile.jpg"
                    alt="profile"
                    className="rounded-full h-8 w-8"
                  />
                  <p className="pl-2 pt-1">Kaligirwa Sonia</p>
                </div>
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
            <button className="bg-white text-[#6C63FF] shadow-xl rounded-lg h-14 w-40 text-center">
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
          <button className="h-14 bg-[#6C63FF] rounded-lg text-white w-48 mt-14">
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
          <div className="mt-8">
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
          <div className="flex flex-col mt-2">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden ">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3  text-left ">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3  text-left   ">
                          Message
                        </th>
                        <th scope="col" className="px-6 py-3 text-left ">
                          Recipients
                        </th>
                        <th scope="col" className="px-6 py-3 text-right ">
                          Mobile Number
                        </th>
                        <th scope="col" className=" py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3  text-right ">
                          Options
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tableData.map((sms_data) => (
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {sms_data.date}
                            <p className="text-gray-300 text-xs">
                              {sms_data.time}
                            </p>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap flex">
                            {sms_data.message}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {sms_data.recipient}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            {sms_data.mobileNumber}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <button className="bg-[#4CAF50] bg-opacity-5 h-8 w-32 rounded-lg text-green-500">
                              {sms_data.status}
                            </button>
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right absolute right-4  gap-2  whitespace-nowrap flex">
                            <AiOutlineEye className="text-[#6C63FF] text-xl" />
                            <Trash3 className="text-red-500 text-xl" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-center mt-8">
                  <BiChevronLeftCircle className="text-3xl text-[#6C63FF]" />
                  <BiChevronRightCircle className="text-3xl text-[#6C63FF]" />
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
