"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu";

// flex flex-col w-[1000px] my-0 mx-auto
// bg-[#ffffff40]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {" "}
      <section
        className=" flex bg-sky-600 justify-between px-6  items-center  h-auto py-2 w-full my-0  shadow-md select-none"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="text-3xl  font-bold tracking-tighter leading-tight flex items-center">
          <Link
            href="/"
            className="font-montserrat text-white  text-nowrap	 rounded-md  "
          >
            Eugene Go Club
          </Link>
        </div>
        <ul className="font-montserrat  text-white flex space-x-2 px-8 items-center tracking-tighter leading-tight xs:hidden ">
          {/* <li className="cursor-pointer hover:underline rounded-md hover:bg-slate-200 px-4 py-2">
          <Link href="/contact">Contact</Link>
        </li> */}
          <li className="cursor-pointer rounded-md  px-4 py-2 ">
            <Link href="https://discord.gg/qVCqJYyVUX" target="_blank">
              Discord
            </Link>
          </li>
          <li className="cursor-pointer  rounded-md  px-4 py-2">
            <Link
              href="https://www.meetup.com/eugene-go-players/events"
              target="_blank"
            >
              Meetup
            </Link>
          </li>
          <li className="cursor-pointer rounded-md  px-4 py-2">
            <Link href="/faqs">FAQs</Link>
          </li>
          <li className="cursor-pointer rounded-md  px-4 py-2">
            <Link href="/events">Events</Link>
          </li>
        </ul>
        <button
          className="flex-col justify-center items-center   "
          onClick={handleClick}
        >
          <span
            className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
      </section>
      {isOpen ? <Menu /> : null}
    </>
  );
}
