// import { type } from "os";

import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

export type responseContextType = {
  success: boolean | null;
  failure: boolean | null;
  message: string;
  updateSuccess: () => void;
  updateFailure: () => void;
  updateMessage: (data : string) => void;
};
const authContextDefaultValues: responseContextType = {
  success: null,
  failure: null,
  message: '',

  updateSuccess: () => {},
  updateFailure: () => {},
  updateMessage: () => {},
};
export const ResponseContext = createContext<responseContextType>(
  authContextDefaultValues,
);

interface LoginInput {
  email: string;
  password: string;
}

interface Props {
  children: ReactNode;
}

export function ResponseProvider({ children }: Props) {
  const [success, setSuccess] = useState<boolean>(false);
  const [failure, setFailure] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const updateSuccess= () => {
    setSuccess(!success);
  };
  const updateFailure = () => {
    setFailure(!failure);
  };
  const updateMessage = (data: string) => {
    setMessage(data);
  };

  const value = {
    success,
    updateSuccess,
    failure,
    updateFailure,
    message,
    updateMessage,
  };
  useEffect(()=>{
    setTimeout(()=>{
      setFailure(false)
      setSuccess(false)
    }, 5000)
  })
  return (
    <ResponseContext.Provider value={value}>
      {children}
    </ResponseContext.Provider>
  );
}

export default function useResponse() {
  return useContext(ResponseContext);
}
