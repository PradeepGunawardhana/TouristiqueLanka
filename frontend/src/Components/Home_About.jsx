import { Button } from "flowbite-react";
import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { LiaFunnelDollarSolid } from "react-icons/lia";
import { FaMedal } from "react-icons/fa";
function Home_About() {
  const cards = [
    {
      id: 1,
      heading: "Trusted Industry Experts",
      details:
        "Operating for over 40 years in the industry, we are well-recognised travel agents.",
      icon: <AiOutlineSafety className="size-8 text-blue-500 lg:size-12" />,
    },
    {
      id: 2,
      heading: "A Cost effective travel choice",
      details: "We provide you the best services at fantastic rates.",
      icon: (
        <LiaFunnelDollarSolid className="size-8 text-blue-500 lg:size-12" />
      ),
    },
    {
      id: 3,
      heading: "Well Reputed Service Providers",
      details:
        "We at Tangerine Tours are well reputed for offering exceptional experiences! ",
      icon: <FaMedal className="size-8 text-blue-500 lg:size-12" />,
    },
  ];

  return (
    <section className="flex h-fit w-full items-center justify-center bg-white">
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 px-5 py-20 lg:max-w-7xl xl:gap-10 xl:px-0!">
        {/* Text Container */}
        <div className="flex flex-col items-center justify-center gap-5">
          {/* Heading */}
          <div className="text-center">
            <p className="font-poppins mb-3 text-[16px] text-gray-500">
              Incredible Island Experiences
            </p>
            <h1 className="font-montserrat text-4xl font-semibold text-blue-900">
              TOURISTIQUE LANKA
            </h1>
          </div>

          <p className="text-justify text-sm leading-6 text-gray-700 lg:text-center!">
            Welcome to TOURISTIQUE LANKA! As a leading travel agent in Sri
            Lanka, we strive to offer you the most memorable travel experience
            on the island with access to the best hotels, top tourist
            attractions, and adventurous activities. We invite travellers from
            all across the globe to a haven of complete rest, relaxation and
            exotic encounters!
          </p>

          <a href="/contactUs">

            <Button
              color="blue"
              className=" uppercase h-8 cursor-pointer rounded-2xl bg-blue-800/90! px-3 text-xs transition-colors duration-300 outline-none! hover:bg-blue-900! focus:ring-0! focus:outline-none sm:h-9 sm:px-3 md:h-10! md:px-7! md:text-sm!   lg:text-base!"
            >
              Reserve Now
            </Button>
          </a>
        </div>

        {/* Why with us Container */}
        <div className="flex h-full w-full flex-col items-center justify-between rounded-lg px-6 py-10 shadow-[0_3px_15px_rgba(0,0,0,0.10)] md:h-80! md:px-16! md:py-14!">
          {/* Heading */}
          <div className="mb-6 flex w-full items-center justify-center lg:justify-start!">
            <h1 className="text-xl font-semibold text-blue-800 capitalize">
              Why Travel with us?
            </h1>
          </div>

          {/* Details Card Container */}

          <div className="flex h-full w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-0">
            {cards.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="flex w-full flex-col items-start justify-between gap-3 md:w-sm!"
                >
                  <div className="flex items-center justify-center">
                    {item.icon}
                  </div>

                  {/* Text Container */}
                  <div className="flex items-center gap-5">
                    <div className="hidden h-0.5 w-5 bg-blue-700 md:w-5 lg:block" />
                    <h3 className="text-sm font-medium text-blue-500 lg:text-base!">
                      {item.heading}
                    </h3>
                  </div>

                  <p className="text-start text-xs leading-5 text-gray-600 lg:text-sm! lg:leading-normal!">
                    {" "}
                    {item.details}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_About;
