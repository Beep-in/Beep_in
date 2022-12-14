import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormInput {
  fullname: string;
  phoneNumber: Number;
  email: string;
  password: string;
  agent: string;
}

export default function Signup() {
  const [input, setInput] = useState<string>();
  const { register, handleSubmit } = useForm<FormInput>();

  const submit = (data: FormInput) => {
    setInput(JSON.stringify(data));
    console.log(data);
    axios.post("")
  };

  return (
    <div>
      <div className="flex">
        <img
          src="/icons/corner.svg"
          alt="corner"
          className="mt-0 absolute left-0"
        />
        <img
          src="/icons/logo.svg"
          alt="logo"
          className="ml-auto mr-auto mt-4"
        />
      </div>
      <div className="flex mt-8">
        <div className=" lg:w-1/2 h-[100vh] sm:w-0">
          <Image
            width={720}
            height={600}
            alt="signup image"
            src={"/images/signup.png"}
            className="ml-8 mt-28 lg:w-[42vw] sm:w-0"
          />
        </div>
        {/* </div> */}
        <div className="float-right lg:w-1/2 sm:w-full h-auto">
          <h1 className="text-center font-karla font-bold text-2xl drop-shadow-lg ">Sign up</h1>
          <form
            action=""
            className="block mt-16  lg:ml-[25%] sm:ml-[20%]"
            onSubmit={handleSubmit(submit)}
          >
            <input
              {...register("fullname")}
              type="text"
              name="fullname"
              placeholder="Name"
              required
              className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6 rounded-lg pl-8 font-inter"
            />
            <input
              {...register("phoneNumber")}
              name="phoneNumber"
              type="telephone"
              placeholder="Phone number"
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-4 f font-inter"
              required
            />
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="Email"
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-4 font-inter"
              required
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-4 font-inter"
              required
            />

            <select
              {...register("agent")}
              name="agent"
              id=""
              required
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-6 font-inter"
            >
              <option value="" className="font-inter">Type of agent</option>
              <option value="admin" className="font-inter">Admin</option>
              <option value="superReseller" className="font-inter">Super Reseller</option>
              <option value="reseller" className="font-inter">Reseller</option>
             <option value="agent" className="font-inter">Agent</option>
            </select>
            <input
              name="checkbox"
              type="checkbox"
              className="h-4 w-4 mt-4 border-solid border border-[#6C63FF] border-opacity-10 font-inter"
            />
            <span className="pl-2 font-karla">
              I agree to the terms and conditions.
            </span>
            <button
              type="submit"
              className="rounded-lg bg-[#6C63FF] block text-white w-52 h-12 ml-auto mr-auto mt-6 font-semibold font-inter"
            >
              Sign up
            </button>
            <div className="flex mt-4 justify-center">
              {/* <img src="/icons/line1.svg" alt="line1" /> */}
              <div className="h-[1px] opacity-20 w-40 bg-[#6C63FF] mt-3 font-inter"></div>
              <p className="text-[#6C63FF] pl-2 pr-2 font-inter">OR</p>
              <div className="h-[1px] opacity-20 w-40 bg-[#6C63FF] mt-3"></div>
              {/* <img src="/icons/line1.svg" alt="line1" /> */}
            </div>
            <Link href="agentCreate">
              <button className="bg-[#D9D9D9] bg-opacity-10 flex shadow-md font-karia  shadow-slate-400  rounded-lg h-12 w-64 text-center items-center pl-8 ml-auto mr-auto mt-4 font-inter">
                <img src="/icons/google.svg" alt="google" className="pr-3" />
                Sign Up With Google
              </button>
            </Link>
            <p className="font-karia pt-8 text-center font-inter">
              Have an account?
              <Link href="/auth/login" className="text-[#6C63FF] pl-1 font-inter">
                Log in
              </Link>
            </p>
          </form>
          <div className="">
            <img
              src="/icons/corner2.svg"
              alt="corner"
              className=" absolute right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
