import { setDefaultResultOrder } from "dns";
import React from "react";
import { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
interface FormInput {
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
  address?: string;
}
type ACTIONTYPE =
  | { type: "agentType" }
  | { type: "superReseller" }
  | { type: "reseller" }
  | { type: "agent" };

const initialUser = {
  agentType: true,
  superReseller: false,
  reseller: false,
  agent: false,
};
const createUser = (user: typeof initialUser, action: ACTIONTYPE) => {
  user = {
    agentType: false,
    superReseller: false,
    reseller: false,
    agent: false,
  };
  switch (action.type) {
    case "agentType":
      return {
        ...user,
        agentType: true,
      };
    case "superReseller":
      return {
        ...user,
        superReseller: true,
      };
    case "reseller":
      return {
        ...user,
        reseller: true,
      };
    case "agent":
      return {
        ...user,
        agent: true,
      };
    default:
      return {
        ...user,
      };
  }
};

function CreateAgent() {
  const [user, dispatch] = useReducer(createUser, initialUser);
  const [input, setInput] = React.useState<string>();
  const { register, handleSubmit } = useForm<FormInput>();
  const create = (data: FormInput) => {
    setInput(JSON.stringify(data));
    console.log(data);
   axios.post("https://beepin.onrender.com/agent/create", data,
    {
      headers: {
        "Content-Type":"application/json"
      },
    
    }).then((res) => {
     console.log(res);
      
  });
};
  return (
    <div>
      {user.agentType && (
        <div className="flex flex-col mt-24">
          <h1 className="text-3xl font-extrabold text-center uppercase">
            Which agent do you want to create?
          </h1>
          <div className="mt-14 flex flex-col ml-auto mr-auto">
            <button
              onClick={() => dispatch({ type: "superReseller" })}
              className="h-16 w-96 bg-blue-500 text-white text-center rounded-xl"
            >
              SUPER RESELLER
            </button>
            <button
              onClick={() => dispatch({ type: "reseller" })}
              className="h-16 w-96 bg-blue-500 text-white text-center rounded-xl mt-10"
            >
              RESELLER
            </button>
            <button
              onClick={() => dispatch({ type: "agent" })}
              className="h-16 w-96 bg-blue-500 text-white text-center rounded-xl mt-10"
            >
              AGENT
            </button>
          </div>
        </div>
      )}
      {user.superReseller && (
        <div>
          <div className="flex justify-center mt-8">
            <img src="/icons/logo.svg" alt="" className="text-center" />
          </div>
          <p className="text-center">
            Register Agents to give them access to Beep-In platform
          </p>
          <div className="mt-14 w-1/3 ml-auto mr-auto">
            <form
              action=""
              className="flex flex-col"
              onSubmit={handleSubmit(create)}
            >
              <input
                {...register("name"
                
                )}
                aria-invalid={Error.name ? "true" : "false"}
                type="text"
                placeholder="Names"
                name="name"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10"
                required
              />
       
              <input
                {...register("email")}
                type="text"
                placeholder="Email"
                name="email"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                {...register("phoneNumber")}
                type="number"
                placeholder="Contact Phone"
                name="phoneNumber"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                type="text"
                placeholder="TIN/NID"
                name="tin"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6 "
              />
              <input
                {...register("address")}
                type="text"
                placeholder="Address"
                name="address"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                {...register("password", {

                  minLength: 6,
                  max:10,
                  pattern: /[A-Za-z]{3}/

                })}
                type="password"
                placeholder="Password"
                name="password"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <div className="mt-8 flex justify-between">
                <button className="h-14 w-28 shadow-sm rounded-xl shadow-slate-500 bg-white text-blue-500">
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="h-14 w-28 bg-blue-500 text-white rounded-xl "
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {user.reseller && (
        <div>
          <div className="flex justify-center mt-8">
            <img src="/icons/logo.svg" alt="" className="text-center" />
          </div>
          <p className="text-center">
            Register Agents to give them access to Beep-In platform
          </p>
          <div className="mt-14 w-1/3 ml-auto mr-auto">
            <form
              action=""
              className="flex flex-col"
              onSubmit={handleSubmit(create)}
            >
              <input
                {...register("name")}
                name="name"
                type="text"
                placeholder="Reseller Names"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10"
                required
              />
              <input
                {...register("email")}
                name="email"
                type="text"
                placeholder="Reseller Email"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                {...register("phoneNumber")}
                name="phoneNumber"
                type="number"
                placeholder="Reseller Contact Phone"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                type="text"
                placeholder="TIN/NID"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6 "
                required
              />
              <input
                {...register("address")}
                name="address"
                type="text"
                placeholder="Reseller Address"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                {...register("password")}
                name="password"
                type="password"
                placeholder="Password"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <div className="mt-8 flex justify-between">
                <button className="h-14 w-28 shadow-sm rounded-xl shadow-slate-500 bg-white text-blue-500">
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="h-14 w-28 bg-blue-500 text-white rounded-xl "
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {user.agent && (
        <div>
          <div className="flex justify-center mt-8">
            <img src="/icons/logo.svg" alt="" className="text-center" />
          </div>
          <p className="text-center">
            Register Agents to give them access to Beep-In platform
          </p>
          <div className="mt-14 w-1/3 ml-auto mr-auto">
            <form
              action=""
              className="flex flex-col"
              onSubmit={handleSubmit(create)}
            >
              <input
                {...register("name")}
                name="name"
                type="text"
                placeholder="Agent Names"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10"
                required
              />
              <input
                {...register("email")}
                name="email"
                type="text"
                placeholder="Agent Email"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                {...register("phoneNumber")}
                name="phoneNumber"
                type="number"
                placeholder="Agent Contact Phone"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                type="text"
                placeholder="TIN/NID"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6 "
                required
              />
              <input
                {...register("address")}
                name="address"
                type="text"
                placeholder="Agent Address"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <input
                {...register("password")}
                name="password"
                type="password"
                placeholder="Password"
                className="h-16 border-2 border-blue-500 border-opacity-20 rounded-lg pl-10 mt-6"
                required
              />
              <div className="mt-8 flex justify-between">
                <button className="h-14 w-28 shadow-sm rounded-xl shadow-slate-500 bg-white text-blue-500">
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="h-14 w-28 bg-blue-500 text-white rounded-xl "
                >
                  SAVE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateAgent;