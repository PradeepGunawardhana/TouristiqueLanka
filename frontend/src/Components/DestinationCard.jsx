import { Button, Card } from "flowbite-react";
import { LuClock4, LuUsers } from "react-icons/lu";
import { LiaCarSideSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";

import { MdFamilyRestroom } from "react-icons/md";
export function Destination_Card({ imgPath, title = "No Title", tourType = "Cultural", duration = "1 Day" }) {
  return (
    <Card className="max-w-sm h-fit shadow-xl bg-white! border-0 p-0! *:p-4!">

      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <img src={imgPath} alt={title} className="w-full h-full object-cover" />
      </div>
      <a href="#">
        <div className="text-start">
          <h5 className="text-xl font-semibold tracking-tight text-blue-900 uppercase ">
            {title}
          </h5>
          <p className="text-sm font-semibold text-gray-900/50 italic ">
            Cultural Capital of Sri Lanka
          </p>
        </div>
      </a>

      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex w-full items-center justify-start gap-5">
          <IoCalendarOutline className="size-4 md:size-6 " />
          <h1 className="text-sm font-medium text-gray-600 md:text-base! ">
            {duration}
          </h1>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <LiaCarSideSolid className="size-4 md:size-6 " />
          <h1 className="text-sm font-medium text-gray-600 md:text-base! ">
            Transport Facility
          </h1>
        </div>
        <div className="flex w-full items-center justify-start gap-5">
          <LuUsers className="size-4 md:size-6 " />
          <h1 className="text-sm font-medium text-gray-600 md:text-base!">
            {tourType} Tour
          </h1>
        </div>
      </div>

      {/* Devider */}
      <div className="h-[0.5px] w-full bg-gray-500/30" />

      <div className="flex h-full! w-full items-stretch justify-between">
        {/* Rating Container */}
        <div className="flex flex-col items-start justify-between">
          {/* rating stars */}
          <div className=" -ml-px flex h-8 w-full items-center justify-start md:-ml-0.5!">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 text-yellow-300 md:h-5 md:w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* review  */}
          <div className=" flex w-full items-center justify-start ">
            <h5 className="text-xs text-gray-400 md:text-sm">526 reviews</h5>
          </div>
        </div>

        {/*  Price container */}
        <div className="flex flex-col items-end justify-between">

          <a href="/tours">

            <Button
              color="blue"
              className="mt-4 w-full h-10 cursor-pointer rounded-lg bg-blue-800/90! px-4 text-sm transition-colors duration-300 outline-none! hover:bg-blue-900! focus:ring-0! focus:outline-none!"
            >
              More Details
            </Button>
          </a>

        </div>
      </div>
    </Card>
  );
}
