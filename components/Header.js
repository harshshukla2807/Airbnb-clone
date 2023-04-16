import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/react/20/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-5 md:px-10">
      {/* left  */}
      <div
        className="
      relative flex items-center h-10 cursor-pointer my-auto
         "
      >
        <Image
          src="https://links.papareact.com/qd3"
          width={130}
          height={130}
          alt="airbnb logo"
        />
      </div>

      {/* Middle  */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="start your search"
        />

        <MagnifyingGlassIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2 resize-none " />
      </div>

      {/* right  */}

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full
        ">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
