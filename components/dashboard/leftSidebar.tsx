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

const LeftSidebar = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-24 bg-[hsl(0,0%,95%)]  pt-28 h-auto pb-9 flex gap-7 flex-col">
          <Link href="messageHandler">
            <FaRegComments className="w-full h-8   hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
          </Link>

          <JournalCheck className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
          <Link href="groupManagement">
          <People className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
          </Link>
          <Link href="topUpDetails">
            <Folder className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
          </Link>
          <Link href="dashboardView">
            <AiOutlineLineChart className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
          </Link>

          <div className=" gap-7 flex flex-col mt-28">
            <AiOutlinePlus className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
            <AiOutlineSetting className="w-full h-8  hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg text-sm font-light" />
          </div>
        </div>
        <div className="h-88 w-[1px] ml-52 bg-blue-500 opacity-25"></div>
      </div>
    </div>
  );
};

export default LeftSidebar;
