// import { type } from "os";

import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import React from 'react';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
export interface user{
  id: string;
  name: string;
  phone_number: string;
  created_by: string;
  email: string;
  address: string;
  position_id: number;
  total_sms: number;
  status: string;
  created_at: string;
  groups: Array<any>;
}; 


export type authContextType = {
  user: user | null;
  login:(data:LoginInput)=> void;
  logout: () => void;

};
const authContextDefaultValues: authContextType = {
  user: null,
  login: (data : LoginInput) => {},
  logout: () => {},
  
};
export const AuthContext = createContext<authContextType>(
  authContextDefaultValues,
);

interface LoginInput {
  email: string;
  password: string;
}

interface Props  {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<user | null>(null);

  const [loading, setLoading] = React.useState<boolean>(true);
  const router = useRouter()
        React.useEffect(() => {
      /* we are going to use localStorage for user storage
          but we will leter use cookies when integrated with backend.
      */
      setLoading(true);
      const user = localStorage.getItem('user');
      if (user) {
          setUser(JSON.parse(user));
      } else {
          if (router.pathname !== '/')
              router.push("/auth/login")
      }
      setLoading(false);
      // console.log("pathname", router.pathname);
  }, [router.pathname]);
  const login = async (values: LoginInput) => {
    // setFiel(JSON.stringify(values));
    // setLoading(true);
    await axios.post(
      'https://beepin.onrender.com/agent/login',
      values,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then(({data})=>{
      setUser(data.user);
      router.push('/dashboard/messageHandler')
      setCookie('accessToken', data.access_token, {
        path: '/',
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });
      setCookie('refreshToken', data.refresh_token, {
        path: '/',
        maxAge: 3600, // Expires after 1hr
        sameSite: true,
      });

    })
  

 };

  const logout = () => {
    setUser({
        id: '',
        name: '',
        phone_number: '',
        email: '',
        created_by: '',
        position_id: 0,
        total_sms: 0,
        status: '',
        created_at: '',
        address: '',
        groups: [],
    });
  };
 


  const value = {
    user,
    login,
    logout,
    loading,

  };

  return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>);
}

export default function useAuth() {
  return useContext(AuthContext);
}

