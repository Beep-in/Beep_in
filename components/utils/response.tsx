import { X } from "react-bootstrap-icons"
import useResponse from "../context/responseContext"

export default function Response() :JSX.Element{
    const {success, failure, updateSuccess, message} = useResponse()
    return (
        <div>
          {success && (
            <div className="h-24 w-64 bg-transBlue shadow-sm shadow-slate-400 absolute bottom-10 right-5">
              <X
                className="float-right text-xl hover:text-[#6C63FF]"
                onClick={() => updateSuccess()}
              />
            
              <div className="flex w-full gap-2 justify-center ">
                <img  
                src="/icons/messegeSuccess.svg"
                alt="messege-tick"
                className="w-8 h-8 "
              />
                <h1 className="text-center text-lg text-[#6C63FF]">Success!</h1>
              </div>
                <p className="text-center text-[14px]">
                 {message}
                </p>
            </div>
          )}
           {failure && (
            <div className="h-24 w-64 bg-transBlue shadow-sm shadow-slate-400 absolute bottom-10 right-5">
              <X
                className="float-right text-xl hover:text-[#6C63FF]"
                onClick={() => updateSuccess()}
              />
            
              <div className="flex w-full gap-2 justify-center ">
                <img  
                src="/icons/messegeSuccess.svg"
                alt="messege-tick"
                className="w-8 h-8 "
              />
                <h1 className="text-center text-lg text-red-500">Ooops!!</h1>
              </div>
                <p className="text-center text-[14px]">
                  {message}
                </p>
            </div>
          )}
        </div>
    )
}