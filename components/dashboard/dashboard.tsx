import React from "react";
import Image from "next/image";
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
import { useReducer, useRef } from "react";
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

const initialStatics = {
  overview: false,
  report: false,
  sms_list: false,
};
const staticsDisplay = (view: typeof initialStatics, action: ACTIONTYPE) => {
  view = {
    overview: false,
    report: false,
    sms_list: false,
  };
  switch (action.type) {
    case "overview":
      return {
        ...view,
        overview: true,
      };

    case "report":
      return {
        ...view,
        report: true,
      };

    case "sms_list":
      return {
        ...view,
        sms_list: true,
      };
    default:
      return {
        ...view,
      };
  }
};
function Dashboard() {
  const [statistics, displayStatistics] = useReducer(
    staticsDisplay,
    initialStatics
  );

  return (
    <div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <button
          onClick={() => displayStatistics({ type: "overview" })}
          className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Overview</li>
        </button>
        <button
          onClick={() => displayStatistics({ type: "report" })}
          className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Report</li>
        </button>
        <button
          onClick={() => displayStatistics({ type: "sms_list" })}
          className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20"
        >
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">SMS List</li>
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
