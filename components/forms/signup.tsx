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
        <div className=" w-1/2 h-[100vh]">
          <Image
            width={720}
            height={600}
            alt="signup image"
            src={"/images/signup.png"}
            className="ml-8 mt-32"
          />
        </div>
        {/* </div> */}
        <div className="float-right w-1/2 h-auto">
          <h1 className="text-center font-karia font-bold text-2xl">Sign up</h1>
          <form
            action=""
            className="block mt-16  ml-[25%]"
            onSubmit={handleSubmit(submit)}
          >
            <input
              {...register("fullname")}
              type="text"
              name="fullname"
              placeholder="Name"
              required
              className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6 rounded-lg pl-8 "
            />
            <input
              {...register("phoneNumber")}
              name="phoneNumber"
              type="telephone"
              placeholder="Phone number"
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-4"
              required
            />
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="Email"
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-4"
              required
            />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-4"
              required
            />

            <select
              {...register("agent")}
              name="agent"
              id=""
              required
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-6 "
            >
              <option value="">Type of agent</option>
              <option value="admin">Admin</option>
              <option value="superReseller">Super Reseller</option>
              <option value="reseller">Reseller</option>

              <option value="agent">Agent</option>
            </select>
            <input
              name="checkbox"
              type="checkbox"
              className="h-4 w-4 mt-4 border-solid border border-[#6C63FF] border-opacity-10"
            />
            <span className="pl-2 font-karia">
              I agree to the terms and conditions.
            </span>
            <button
              type="submit"
              className="rounded-lg bg-[#6C63FF] block text-white w-52 h-12 ml-auto mr-auto mt-6 font-semibold"
            >
              Sign up
            </button>
            <div className="flex mt-4 justify-center">
              {/* <img src="/icons/line1.svg" alt="line1" /> */}
              <div className="h-[1px] opacity-20 w-40 bg-[#6C63FF] mt-3"></div>
              <p className="text-[#6C63FF] pl-2 pr-2 ">OR</p>
              <div className="h-[1px] opacity-20 w-40 bg-[#6C63FF] mt-3"></div>
              {/* <img src="/icons/line1.svg" alt="line1" /> */}
            </div>
            <Link href="agentCreate">
              <button className="bg-[#D9D9D9] bg-opacity-10 flex shadow-md font-karia  shadow-slate-400  rounded-lg h-12 w-64 text-center items-center pl-8 ml-auto mr-auto mt-4">
                <img src="/icons/google.svg" alt="google" className="pr-3" />
                Sign Up With Google
              </button>
            </Link>
            <p className="font-karia pt-8 text-center">
              Have an account?
              <Link href="/auth/login" className="text-[#6C63FF] pl-1">
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
