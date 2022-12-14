import React, { useState } from "react";
import {  CircleFill } from "react-bootstrap-icons";
import axios from "axios"
import Cookies from "cookie";
import { getCookie } from "cookies-next";

import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";

type Agent = {
  [x: string]: any;
  name: string;
  phone_number:string,
  email: string,
  category: string,
  status:string
};
type AgentResponse = Agent;

 async function AgentList() {
  const token = getCookie('accessToken')
  const { data:agents} = await axios.get<AgentResponse>("https://beepin.onrender.com/agent/all", {
    headers: {
      'Accept-Encoding': 'application/json',
      authorization: token,
    },
 });

console.log(agents);
console.log(agents.email);

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
                    {agents?.map((agent_data:Agent) => (
                      <tr>
                        <td className="px-6 py-5 text-sm font-medium text-gray-800 whitespace-nowrap">
                          {agent_data.name}
                        </td>
                        <td className="px-12 py-5 text-sm text-gray-800 whitespace-nowrap flex">
                          {agent_data.phone_number}
                        </td>
                        <td className="px-24 py-5 text-sm text-gray-800 whitespace-nowrap">
                          {agent_data.email}
                        </td>
                        <td className="py-5 text-sm font-medium text-right whitespace-nowrap">
                          {agent_data.category}
                        </td>
                        <td className="px-24 py-5 text-sm font-medium text-right whitespace-nowrap flex">
                          {agent_data.status}
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