import React, {useState} from 'react'
import { Upload } from "react-bootstrap-icons";

import { Check2All, Trash3 } from "react-bootstrap-icons";

import { AiOutlineEye } from "react-icons/ai";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
function AgentList() {
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
        },
      ];
  return (
    <div className='w-full'>
    <div className="h-20 w-full border-b-2 border-solid flex justify-center float-right items-center">
        <h1>Agents List</h1>
      </div>
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
      </div>
  )
}

export default AgentList