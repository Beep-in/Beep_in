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

export default function MessageType(req: NextRequest): JSX.Element {
  const [recieve, dispatch] = useReducer(recieverType, initialReciever);
  const [success, setSuccess] = useState(true);
  const [failed, setFailed] = useState(true);
  const [method, setDisplayMethod] = useReducer(methodType, initialMethod);
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
      ? 'https://beepin.onrender.com/message/send/single'
      : recieve.bulk
      ? 'http://localhost:7000/message/send/multiple'
      : 'https://beepin.onrender.com/message/send/group';
    axios
      .post(url, data, {
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
  };
  return (
    <div className="w-full">
      <div className="h-20 w-full border-b-2 border-solid flex justify-center float-right items-center">
        <h1>Messages</h1>
        <button className="bg-blue-500 h-12 w-12 text-center rounded-lg absolute right-10">
          <AiOutlinePlus className="text-white text-center ml-3 text-xl font-bold" />
        </button>
      </div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <button
          onClick={() => dispatch({ type: 'single' })}
          className="flex  hover:text-[#6C63FF] w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4 ">Single</li>
        </button>

        <button
          onClick={() => dispatch({ type: 'bulk' })}
          className="flex hover:text-[#6C63FF] w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Bulk</li>
        </button>
        <button
          onClick={() => dispatch({ type: 'group' })}
          className="flex hover:text-[#6C63FF]  w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Group</li>
        </button>
      </div>
      {recieve.messageIcon && (
        <div className="h-96 mt-28 absolute right-[35%]">
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
            <h1 className="text-2xl text-center">SEND MESSAGE</h1>
            <div className="bg-blue-400 w-2/3 ml-auto mr-auto"></div>
            <form
              action=""
              className=" w-3/4 ml-auto mr-auto"
              onSubmit={handleSubmit(submit)}
            >
              <div className="flex ml-20 mt-10">
                <label htmlFor="name" className="pt-4">
                  Sender :
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
                <label htmlFor="name" className="pt-4">
                  Phone number :
                </label>
                <input
                  {...register('receiver')}
                  name="receiver"
                  type="telephone"
                  placeholder="Add telephone"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-8"
                />
              </div>
              <div className="flex ml-20 mt-4">
                <label htmlFor="Message">Message :</label>
                <textarea
                  {...register('text')}
                  name="text"
                  id=""
                  placeholder="Type a message.."
                  className=" pt-4 block border-solid border border-[#3a3944] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"
                ></textarea>
              </div>
              <button
                // onClick={() => dispatch({ type: "success" })}
                type="submit"
                className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 "
              >
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

            <form
              action=""
              onSubmit={handleSubmit(submit)}
              className=" w-3/4 ml-auto mr-auto"
            >
              <div className="flex ml-36 mt-10">
                <label htmlFor="name" className="pt-4">
                  Sender :
                </label>
                <input
                  {...register('name')}
                  name="name"
                  type="text"
                  placeholder="Add name"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-2/3 rounded-lg pl-8 ml-24 "
                />
              </div>
              <div className="flex">
                <div className="flex mt-6">
                  <label htmlFor="name" className="pl-36">
                    Method type :
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
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 ml-40"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Upload a file
                    </label>
                  </div>
                </div>
              </div>

              <div className="block">
                {method.typeContacts && (
                  <textarea
                    className="h-24 ml-[32%] mt-4 w-1/2 min-h-24 max-h-24 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600 pl-8 pt-4 rounded-lg text-sm"
                    placeholder="Type telephone numbers of receivers separated with comma"
                    {...register('receiver')}
                    name="receiver"
                  ></textarea>
                )}
                {method.uploadFile && (
                  <div className="flex mt-4 w-full">
                    <label className="flex flex-col items-center justify-center w-1/2  ml-[32%] h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
                <label htmlFor="Message">Message :</label>
                <textarea
                  {...register('text')}
                  name="text"
                  placeholder="Type a message.."
                  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"
                ></textarea>
              </div>
              <button
                // onClick={() => dispatch({ type: "failed" })}
                type="submit"
                className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 "
              >
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

            <form
              action=""
              onSubmit={handleSubmit(submit)}
              className=" w-3/4 ml-auto mr-auto"
            >
              <div className="flex ml-36 mt-10">
                <label htmlFor="name" className="pt-4">
                  Receiver :
                </label>
                <select
                  {...register('receiver')}
                  name="receiver"
                  placeholder="Group name"
                  className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-1/3 rounded-lg pl-8 ml-24 "
                >
                  <option value="">Group name</option>
                  {user!.groups.map((group) => {
                    return <option value={group.id}>{group.name}</option>;
                  })}
                </select>
              </div>
        
              <div className="flex ml-36 mt-4">
                <label htmlFor="Message">Message :</label>
                <textarea
                  {...register('text')}
                  name="text"
                  id=""
                  placeholder="Type a message.."
                  className=" pt-4 block border-solid border border-[#6C63FF] border-opacity-10 h-48  w-2/3 rounded-lg pl-8 ml-20 max-h-48 min-h-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" bg-blue-600 text-white rounded-lg flex h-12 items-center w-28 pl-6 float-right mt-8 mr-36 "
              >
                <FaRegPaperPlane className="mr-3" />
                SEND
              </button>
            </form>
          </div>
        </div>
      )}
      {success && (
        <div>
          {recieve.success && (
            <div className="h-full w-full bg-white shadow-sm shadow-slate-400 absolute top-0 left-0">
              <X
                className="float-right text-xl hover:text-blue-500 hover:text-2xl"
                onClick={() => setSuccess(false)}
              />
              <img
                src="/icons/messegeSuccess.svg"
                alt="messege-tick"
                className="ml-auto mr-auto pt-28"
              />
              <div className="w-72 ml-auto mr-auto">
                <h1 className="text-center pt-8 text-xl">Success!</h1>

                <p className="text-center pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Semper scelerisque diam ac nunc rhoncus eget vitae venenatis.
                  Commodo aliquam aliquam tincidunt et sit sit. Aliquam in et
                  fermentum vel at.
                </p>
              </div>
              <div className="">
                <button className="h-12 w-40 bg-blue-500 text-white rounded-lg mt-10 ml-[45%]">
                  continue
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {failed && (
        <div>
          {recieve.failed && (
            <div className="h-full w-full bg-white shadow-sm shadow-slate-400 absolute top-0 left-0">
              <X
                className="float-right text-xl hover:text-blue-500 hover:text-2xl"
                onClick={() => setFailed(false)}
              />
              <img
                src="/icons/messegeFailed.svg"
                alt="messege-cross"
                className="ml-auto mr-auto pt-28"
              />
              <div className="w-72 ml-auto mr-auto">
                <h1 className="text-center pt-8 text-xl">Oooops!</h1>

                <p className="text-center pt-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Semper scelerisque diam ac nunc rhoncus eget vitae venenatis.
                  Commodo aliquam aliquam tincidunt et sit sit. Aliquam in et
                  fermentum vel at.
                </p>
              </div>
              <div className="">
                <button className="h-12 w-40 bg-blue-500 text-white rounded-lg mt-10 ml-[45%]">
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
