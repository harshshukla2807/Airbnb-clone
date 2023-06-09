import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UserIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header(props) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState("1");
  const router=useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    // console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };
  
  const resetInput=()=>{
    setSearchInput('')
  }

  const search=()=>{
    router.push({
      pathname: '/search',
      query:{
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests
      }
    })
    
  }

  return (
    <header className="sticky top-0 z-50 flex justify-between  flex-wrap md:grid md:grid-cols-3 bg-white shadow-md px-5 py-5 w-auto md:px-10 ">
      {/* left  airbnb img*/}
      <div
      onClick={()=>router.push('/')}
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

      {/* Middle  search*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={props.placeholder || "start your search"}
        />

        <MagnifyingGlassIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2 resize-none " />
      </div>

      {/* right  */}

      <div className="flex items-center space-x-4 justify-end  text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />

        <div
          className="flex items-center space-x-2 border-2 p-2 rounded-full
        "
        >
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of guest
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => {
                setNoOfGuests(e.target.value);
              }}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400 "
            />
          </div>

          <div className="flex justify-around">
            <button onClick={resetInput} className=" text-gray-500">Cancel</button>
            <button onClick={search} className=" text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
