import React, { useState } from "react";
import {  CircleFill } from "react-bootstrap-icons";
import axios from "axios"

import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";

type Agent = {
  name: string;
  mobileNumber:string,
  email: string,
  category: string,
  accountStatus:string
};
 function AgentList({data}: {data:Agent[]}) {
     axios.get("https://beepin.onrender.com/agent/all", {
     headers: {
       Accept:"application/json"
     },
   }).then((res) => {
    console.log(res);
    
  });
  console.log(data);
  
    return (
    <div className="w-full">
      <div className="h-20 w-full border-b-2 border-solid flex justify-center float-right items-center font-karla text-[#6C63FF]  text-xl">
        <h1>Agents List</h1>
      </div>
      <div className="h-96 w-4/5 mt-20 absolute right-4">
        <div className="flex flex-col mt-4">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block ">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50 font-inter">
                    <tr>
                      <th scope="col" className="px-6 py-3  text-left ">
                        Agent name
                      </th>
                      <th
                        // scope="col"
                        className=" py-3 placeholder:text-left  "
                      >
                        Mobile Number
                      </th>
                      <th scope="col" className="px-24 py-3  text-left  ">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-right  ">
                        Category
                      </th>
                      <th scope="col" className="px-24 py-3  text-left">
                        Account Status
                      </th>
                      <th scope="col" className=" py-3  text-left ">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-inter">
                    {data && data.map((sms_data) => (
                      <tr>
                        <td className="px-6 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {sms_data.name}
                        </td>
                        <td className="px-12 py-5 text-sm text-gray-800 whitespace-nowrap flex">
                          {sms_data.mobileNumber}
                        </td>
                        <td className="px-24 py-5 text-sm text-gray-800 whitespace-nowrap">
                          {sms_data.email}
                        </td>
                        <td className="py-5 text-sm font-medium text-right whitespace-nowrap">
                          {sms_data.category}
                        </td>
                        <td className="px-24 py-5 text-sm font-medium text-right whitespace-nowrap flex">
                          {sms_data.accountStatus}
                          <CircleFill className="text-green-500 ml-4 text-xs" />
                        </td>
                        <td className="py-3">
                          <button className="text-[#6C63FF] bg-[#6C63FF] bg-opacity-20 h-8 w-20 rounded-lg mr-6">
                            Update
                          </button>
                          <label className="inline-flex relative items-center mr-5 cursor-pointer">
                            <input
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-green-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-green-800 dark:bg-green-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                          </label>
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
          <BiChevronLeftCircle className="text-3xl text-[#6C63FF]" />
          <BiChevronRightCircle className="text-3xl text-[#6C63FF]" />
        </div>
      </div>
    </div>
  );
}

export default AgentList;