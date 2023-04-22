import Image from "next/image";
import React from "react";
import { HeartIcon } from "@heroicons/react/20/solid";
import { StarIcon } from "@heroicons/react/20/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b hover:shadow-2xl cursor-pointer hover:scale-105 duration-300 ease-out xl:pl-10 xl:pr-10">
      <div className="relative h-auto w-44 md:h-52 md:w-80 flex-shrink-0  bg-cover ">
        <Image src={img} fill className="bg-contain rounded-md"/>
      </div>
      <div className="flex flex-col flex-grow pl-5 pr-1 md:pr-3 ">
        <div className="flex justify-between">
          <p className="text-sm">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="font-semibold text-base md:text-lg lg:text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />

        <p className="text-sm font-normal pt-2 text-gray-500 flex md:flex-grow lg:flex-grow">
          {description}
        </p>

        <p className="font-bold text-lg pt-5 md:pt-10 md:text-xl lg:text-2xl md:flex-grow flex justify-end items-end">{price}</p>

        <div className="flex justify-between">
          <div className="flex items-center">
            <StarIcon className="h-4 text-red-400" />
            <p className="">{star}</p>
          </div>
          <p className="text-right font-extralight">{total}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
