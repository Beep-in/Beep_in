import Image from "next/image";
import { FaBars } from "react-icons/fa";
export default function TopNavbar() {
  return (
    <div>
      <div className=" w-full mt-4 border-b-2 pb-4">
        <div className="flex gap-36 ml-8 items-center">
          <FaBars className="text-3xl" />
          <div className="flex gap-24">
            <img src="/icons/logo.svg" alt="logo" className="" />

            <div className="flex">
              <form action="">
                <div className="flex">
                  <input
                    type="search"
                    placeholder=" Search"
                    className="w-[35vw] h-12 bg-[#D9D9D9] opacity-25 pl-12 mt-2"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex absolute right-10 gap-4">
            <img
              src="/icons/notification.svg"
              alt="notification"
              className=""
            />
            <Image
              height={100}
              width={33}
              src={"/images/profile.jpg"}
              alt="profile"
              className="rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
