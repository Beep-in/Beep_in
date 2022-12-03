import React, { useState } from "react";
import { useReducer, useRef } from "react";
import Link from "next/link";
import { Upload } from "react-bootstrap-icons";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";
const initialMode = {
  momo: false,
  bank: false,
  card: false,
  allMethods: true,
  complete:false,
};
type ACTIONTYPE =
  | { type: "momo" }
  | { type: "bank" }
  | { type: "card" }
  | { type: "allMethods" }
  | { type: "complete"}

const paymentMode = (mode: typeof initialMode, action: ACTIONTYPE) => {
  mode = {
    momo: false,
    bank: false,
    card: false,
    allMethods: false,
    complete:false,
  };
  switch (action.type) {
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
        complete:true
      }
    default:
      return {
        ...mode,
      };
  }
};
function PaymentMethod() {
  const [mode, dispatch] = useReducer(paymentMode, initialMode);

  return (
    <div className="h-full w-full bg-gray-800 opacity-60 absolute top-0">
      {mode.allMethods && (
        <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
          <img
            src="/icons/topupTick.svg"
            alt="topup-tick"
            className="absolute top-14 ml-[14vw]"
          />
          <h1 className="font-bold text-xl pt-20 text-center">
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
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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
                  // onChange={radioHandler}
                  onClick={() => dispatch({ type: "bank" })}
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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
                  // onChange={radioHandler}
                  onClick={() => dispatch({ type: "card" })}
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Master Card / Paypal / VISA Card
                </label>
              </div>
            </form>
          </div>

          <div className="flex mt-16 justify-between ml-16 mr-16">
            <Link href="topupResult">
              <button className="flex  items-center font-normal">
                <BiChevronLeftCircle className="text-4xl text-blue-500 mr-4" />
                Topup
              </button>
            </Link>
            <button className="flex  items-center font-normal">
              Continue
              <BiChevronRightCircle className="text-4xl text-blue-500 ml-4" />
            </button>
          </div>
        </div>
      )}
      {mode.momo && (
        <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
          <img
            src="/icons/topupTick.svg"
            alt="topup-tick"
            className="absolute top-14 ml-[14vw]"
          />
          <h1 className="font-bold text-xl pt-14 text-center">Momo payment</h1>
          <form action="" className="ml-16 mt-14">
            <input
              type="text"
              name="nameeofagent"
              placeholder="Your phone number"
              required
              className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 "
            />
            <input
              type="text"
              name="mobilrnumber"
              placeholder="Amount(Frw)"
              required
              className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 mt-12"
            />
          </form>
          <div className="flex mt-20 justify-between ml-16 mr-20">
            <Link href="methodofPayment">
              <button className="flex  items-center font-normal">
                <BiChevronLeftCircle className="text-4xl text-blue-500 mr-4" />
                Topup
              </button>
            </Link>
            
            <button onClick={() => dispatch({type:"complete"})} className="bg-blue-500 text-white w-16 rounded-lg ">
              Done
            </button>
            
          </div>
        </div>
      )}
      {mode.bank && (
        <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
          <img
            src="/icons/topupTick.svg"
            alt="topup-tick"
            className="absolute top-14 ml-[14vw]"
          />
          <h1 className="font-bold text-xl pt-14 text-center">By Bank</h1>
          <form action="" className=" mt-10">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-2/3 h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="text-3xl" />
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 pt-4">
                    Upload proof of payment
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </form>
          <div className="flex mt-20 justify-between ml-16 mr-20">
            <Link href="methodofPayment">
              <button className="flex  items-center font-normal">
                <BiChevronLeftCircle className="text-4xl text-blue-500 mr-4" />
                Topup
              </button>
            </Link>
            <button onClick={() => dispatch({type:"complete"})} className="bg-blue-500 text-white w-16 rounded-lg ">
              Done
            </button>
          </div>
        </div>
      )}
      {mode.card && (
        <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
          <img
            src="/icons/topupTick.svg"
            alt="topup-tick"
            className="absolute top-14 ml-[14vw]"
          />
          <h1 className="font-bold text-xl pt-14 text-center">By card</h1>
          <form action="" className="ml-16 mt-10">
            <label htmlFor="">CARD NUMBER</label>
            <input
              type="text"
              name="nameeofagent"
              placeholder="Card number"
              required
              className=" block border-solid border bg-[#D9D9D9]  h-14 mt-2  w-5/6 rounded-lg pl-8 "
            />
            <div className="flex mt-2">
              <div className="">
                <label htmlFor="">EXPIRATION DATE</label>
                <div className="flex">
                  <input
                    type=""
                    name="mobilrnumber"
                    placeholder=""
                    required
                    className=" block border-solid border bg-[#D9D9D9]  h-14 w-24 rounded-lg pl-4  mt-2 pr-4"
                  />
                  <input
                    type=""
                    name="mobilrnumber"
                    placeholder=""
                    required
                    className=" block border-solid border bg-[#D9D9D9]  h-14 w-24 rounded-lg ml-4  mt-2 pl-4 pr-4"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="">CVC</label>

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
              <label htmlFor="" className="pt-4">
                CARD HOLDER'S NAMES
              </label>
         <input
              type="text"
              name="numberofsms"
              placeholder="Number of SMS"
              required
              className=" block border-solid border bg-[#D9D9D9]  h-14  w-5/6 rounded-lg pl-8 mt-2 "
            />
         </div>
          </form>
          <div className="flex mt-8 justify-between ml-16 mr-20">
            <Link href="methodofPayment">
              <button className="flex  items-center font-normal">
                <BiChevronLeftCircle className="text-4xl text-blue-500 mr-4" />
                Topup
              </button>
            </Link>
            <button onClick={() => dispatch({type:"complete"})} className="bg-blue-500 text-white w-16 rounded-lg ">
              Done
            </button>
          </div>
        </div>
      )}
      {mode.complete && (
              <div className="h-[70vh] w-1/3 bg-white shadow-sm shadow-slate-400 ml-auto mr-auto mt-24">
              
                 <img
            src="/icons/sucess.svg"
            alt="topup-tick"
            className="ml-auto mr-auto pt-28"
          />
            <h1 className="text-center pt-8 text-xl">Sucessfully bought  messages!</h1>
          
            </div>

      )}
    </div>
  );
}

export default PaymentMethod;
