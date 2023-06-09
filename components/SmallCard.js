import Image from "next/image";
import React from "react";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
    
      <div className="relative h-16 w-16">
        <Image src={img} alt="an image" fill className="rounded-lg"/>
      </div>
      
      <div className="w-fit">
        <h2 className="text-sm font-semibold">{location}</h2>
        <h3 className="text-sm">{distance}</h3>
      </div>
      
    </div>
  );
}

export default SmallCard;
