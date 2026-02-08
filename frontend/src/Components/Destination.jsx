import { Button } from "flowbite-react";
import React from "react";
import { Destination_Card } from "./DestinationCard";
import img1 from "../Assets/img2.jpg";

import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";
function Destination() {
  return (
    <section className="flex h-fit w-full items-center justify-center bg-slate-100">

      <div className=" w-full py-20 px-5 flex h-full  flex-col items-center justify-center gap-10 xl:px-0 lg:max-w-7xl ">

        {/* Text Container Row */}
        <div className="  flex flex-col gap-4 md:flex-row md:items md:gap-0-center w-full items-start justify-between">

          <div className="flex max-w-2xl! flex-col justify-center items-start gap-5">
            <h1  className=" font-volkhov text-2xl lg:text-4xl! font-semibold  text-blue-900" >POPULAR DESTINATIONS </h1>
            <p className=" text-sm lg:text-lg! text-gray-600 font-montserrat font-medium">
              Explore the magic of Sri Lanka's most popular destinations. From
              ancient cities to misty highlands and sun-kissed beaches, discover
              our island's best.
            </p>
          </div>

         <Button    color="blue"  className="h-8 cursor-pointer rounded-2xl px-3 text-xs transition-colors duration-300 outline-none! bg-blue-800/90! hover:bg-blue-900! focus:ring-0! focus:outline-none sm:h-9 sm:px-3 md:h-10 md:px-5 md:text-sm lg:px-5 lg:text-base!">
            
            
            Discover More
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />

          </Button>

        </div>

        {/* Card Container Row */}

        <div className=" flex flex-col gap-10 md:flex-row justify-between items-center w-full  ">

          <Destination_Card imgPath={img1} title="Sigiriya" />
          <Destination_Card imgPath={img1} title="Sigiriya" />
          <Destination_Card imgPath={img1} title="Sigiriya" />
        </div>

      </div>
    </section>
  );
}

export default Destination;
