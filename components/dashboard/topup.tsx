import Link from "next/link";
import { Upload } from "react-bootstrap-icons";

import { Download, Filter, Check2All, Trash3, X } from "react-bootstrap-icons";

import { AiOutlineEye, AiOutlineRight } from "react-icons/ai";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";

import { useReducer, useRef, useState } from "react";

const initialMode = {
  momo: false,
  bank: false,
  card: false,
  allMethods: false,
  complete: false,
  topupData: true,
};
const initialType = {
  typeContact: false,
  uploadFile: false,
};
type ACTIONTYPE =
  | { type: "topupHistory" }
  | { type: "buySms" }
  | { type: "momo" }
  | { type: "bank" }
  | { type: "card" }
  | { type: "allMethods" }
  | { type: "complete" }
  | { type: "typeContact" }
  | { type: "uploadFile" }
  | { type: "topupData" };
const paymentMode = (mode: typeof initialMode, action: ACTIONTYPE) => {
  mode = {
    momo: false,
    bank: false,
    card: false,
    allMethods: false,
    complete: false,
    topupData: false,
  };
  switch (action.type) {
    case "topupData":
      return {
        ...mode,
        topupData: true,
      };
    case "allMethods":
      return {
        ...mode,
        allMethods: true,
      };
    case "momo":
      return {
        ...mode,
        momo: true,
      };

    case "bank":
      return {
        ...mode,
        bank: true,
      };

    case "card":
      return {
        ...mode,
        card: true,
      };
    case "complete":
      return {
        ...mode,
        complete: true,
      };
    default:
      return {
        ...mode,
      };
  }
};
const inititialHistory = {
  topupHistory: false,
  buySms: false,
};

const topupDisplay = (topup: typeof inititialHistory, action: ACTIONTYPE) => {
  topup = {
    topupHistory: false,
    buySms: false,
  };
  switch (action.type) {
    case "topupHistory":
      return {
        ...topup,
        topupHistory: true,
      };
    case "buySms":
      return {
        ...topup,
        buySms: true,
      };
    default:
      return {
        ...topup,
      };
  }
};

function Topup() {
  const [topup, display] = useReducer(topupDisplay, inititialHistory);
  const [showPopup, setShowPopup] = useState(false);
  const [mode, dispatch] = useReducer(paymentMode, initialMode);

  const tableData = [
    {
      names: "Kaligirwa Sonia",
      buyingPrice: 10,
      loadedSMS: 1000,
      date: "2012-02-01",
      totalAmount: 10000,
    },
    {
      names: "Kaligirwa Sonia",
      buyingPrice: 10,
      loadedSMS: 1000,
      date: "2012-02-01",
      totalAmount: 10000,
    },
    {
      names: "Kaligirwa Sonia",
      buyingPrice: 10,
      loadedSMS: 1000,
      date: "2012-02-01",
      totalAmount: 10000,
    },
    {
      names: "Kaligirwa Sonia",
      buyingPrice: 10,
      loadedSMS: 1000,
      date: "2012-02-01",
      totalAmount: 10000,
    },
    {
      names: "Kaligirwa Sonia",
      buyingPrice: 10,
      loadedSMS: 1000,
      date: "2012-02-01",
      totalAmount: 10000,
    },
    {
      names: "Kaligirwa Sonia",
      buyingPrice: 10,
      loadedSMS: 1000,
      date: "2012-02-01",
      totalAmount: 10000,
    },
    {
      names: "Kaligirwa Sonia",
      buyingPrice: 10,
      loadedSMS: 1000,
      date: "2012-02-01",
      totalAmount: 10000,
    },
    {
      names: "Kaligirwa Sonia",
      buyingPrice: 10,
      loadedSMS: 1000,
      date: "2012-02-01",
      totalAmount: 10000,
    },
  ];

  return (
    <div className="w-full">
      <div className="h-20 w-full border-b-2 border-solid flex justify-center float-right items-center text-[#6C63FF] font-karla">
        <h1 className="text-lg lg:text-center sm:absolute sm:left-[40%]">Topup History</h1>
        <button className="flex bg-gray-100 h-12 text-center rounded-lg absolute right-64 pl-4 w-32 items-center font-karla">
          Filter by <Filter className="text-[#6C63FF]  ml-2 mt-1" />
        </button>
        <button className="flex bg-white text-[#6C63FF] items-center text-center gap-3 absolute right-10 font-karla">
          Download Report <Download />
        </button>
      </div>

      <div className="absolute left-24 top-52 list-none flex gap-8 flex-col">
        <button
          onClick={() => display({ type: "topupHistory" })}
          className="flex hover:text-[#6C63FF] w-auto focus:h-12 items-center pr-28 focus:bg-gradient-to-r from-blue-100 via-sky-100 focus:bg-opacity-5"
        >
          <AiOutlineRight className="mt-1 ml-2" />
          <li className="pl-4 font-karla">Topup history</li>
        </button>
        <button
          onClick={() => setShowPopup(true)}
          className="flex hover:text-[#6C63FF] w-auto focus:h-12 items-center pr-28 focus:bg-gradient-to-r from-blue-100 via-sky-100 focus:bg-opacity-5"
        >
          <AiOutlineRight className="mt-1 ml-2" />

          <li className="pl-4 font-karla">Buy SMS</li>
        </button>
      </div>

      {topup.topupHistory && (
        <div className="h-96 w-3/4 mt-28 absolute lg:right-10 md:right-2 sm:right-1">
          <div className="flex flex-col mt-4">
            <div className="overflow-x-auto">
              <div className="p-1.5 lg:w-full md:w-[40vw] lg:ml-0 md:ml-10 inline-block align-middle h-[40vh]">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 font-karla">
                      <tr> 
                        <th scope="col" className=" px-6 py-3 text-left ">
                          Agent Names
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          Buying price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          Loaded messages
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-6 py-3 text-left ">
                          Total amount
                        </th>
                        <th scope="col" className="px-6 py-3 text-left">
                          Balance
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 font-inter h-[40vh]">
                      {tableData.map((sms_data) => (
                        <tr>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {sms_data.names}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap flex">
                            {sms_data.buyingPrice}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {sms_data.loadedSMS}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            {sms_data.date}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {sms_data.totalAmount}
                          </td>

                          <td className="px-6 py-4 text-sm font-medium text-right  gap-2  whitespace-nowrap">
                            <Link href="requestTopup">
                              <button className="flex bg-[#4CAF50] bg-opacity-5 text-green-500 h-8 w-24 lg:pl-4 pt-2 rounded-lg">
                                <p className="pr-2">Balance</p>
                                <AiOutlineEye />
                              </button>
                            </Link>
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
      )}
      {showPopup && (
        <div className="h-full w-full bg-gray-800 opacity-90 absolute top-0 left-0">
          {mode.topupData && (
            <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <X
                className="float-right text-xl hover:text-[#6C63FF] hover:text-2xl"
                onClick={() => setShowPopup(false)}
              />
              <img
                src="/icons/topupTick.svg"
                alt="topup-tick"
                className="absolute top-14 ml-[14vw]"
              />
              <h1 className="font-bold text-xl pt-14 text-center font-karla">Topup</h1>
              <form action="" className="ml-16 mt-10">
                <input
                  type="text"
                  name="nameeofagent"
                  placeholder="Name of agent"
                  required
                  className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 font-karla"
                />
                <input
                  type="text"
                  name="mobilrnumber"
                  placeholder="Mobile number"
                  required
                  className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 mt-6 font-karla"
                />
                <input
                  type="text"
                  name="numberofsms"
                  placeholder="Number of SMS"
                  required
                  className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 mt-6 font-karla"
                />
              </form>

              <button
                onClick={() => dispatch({ type: "allMethods" })}
                className="flex float-right mr-20 mt-16 items-center font-normal font-karla"
              >
                Payment method
                <BiChevronRightCircle className="text-4xl text-[#6C63FF] ml-4" />
              </button>
            </div>
          )}
          {mode.allMethods && (
            <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <X
                className="float-right text-xl hover:text-[#6C63FF] hover:text-2xl"
                onClick={() => setShowPopup(false)}
              />
              <img
                src="/icons/topupTick.svg"
                alt="topup-tick"
                className="absolute top-14 ml-[14vw]"
              />
              <h1 className="font-bold text-xl pt-20 text-center font-karla">
                Payment method
              </h1>

              <div>
                <form action="" className="ml-16 mt-10">
                  <div className="flex items-center mb-4 mt-14">
                    <input
                      type="radio"
                      value="mtnmomo"
                      name="default-radio"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                      // onChange={radioHandler}
                      onClick={() => dispatch({ type: "momo" })}
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-karla">
                      MTN momo
                    </label>
                  </div>
                  <div className="flex items-center mt-10">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="bank"
                      name="default-radio"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300   dark:bg-gray-700 dark:border-gray-600"
                      onClick={() => dispatch({ type: "bank" })}
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-karla">
                      Bank Payment
                    </label>
                  </div>
                  <div className="flex items-center mt-10">
                    <input
                      id="default-radio-2"
                      type="radio"
                      value="card"
                      name="default-radio"
                      className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300  dark:bg-gray-700 dark:border-gray-600"
                      onClick={() => dispatch({ type: "card" })}
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-karla">
                      Master Card / Paypal / VISA Card
                    </label>
                  </div>
                </form>
              </div>

              <div className="flex mt-16 justify-between ml-16 mr-16">
                <Link href="topupResult">
                  <button className="flex  items-center font-normal font-karla">
                    <BiChevronLeftCircle className="text-4xl text-[#6C63FF] mr-4" />
                    Topup
                  </button>
                </Link>
                <button className="flex  items-center font-normal font-karla">
                  Continue
                  <BiChevronRightCircle className="text-4xl text-[#6C63FF] ml-4" />
                </button>
              </div>
            </div>
          )}
          {mode.momo && (
            <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <X
                className="float-right text-xl hover:text-[#6C63FF] hover:text-2xl"
                onClick={() => setShowPopup(false)}
              />
              <img
                src="/icons/topupTick.svg"
                alt="topup-tick"
                className="absolute top-14 ml-[14vw]"
              />
              <h1 className="font-bold text-xl pt-14 text-center font-karla">
                Momo payment
              </h1>
              <form action="" className="ml-16 mt-14">
                <input
                  type="text"
                  name="nameeofagent"
                  placeholder="Your phone number"
                  required
                  className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 font-karla"
                />
                <input
                  type="text"
                  name="mobilrnumber"
                  placeholder="Amount(Frw)"
                  required
                  className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 mt-12 font-karla"
                />
              </form>
              <div className="flex mt-20 justify-between ml-16 mr-20">
                <Link href="methodofPayment">
                  <button className="flex  items-center font-normal font-karla">
                    <BiChevronLeftCircle className="text-4xl text-[#6C63FF] mr-4" />
                    Topup
                  </button>
                </Link>

                <button
                  onClick={() => dispatch({ type: "complete" })}
                  className="bg-[#6C63FF] text-white w-16 rounded-lg font-karla"
                >
                  Done
                </button>
              </div>
            </div>
          )}
          {mode.bank && (
            <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <X
                className="float-right text-xl hover:text-[#6C63FF] hover:text-2xl"
                onClick={() => setShowPopup(false)}
              />
              <img
                src="/icons/topupTick.svg"
                alt="topup-tick"
                className="absolute top-14 ml-[14vw]"
              />
              <h1 className="font-bold text-xl pt-14 text-center font-karla">By Bank</h1>
              <form action="" className=" mt-10">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-2/3 h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 font-karlaaa">
                      <Upload className="text-3xl" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 pt-4 font-karla">
                        Upload proof of payment
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </form>
              <div className="flex mt-20 justify-between ml-16 mr-20">
                <Link href="methodofPayment">
                  <button className="flex  items-center font-normal font-karla">
                    <BiChevronLeftCircle className="text-4xl text-[#6C63FF] mr-4" />
                    Topup
                  </button>
                </Link>
                <button
                  onClick={() => dispatch({ type: "complete" })}
                  className="bg-[#6C63FF] text-white w-16 rounded-lg font-karla "
                >
                  Done
                </button>
              </div>
            </div>
          )}
          {mode.card && (
            <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <X
                className="float-right text-xl hover:text-[#6C63FF] hover:text-2xl"
                onClick={() => setShowPopup(false)}
              />
              <img
                src="/icons/topupTick.svg"
                alt="topup-tick"
                className="absolute top-14 ml-[14vw]"
              />
              <h1 className="font-bold text-xl pt-14 text-center">By card</h1>
              <form action="" className="ml-16 mt-10">
                <label htmlFor="" className="font-karla">CARD NUMBER</label>
                <input
                  type="text"
                  name="nameeofagent"
                  placeholder="Card number"
                  required
                  className=" block border-solid border bg-[#D9D9D9]  h-14 mt-2  w-5/6 rounded-lg pl-8 font-karla "
                />
                <div className="flex mt-2">
                  <div className="">
                    <label htmlFor="" className="font-karla">EXPIRATION DATE</label>
                    <div className="flex">
                      <input
                        type=""
                        name="mobilenumber"
                        placeholder=""
                        required
                        className=" block border-solid border bg-[#D9D9D9]  h-14 w-24 rounded-lg pl-4  mt-2 pr-4 ,font-karla"
                      />
                      <input
                        type=""
                        name="mobilenumber"
                        placeholder=""
                        required
                        className=" block border-solid border bg-[#D9D9D9]  h-14 w-24 rounded-lg ml-4  mt-2 pl-4 pr-4 font-karla"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="font-karla pl-6">CVC</label>

                    <input
                      type="text"
                      name="mobilenumber"
                      placeholder=""
                      required
                      className=" block border-solid border bg-[#D9D9D9] ml-4 h-14 w-44 rounded-lg pl-8 mt-2 "
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="" className="pt-4 font-karla">
                    CARD HOLDER'S NAMES
                  </label>
                  <input
                    type="text"
                    name="numberofsms"
                    placeholder="Number of SMS"
                    required
                    className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 mt-2 font-karla"
                  />
                </div>
              </form>
              <div className="flex mt-8 justify-between ml-16 mr-20">
                <Link href="methodofPayment">
                  <button className="flex  items-center font-normal font-karla">
                    <BiChevronLeftCircle className="text-4xl text-[#6C63FF] mr-4" />
                    Topup
                  </button>
                </Link>
                <button
                  onClick={() => dispatch({ type: "complete" })}
                  className="bg-[#6C63FF] text-white w-16 rounded-lg font-karla"
                >
                  Done
                </button>
              </div>
            </div>
          )}
          {mode.complete && (
            <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              <X
                className="float-right text-xl hover:text-[#6C63FF] hover:text-2xl"
                onClick={() => setShowPopup(false)}
              />
              <img
                src="/icons/sucess.svg"
                alt="topup-tick"
                className="ml-auto mr-auto pt-28"
              />
              <h1 className="text-center pt-8 text-xl">
                Sucessfully bought messages!
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Topup;
