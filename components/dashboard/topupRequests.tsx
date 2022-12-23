import React from "react";
import { useReducer } from "react";
import { Plus, Dash } from "react-bootstrap-icons";
type ACTIONTYPE =
  | { type: "topup" }
  | { type: "confirmTopup" }
  | { type: "done" }
  | { type: "approveTopup" };

const initialTopupMode = {
  topup: true,
  confirmTopup: false,
  done: false,
  approveTopup: false,
};
const topupMode = (mode: typeof initialTopupMode, action: ACTIONTYPE) => {
  mode = {
    topup: false,
    confirmTopup: false,
    done: false,
    approveTopup: false,
  };
  switch (action.type) {
    case "topup":
      return {
        ...mode,
        topup: true,
      };
    case "confirmTopup":
      return {
        ...mode,
        confirmTopup: true,
      };
    case "done":
      return {
        ...mode,
        done: true,
      };
    case "approveTopup":
      return {
        ...mode,
        approveTopup: true,
      };
    default:
      return {
        ...mode,
      };
  }
};
function TopupRequests() {
  const [mode, dispatch] = useReducer(topupMode, initialTopupMode);
  return (
    <div>
      {mode.topup && (
        <div className="w-1/2 h-auto pb-10 pt-6 mt-14 ml-auto mr-auto shadow-sm shadow-gray-400">
          <h1 className="text-center text-2xl text-blue-500">Your Balance</h1>
          <div className="h-28 w-[30vw] bg-white ml-auto mr-auto shadow-sm shadow-slate-400 rounded-2xl mt-14">
            <h1 className="text-3xl text-center pt-4">32, 000 FRW</h1>
            <p className="text-center pt-4">Money left in your account</p>
          </div>
          <div className="flex border-b-2 h-16 border-gray-200 justify-between pl-10 pr-10 pt-4 mt-12">
            <h1>Money balance</h1>
            <p className="flex">32,000RWF</p>
          </div>
          <div className="flex border-b-2 h-16  border-gray-200 justify-between pl-10 pr-10 pt-4">
            <h1>SMS Balance</h1>
            <p className="">3200SMS</p>
          </div>
          <div className="flex border-b-2 h-16  border-gray-200 justify-between pl-10 pr-10 pt-4">
            <h1>Money Sent</h1>
            <p className="">32,000RWF</p>
          </div>
          <div className="flex border-b-2 h-16  border-gray-200 justify-between pl-10 pr-10 pt-4">
            <h1>Selled SMS</h1>
            <p className="">3200SMS</p>
          </div>
          <div className="flex flex-col items-center mt-10">
            <button
              onClick={() => dispatch({ type: "confirmTopup" })}
              className="h-10 w-40 bg-blue-500 text-white rounded-lg"
            >
              Top up
            </button>
          </div>
          <div className="flex flex-col items-center mt-4">
            <button className="h-10 w-40 bg-white text-blue-500 border-2 border-blue-500 rounded-lg">
              Buy
            </button>
          </div>
        </div>
      )}
      {mode.confirmTopup && (
        <div className="w-1/2 h-auto pb-10 pt-6 mt-14 ml-auto mr-auto shadow-sm shadow-gray-400">
          <h1 className="text-center text-2xl text-blue-500">Confirm Top up</h1>
          <div className="flex justify-evenly mt-6">
            <div>
              <p className="text-sm">Select number of SMS to sell</p>
              <div className="h-28 w-[15vw] bg-white ml-auto mr-auto shadow-sm shadow-slate-400 rounded-2xl mt-4 flex">
                <button>
                  <Plus className="text-3xl ml-6 text-blue-500" />
                </button>
                <h1 className="text-3xl text-center pt-10 pl-4">40 SMS</h1>
                <button>
                  <Dash className="text-3xl ml-6 text-blue-500" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm">Amount deducted:</p>
              <div className="h-28 w-[15vw] bg-white ml-auto mr-auto shadow-sm shadow-slate-400 rounded-2xl mt-4">
                <h1 className="text-3xl text-center pt-10">3000 FRW</h1>
              </div>
            </div>
          </div>
          <div className="flex border-b-2 h-16 border-gray-200 justify-between pl-10 pr-10 pt-4 mt-12">
            <h1>Money balance</h1>
            <p className="flex">32,000RWF</p>
          </div>
          <div className="flex border-b-2 h-16  border-gray-200 justify-between pl-10 pr-10 pt-4">
            <h1>SMS Balance</h1>
            <p className="">3200SMS</p>
          </div>
          <div>
            <h1 className="text-2xl pl-10 pt-6">Transferring SMS to :</h1>
            <div className="flex ml-10 mt-6">
              <input
                type="text"
                placeholder="Name of agent"
                className="h-16 w-72 border-2 border-blue-500 border-opacity-20 rounded-xl pl-4"
              />
              <input
                type="text"
                placeholder="Type of agent"
                className="h-16 w-72 border-2 border-blue-500 border-opacity-20 rounded-xl pl-4 ml-32"
              />
            </div>
          </div>
          <div className="flex flex-col items-center mt-10 ">
            <button
              onClick={() => dispatch({ type: "done" })}
              className="h-10 w-40 bg-blue-500 text-white rounded-lg"
            >
              Confirm Top up
            </button>
          </div>
          <div className="flex flex-col items-center mt-4">
            <button className="h-10 w-40 bg-white text-blue-500 border-2 border-blue-500 rounded-lg">
              Cancel
            </button>
          </div>
        </div>
      )}

      {mode.done && (
        <div className="w-1/3 h-[70vh] pb-10 pt-14 mt-32 ml-auto mr-auto shadow-sm shadow-gray-400">
          <div className="flex justify-center items-center">
            <img src="/icons/tickCircle.svg" alt="" className="h-40 w-40" />
          </div>
          <p className="text-center pt-4">Top up successfully processed!</p>
          <div className="flex flex-col items-center mt-24 ">
            <button
              onClick={() => dispatch({ type: "approveTopup" })}
              className="h-10 w-40 bg-blue-500 text-white rounded-lg"
            >
              Done
            </button>
          </div>
        </div>
      )}
      {mode.approveTopup && (
        <div className="w-1/2 h-auto pb-10 pt-6 mt-14 ml-auto mr-auto shadow-sm shadow-gray-400">
          <h1 className="text-center text-2xl text-blue-500">Approve Top up</h1>
          <div className="flex justify-evenly mt-20">
            <div className="">
              <p className="text-sm">Number of SMS requested</p>
              <div className="h-28 w-[15vw] bg-white  shadow-sm shadow-slate-400 rounded-2xl mt-6 flex text-center">
                <h1 className="text-3xl pt-10 text-center pl-16">40 SMS</h1>
              </div>
            </div>
            <div>
              <p className="text-sm">Number of SMS requested</p>
              <div className="h-28 w-[15vw] bg-white shadow-sm shadow-slate-400 rounded-2xl mt-6">
                <h1 className="text-3xl text-center pt-10">3000 FRW</h1>
              </div>
            </div>
          </div>
          <div className="flex border-b-2 h-16 border-gray-200 justify-between pl-10 pr-10 pt-4 mt-12">
            <h1>From: </h1>
            <p className="flex">Agent 9310</p>
          </div>
          <div className="flex border-b-2 h-16  border-gray-200 justify-between pl-10 pr-10 pt-4">
            <h1>Money Balance</h1>
            <p className="">36,000RWF</p>
          </div>
          <div className="flex border-b-2 h-16  border-gray-200 justify-between pl-10 pr-10 pt-4">
            <h1>SMS Balance</h1>
            <p className="">3160SMS</p>
          </div>

          <div className="flex flex-col items-center mt-10 ">
            <button className="h-10 w-40 bg-blue-500 text-white rounded-lg">
              Approve Top up
            </button>
          </div>
          <div className="flex flex-col items-center mt-4">
            <button className="h-10 w-40 bg-white text-blue-500 border-2 border-blue-500 rounded-lg">
              Deny
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopupRequests;
