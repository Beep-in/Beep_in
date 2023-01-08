import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';
import useAuth from '../context/authContext';
// import { useAuth } from '../context/authContext';

interface LoginInput {
  email: string;
  password: string;
}

export default function Signin() {
  const [fields, setFields] = useState<string>();
  const { register, handleSubmit } = useForm<LoginInput>();
  const [cookie, setCookie] = useCookies();
  const { user, login } = useAuth();
  const onSubmit = async (values: LoginInput) => {
    login(values)
    console.log(user)
    // setFields(JSON.stringify(values));
    // const response = await axios.post(
    //   'https://beepin.onrender.com/agent/login',
    //   values,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // );
    // login(response.data.user);
    // console.log(user);
    // setCookie('accessToken', response.data.access_token, {
    //   path: '/',
    //   maxAge: 3600, // Expires after 1hr
    //   sameSite: true,
    // });
    // setCookie('refreshToken', response.data.refresh_TO, {
    //   path: '/',
    //   maxAge: 3600, // Expires after 1hr
    //   sameSite: true,
    // });
    // axios
    //   .post('https://beepin.onrender.com/agent/login', values, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //   .then((response) => {
    //     setUser(response.data.user)
    //      console.log(user)
    //     setCookie('accessToken', response.data.access_token, {
    //       path: '/',
    //       maxAge: 3600, // Expires after 1hr
    //       sameSite: true,
    //     });
    //     setCookie('refreshToken', response.data.refresh_TO, {
    //       path: '/',
    //       maxAge: 3600, // Expires after 1hr
    //       sameSite: true,
    //     });
    //   });
  };

  return (
    <div>
      <div className="flex">
        <img
          src="/icons/corner1.svg"
          alt="corner"
          className="absolute left-0"
        />
        <img
          src="/icons/logo.svg"
          alt="logo"
          className="ml-auto mr-auto mt-4"
        />
        <img src="/icons/dots.svg" alt="dots" />
      </div>

      <div className="flex mt-8 justify-center">
        <div className="mt-6">
          <Image
            width={600}
            height={600}
            alt="sign in image"
            src={'/images/login.png'}
            className="ml-8 mt-28 lg:w-[30vw] sm:w-0"
          />
        </div>
        <div className="float-right lg:w-1/2 sm:w-full h-auto">
          <h1 className="text-center font-karla font-bold text-3xl drop-shadow-lg">
            Welcome back
          </h1>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="block mt-16  ml-[20%]"
          >
            <input
              {...register('email')}
              type="email"
              placeholder="Email"
              className=" block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6 rounded-lg pl-8 font-inter"
            />
            <input
              {...register('password')}
              type="password"
              placeholder="Password"
              className="block border-solid border border-[#6C63FF] border-opacity-10 h-14  w-5/6  rounded-lg pl-8 mt-4 font-inter"
            />
            <div className="flex justify-evenly mt-4">
              <div className="flex ">
                <input
                  type="checkbox"
                  className="h-4 w-4 mt-4 relative  border-solid border border-[#6C63FF] border-opacity-10 flex"
                />
                <span className="pl-2 font-inter pt-3 ">Remember me</span>
              </div>
              <a href="" className="pt-3 font-inter text-[#6C63FF]">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-[#6C63FF] block text-white w-52 h-12 ml-auto mr-auto mt-6 font-semibold font-inter"
            >
              Log in
            </button>
            <div className="flex mt-4 justify-center">
              <div className="h-[1px] opacity-20 w-40 bg-[#6C63FF] mt-3"></div>
              <p className="text-[#6C63FF] pl-2 pr-2  font-inter">OR</p>
              <div className="h-[1px] opacity-20 w-40 bg-[#6C63FF] mt-3"></div>
            </div>
            <button className="bg-[#D9D9D9] bg-opacity-10 flex shadow-md font-karia  shadow-slate-400  rounded-lg h-12 w-64 text-center items-center pl-8 ml-auto mr-auto mt-4 font-inter">
              <img src="/icons/google.svg" alt="google" className="pr-3" />
              Sign In With Google
            </button>
            <p className="font-inter pt-8 text-center">
              Don't have an account?
              <Link
                href="/dashboard/detailView"
                className="text-[#6C63FF] pl-1 font-inter"
              >
                Sign up
              </Link>
            </p>
          </form>
          <div>
            <div className="absolute left-0 bottom-0">
              <img src="/icons/dots.svg" alt="dots" />
            </div>
            <div className=" absolute right-0 bottom-0">
              <img src="/icons/corners3.svg" alt="corner" className="mt-0 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
