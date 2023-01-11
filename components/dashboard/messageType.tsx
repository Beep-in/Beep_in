import React from 'react';
import Image from 'next/image';
import { useReducer, useRef, useState } from 'react';
import { FaRegPaperPlane } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AiOutlinePlus, AiOutlineRight } from 'react-icons/ai';
import { X, Upload } from 'react-bootstrap-icons';
import axios from 'axios';
import Cookies from 'cookie';
import { getCookie } from 'cookies-next';
import { NextRequest } from 'next/server';
import useAuth from '../context/authContext';
import useResponse from '../context/responseContext';
interface FormValues {
  name: string;
  receiver: string;
  text: string;
}

const initialReciever = {
  single: false,
  bulk: false,
  group: false,
  messageIcon: true,
  success: false,
  failed: false,
};
type ACTIONTYPE =
  | { type: 'single' }
  | { type: 'bulk' }
  | { type: 'group' }
  | { type: 'messageIcon' }
  | { type: 'success' }
  | { type: 'failed' }
  | { type: 'typeContacts' }
  | { type: 'uploadFile' };

const recieverType = (reciever: typeof initialReciever, action: ACTIONTYPE) => {
  reciever = {
    single: false,
    bulk: false,
    group: false,
    messageIcon: false,
    success: false,
    failed: false,
  };

  switch (action.type) {
    case 'single':
      return {
        ...reciever,
        single: true,
      };

    case 'bulk':
      return {
        ...reciever,
        bulk: true,
      };

    case 'group':
      return {
        ...reciever,
        group: true,
      };
    case 'success':
      return {
        ...reciever,
        success: true,
      };
    case 'failed':
      return {
        ...reciever,
        failed: true,
      };
    default:
      return {
        ...reciever,
      };
  }
};
const initialMethod = {
  typeContacts: false,
  uploadFile: false,
};
const methodType = (method: typeof initialMethod, action: ACTIONTYPE) => {
  method = {
    typeContacts: false,
    uploadFile: false,
  };
  switch (action.type) {
    case 'typeContacts':
      return {
        ...method,
        typeContacts: true,
      };
    case 'uploadFile':
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

export default function MessageType(): JSX.Element {
  const [recieve, dispatch] = useReducer(recieverType, initialReciever);
  const [method, setDisplayMethod] = useReducer(methodType, initialMethod);
  const {updateSuccess, updateMessage, updateFailure} = useResponse();

  const options = [
    { value: 'Type numbers', label: 'Type numbers' },
    { value: 'upload file', label: 'upload file' },
  ];
  const [fields, setFields] = useState<string>();
  const { register, handleSubmit } = useForm<FormValues>();

  const { user } = useAuth();
  const submit = (data: FormValues) => {
    const token = getCookie('accessToken');
    setFields(JSON.stringify(data));
    console.log(data);
    const url = recieve.single
      ? `${process.env.NEXT_PUBLIC_BEEP_IN_BACKEND_URL}/message/send/single`
      : recieve.bulk
      ? `${process.env.NEXT_PUBLIC_BEEP_IN_BACKEND_URL}/message/send/multiple`
      : `${process.env.NEXT_PUBLIC_BEEP_IN_BACKEND_URL}/message/send/group`;
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
      })
      .then((res) => {
        updateSuccess()
        updateMessage(res.data.message)
      })
      .catch((err) => {
        updateFailure()
        updateMessage(err.message)
        console.log(err);
      });
  };
  return (
    <div className="w-full">
      <div className="h-20 w-full border-b-2 border-solid flex justify-center float-right items-center font-inter text-[#6C63FF] text-xl">
        <h1>Messages</h1>
        <button 
        
         onClick={{type:"single"}?()=> dispatch({type:"single"}):()=>dispatch({type:"bulk"})}
         className="bg-[#6C63FF] h-12 w-12 text-center rounded-lg absolute right-10 hover:bg-blue-400">
          <AiOutlinePlus className="text-white text-center ml-3 text-xl font-bold" />
        </button>
      </div>
      <div className="absolute left-24 top-52 list-none flex gap-8 flex-col">
        <button
          onClick={() => dispatch({ type: 'single' })}
          className="flex hover:text-[#6C63FF] w-auto focus:h-12 items-center pr-28 focus:bg-gradient-to-r from-blue-100 via-sky-100 focus:bg-opacity-5"
        >
          <AiOutlineRight className="mt-1 ml-2" />
          <li className="pl-4 font-karla">Single</li>
        </button>

        <button
          onClick={() => dispatch({ type: 'bulk' })}
          className="flex  hover:text-[#6C63FF] w-auto h-12 items-center pr-28 focus:bg-gradient-to-r from-blue-100 via-sky-100 focus:bg-opacity-5"
        >
          <AiOutlineRight className="mt-1 ml-2" />
          <li className="pl-4 font-karla">Bulk</li>
        </button>
        <button
          onClick={() => dispatch({ type: 'group' })}
          className="flex  hover:text-[#6C63FF] w-auto h-12 items-center pr-28 focus:bg-gradient-to-r from-blue-100 via-sky-100 focus:bg-opacity-5"
        >
          <AiOutlineRight className="mt-1 ml-2" />
          <li className="pl-4 font-karla ">Group</li>
        </button>
      </div>
      {recieve.messageIcon && (
        <div className="h-96 mt-28 absolute lg:right-[35%] mg:right-[20%] sm:right-[10%]">
          <Image
            width={400}
            height={400}
            alt="signup image"
            src={'/images/messages.png'}
          />
          <h1 className="text-xl font-bold text-center pt-4 drop-shadow-lg shadow-black">
            START SENDING MESSAGES
          </h1>
        </div>
      )}
      {recieve.single && (
        <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
            <h1 className="text-2xl text-center font-inter">SEND MESSAGE</h1>
            <div className="bg-blue-400 w-2/3 ml-auto mr-auto"></div>
            <form
              action=""
              className=" w-3/4 ml-auto mr-auto"
              onSubmit={handleSubmit(submit)}
            >
              <div className="flex ml-20 mt-10">
                <label htmlFor="name" className="pt-4 font-karla">
                  Sender 
                </label>
                <input
                  {...register('name')}
                  name="name"
                  type="text"
                  placeholder="Add name"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-24 "
                />
              </div>
              <div className="flex ml-20 mt-4">
                <label htmlFor="name" className="pt-4 font-karla">
                  Phone_number 
                </label>
                <input
                  {...register('receiver')}
                  name="receiver"
                  type="telephone"
                  placeholder="Add telephone"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  lg:w-2/3 rounded-lg pl-8 ml-8 font-inter"
                />
              </div>
              <div className="flex ml-20 mt-4">
                <label htmlFor="Message">Sender :</label>
                <textarea
                  {...register('name')}
                  name="name"
                  placeholder="Disaplayed sender name"
                  className=" pt-4 block border-solid border border-[#3a3944] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"
                ></textarea>
              </div>
              <div className="flex ml-20 mt-4">
                <label htmlFor="Message">Message :</label>
                <textarea
                  {...register('text')}
                  name="text"
                  placeholder="Type a message.."
                  className=" pt-4 block border-solid border border-[#3a3944] border-opacity-10 h-48  lg:w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full font-inter"
                ></textarea>
              </div>
              <button
                
                type="submit"
                className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 lg:mr-36 font-inter"
              >
                <FaRegPaperPlane className="mr-3 "/>
                SEND
              </button>
            </form>
          </div>
        </div>
      )}

      {recieve.bulk && (
        <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
            <h1 className="text-2xl text-center font-inter">SEND MESSAGE</h1>

            <form
              action=""
              onSubmit={handleSubmit(submit)}
              className=" w-3/4 ml-auto mr-auto"
            >
              <div className="flex ml-36 mt-10">
                <label htmlFor="name" className="pt-4 font-karla">
                  Sender
                </label>
                <input
                  {...register('name')}
                  name="name"
                  type="text"
                  placeholder="Add name"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14 w-2/3 rounded-lg pl-8 ml-24 font-inter"
                />
              </div>
              <div className="lg:flex sm:block">
                <div className="flex mt-6">
                  <label htmlFor="name" className="pl-36 font-karla">
                    Method_type
                  </label>
                  
                  <div className="flex items-center">
                    <input
                      onClick={() => setDisplayMethod({ type: 'typeContacts' })}
                      id="default-radio-2"
                      type="radio"
                      value=""
                      placeholder="Enter the receivers number separated with comma"
                      name="default-radio"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 pl-8 ml-12"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-karla">
                      Type contacts
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      onClick={() => setDisplayMethod({ type: 'uploadFile' })}
                      id="default-radio-2"
                      type="radio"
                      value="uploadFile"
                      name="default-radio"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 lg:ml-40 sm:ml-4"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-karla">
                      Upload a file
                    </label>
                  </div>
                </div>
              </div>

              <div className="block">
                {method.typeContacts && (
                  <textarea
                    className="h-24 lg:ml-[32%] sm:ml-[50%] mt-4 w-1/2 min-h-24 max-h-24 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 pl-8 pt-4 rounded-lg text-sm font-inter"
                    placeholder="Type telephone numbers of receivers separated with comma"
                    {...register('receiver')}
                    name="receiver"
                  ></textarea>
                )}
                {method.uploadFile && (
                  <div className="flex mt-4 w-full">
                    <label className="flex flex-col items-center justify-center w-1/2  lg:ml-[32%] sm:ml-[50%] h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 font-inter">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="text-3xl mt-4" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 pt-4 pb-4">
                          Upload contacts
                        </p>
                      </div>
                      <input
                       type="file"
                       
                      />
                    </label>
                  </div>
                )}
              </div>
              <div className="flex ml-36 mt-4">
                <label htmlFor="Message" className='font-karla'>Message</label>
                <textarea
                  {...register('text')}
                  name="text"
                  placeholder="Type a message.."
                  className=" pt-4 block font-inter border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 font-inter"
              >
                <FaRegPaperPlane className="mr-3" />
                SEND
              </button>
            </form>
          </div>
        </div>
      )}Beep-in/Bee

      {recieve.group && (
        <div>
          <div className="h-96 w-3/4 mt-28 absolute right-10">
            <h1 className="text-2xl text-center font-inter">SEND MESSAGE</h1>

            <form
              action=""
              onSubmit={handleSubmit(submit)}
              className=" w-3/4 ml-auto mr-auto"
            >
              <div className="flex ml-36 mt-10">
                <label htmlFor="name" className="pt-4 font-karla">
                  Receiver :
                </label>
                <select
                  {...register('receiver')}
                  name="receiver"
                  placeholder="Group name"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-20 font-inter"
                >
                  <option value="">Group name</option>
                  {user!.groups.map((group) => {
                    return <option value={group.id}>{group.name}</option>;
                  })}
                </select>
              </div>
        
              <div className="flex ml-36 mt-4">
                <label htmlFor="Message" className='font-karla'>Message :</label>
                <textarea
                  {...register('text')}
                  name="text"
                  id=""
                  placeholder="Type a message.."
                  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full font-inter"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 font-inter"
              >
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