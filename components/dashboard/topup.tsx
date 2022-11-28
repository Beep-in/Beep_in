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

function Topup() {
  return (
    <div>
      <div className="absolute left-32 top-56 list-none flex gap-8 flex-col">
        <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Topup history</li>
        </div>
        <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">Buy SMS</li>
        </div>
        <div className="flex hover:text-[#6C63FF] hover:border-r-8 hover:border-solid hover:border-[#6C63FF] rounded-r-lg w-full pr-20">
          <AiOutlineRight className="mt-1" />
          <li className="pl-4">SMS List</li>
        </div>
      </div>
    </div>
  );
}

export default Topup;
