import { AiOutlineRight } from "react-icons/ai";
import { useState, useReducer } from "react";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
import {
  Upload,
  XCircle,
  Filter,
  Download,
  Trash3,
  Check2All,
  PlusCircle,
  CloudDownload,
  PencilSquare,
} from "react-bootstrap-icons";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { getCookie } from "cookies-next";
import axios from "axios";
type ACTIONTYPE =
  | { type: "newGroup" }
  | { type: "typeContacts" }
  | { type: "uploadFile" }
  | { type: "success" }
  | { type: "groupList" };
const initialMethod = {
  typeContacts: false,
  uploadFile: false,
};
const initialEvent = {
  newGroup: true,
  success: false,
  groupList: false,
};

interface FormValues{
name : string,
members : string
}


const eventDisplay = (eventHappen: typeof initialEvent, action: ACTIONTYPE) => {
  eventHappen = {
    newGroup: false,
    success: false,
    groupList: false,
  };
  switch (action.type) {
    case "newGroup":
      return {
        ...eventHappen,
        newGroup: true,
      };
    case "success":
      return {
        ...eventHappen,
        success: true,
      };
    case "groupList":
      return {
        ...eventHappen,
        groupList: true,
      };
    default:
      return {
        ...eventHappen,
      };
  }
};
const methodType = (method: typeof initialMethod, action: ACTIONTYPE) => {
  method = {
    typeContacts: false,
    uploadFile: false,
  };
  switch (action.type) {
    case "typeContacts":
      return {
        ...method,
        typeContacts: true,
      };
    case "uploadFile":
      return { 
        ...method,
        uploadFile: true,
      };
    default:
      return {
        ...method,
      };
  }
};

function GroupsManagement() {
  const [method, setDisplayMethod] = useReducer(methodType, initialMethod);
  const [createGroup, setCreateGroup] = useState(false);
  const [eventHappen, dispatch] = useReducer(eventDisplay, initialEvent);
  const { register, handleSubmit } = useForm<FormValues>();

  const tableData = [
    {
      groupName: "The Nickles",
      numberOfPeople: 10,
    },
    {
      groupName: "The Nickles",
      numberOfPeople: 10,
    },
    {
      groupName: "The Nickles",
      numberOfPeople: 10,
    },
    {
      groupName: "The Nickles",
      numberOfPeople: 10,
    },
    {
      groupName: "The Nickles",
      numberOfPeople: 10,
    },
    {
      groupName: "The Nickles",
      numberOfPeople: 10,
    },
    {
      groupName: "The Nickles",
      numberOfPeople: 10,
    },
    {
      groupName: "The Nickles",
      numberOfPeople: 10,
    },
  ];

  const submit = (data: FormValues)=>{
    const token = getCookie('accessToken');
    console.log(data)
    axios
      .post("http://localhost:7000/groups/create", data, {
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="w-full">
      <div className="h-20 w-full border-b-2 border-solid flex justify-center float-right items-center">
        <h1>Recipients Groups</h1>
        <button className="flex bg-gray-100 h-12 text-center rounded-lg absolute right-64 pl-4 w-32 items-center">
          Filter by <Filter className="text-blue-500  ml-2 mt-1" />
        </button>
        <button className="flex bg-blue-500 text-white items-center text-center gap-3 absolute right-10 h-12 w-32 pl-2 rounded-lg">
          <AiOutlinePlus />
          New group
        </button>
      </div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <button
          onClick={() => setCreateGroup(true)}
          className="flex hover:text-[#6C63FF]  rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Group</li>
        </button>
        <button
          onClick={() => dispatch({ type: "groupList" })}
          className="flex hover:text-[#6C63FF]  rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Group list</li>
        </button>
      </div>
      {createGroup && (
        <div className="h-full w-full bg-gray-800 opacity-90 absolute top-0 left-0">
          {eventHappen.newGroup && (
            <div className="h-[74vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <XCircle
                className="float-right text-xl hover:text-blue-500 hover:text-2xl mt-2 mr-2 text-blue-500"
                onClick={() => setCreateGroup(false)}
              />
              <img
                src="/icons/group.svg"
                alt="topup-tick"
                className="pt-6 ml-[14vw]"
              />
              <h1 className="text-center font-bold text-2xl">Create a group</h1>
              <form action="" className="ml-16 mt-10"  onSubmit ={handleSubmit(submit)}>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  placeholder="Group name"
                  required
                  className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 "
                />
                <select
                  name="agent"
                  id=""
                  required
                  className="block border-solid border bg-[#D9D9D9] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-6 "
                >
                  <option value="">Type of agent</option>
                  <option value="">Admin</option>
                  <option value="">Super Reseller</option>
                  <option value="">Reseller</option>
                  <option value="">Agent</option>
                </select>
                <p className="pt-8 font-bold">
                  What kind of method do you prefer?
                </p>
                <div className="flex items-center mt-3">
                  <input
                    onClick={() => setDisplayMethod({ type: "typeContacts" })}
                    
                    id="default-radio-2"
                    type="radio"
                    value="typeContact"
                    name="default-radio"
                    className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 pl-8"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Type contacts
                  </label>
                  <div className="flex items-center">
                    <input
                      onClick={() => setDisplayMethod({ type: "uploadFile" })}
                      id="default-radio-2"
                      type="radio"
                      value="uploadFile"
                      name="default-radio"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 ml-10"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Upload a file
                    </label>
                  </div>
                </div>

                <div className="block">
                  {method.typeContacts && ( 
                    <textarea
                      {...register("members")}
                      className="h-24 mt-4 w-5/6 min-h-24 max-h-24 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 pl-8 pt-4 rounded-lg"
                      placeholder="Type telephone numbers of group members separated with commas and no space"
                    ></textarea>
                  )}
                  {method.uploadFile && (
                    <div className="flex mt-4 w-full">
                      <label className="flex flex-col items-center justify-center w-5/6 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="text-3xl mt-4" />
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 pt-4 pb-4">
                            Upload contacts
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                        />
                      </label>
                    </div>
                  )}
                </div>
              <button
                // onClick={() => dispatch({ type: "success" })}
                type="submit"
                className="flex float-right mr-20 mt-4 items-center font-normal"
                >
                Continue
                <BiChevronRightCircle className="text-4xl text-blue-500 ml-4" />
              </button>
                </form>
            </div>
          )}
          {eventHappen.success && (
            <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <XCircle
                className="float-right text-xl hover:text-blue-500 hover:text-2xl mt-2 mr-2 text-blue-500"
                onClick={() => setCreateGroup(false)}
              />
              <img
                src="/icons/sucess.svg"
                alt="topup-tick"
                className="ml-auto mr-auto pt-28"
              />
              <h1 className="text-center pt-8 text-xl">
                Start Sending Messages to The Nickels
              </h1>
              <button className="h-12 w-40 bg-blue-500 text-white ml-48 rounded-lg mt-10 ">
                PROCEED
              </button>
            </div>
          )}
        </div>
      )}
      {eventHappen.groupList && (
        <div className="h-96 w-3/4 mt-28 absolute right-10">
          <div className="flex flex-col mt-4">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3  text-left  ">
                          Group Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          Number of People
                        </th>
                        <th scope="col" className="px-6 py-3  text-left">
                          Add People
                        </th>
                        <th scope="col" className="px-6 py-3  text-left">
                          Download
                        </th>
                        <th scope="col" className="px-6 py-3  ">
                          More
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {tableData.map((sms_data) => (
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {sms_data.groupName}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap flex">
                            {sms_data.numberOfPeople}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            <PlusCircle className="text-xl text-blue-500" />
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            <CloudDownload className="text-xl text-blue-500" />
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right absolute right-4  gap-2  whitespace-nowrap flex">
                            <AiOutlineEye className="text-green-500 text-xl" />
                            <Trash3 className="text-red-500 text-xl" />
                            <PencilSquare className="text-[#968D8D]" />
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

export default GroupsManagement;
