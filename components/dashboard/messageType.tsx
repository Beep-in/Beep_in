import React from "react";
import Image from "next/image";
import { useReducer, useRef } from "react";
import Link from "next/link";
import {
  FaRegComments,
  FaRegAddressBook,
  FaBook,
  FaRegPaperPlane,
} from "react-icons/fa";
import {
  GraphUp,
  Folder,
  People,
  JournalCheck,
  Download,
  Check2All,
  Trash3,
} from "react-bootstrap-icons";

import {
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineLineChart,
  AiOutlineRight,
  AiOutlineEye,
} from "react-icons/ai";
const initialReciever = {
  single: false,
  bulk: false,
  group: false,
  messageIcon: false,
};
type ACTIONTYPE =
  | { type: "message" }
  | { type: "book" }
  | { type: "teams" }
  | { type: "topup" }
  | { type: "chart" }
  | { type: "single" }
  | { type: "bulk" }
  | { type: "group" }
  | { type: "messageIcon" }
  | { type: "overview" }
  | { type: "report" }
  | { type: "sms_list" };
const recieverType = (reciever: typeof initialReciever, action: ACTIONTYPE) => {
  reciever = {
    single: false,
    bulk: false,
    group: false,
    messageIcon: false,
  };
  switch (action.type) {
    case "single":
      return {
        ...reciever,
        single: true,
      };

    case "bulk":
      return {
        ...reciever,
        bulk: true,
      };

    case "group":
      return {
        ...reciever,
        group: true,
      };
    default:
      return {
        ...reciever,
      };
  }
};

function MessageType() {
  const [recieve, display] = useReducer(recieverType, initialReciever);
  return (
    <div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <Link href="">
          <button
            onClick={() => display({ type: "single" })}
            className="flex  hover:text-[#6C63FF] w-full pr-20"
          >
            <AiOutlineRight className="mt-1" />
            <li className="pl-4 ">Single</li>
            {/* <AiOutlinePlus className=""/> */}
          </button>
        </Link>
        <button
          onClick={() => display({ type: "bulk" })}
          className="flex hover:text-[#6C63FF] w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Bulk</li>
        </button>
        <button
          onClick={() => display({ type: "group" })}
          className="flex hover:text-[#6C63FF]  w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Group</li>
        </button>
      </div>
    </div>
  );
}

export default MessageType;
