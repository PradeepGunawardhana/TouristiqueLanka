import React from "react";
import { FiPhoneCall } from "react-icons/fi";
function Home_WhyChooseUs() {
    const data = [
        {
            id: 1,
            icon: <FiPhoneCall className=" size-5 lg:size-7 text-gray-600 shrink-0" />,
            text: "24/7 call center",
        },
        {
            id: 2,
            icon: <FiPhoneCall className="size-5 lg:size-7 text-gray-600 shrink-0" />,
            text: "Hassle-free, secure, and seamless booking",
        },
        {
            id: 3,
            icon: <FiPhoneCall className="size-5 lg:size-7 text-gray-600 shrink-0" />,
            text: "Free cancellation up to 24hours on all transport services",
        },
        {
            id: 4,
            icon: <FiPhoneCall className="size-5 lg:size-7 text-gray-600 shrink-0" />,
            text: "We partner with over 600 hotels, all of which are audited by our health and safety team",
        },

    ];

    const nmubersData1 = [
        {
            id: 1,
            number: "56+",
            Text: "years of Industry Experience",
        },
        {
            id: 2,
            number: "300+",
            Text: "Chauffeur Guides",
        },
    ];
    const nmubersData2 = [
        {
            id: 1,
            number: "175+",
            Text: "Staff Members",
        },
        {
            id: 2,
            number: "600+",
            Text: "Vehicles",
        },
    ];

    return (
        <section className="flex h-max w-full items-center justify-center bg-white">

            <div className="flex flex-col h-full w-full items-center justify-between gap-10 px-5 py-20 sm:flex-row! lg:max-w-7xl! xl:gap-10! xl:px-0!">

                <div className="flex h-full w-full lg:max-w-xl flex-col items-start justify-between gap-16">
                    <h1 className=" text-2xl font-volkhov lg:text-4xl! font-semibold text-blue-900 uppercase">
                        Why Choose Us ?
                    </h1>
                    
                    <div className="flex h-full flex-col items-start justify-center gap-8 ">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className="flex w-full flex-col items-center justify-between gap-3"
                            >
                                <div className="flex w-full items-center justify-start gap-5">
                                    {item.icon}
                                    <h4 className=" text-sm lg:text-base! text-gray-600">{item.text}</h4>
                                </div>
                                <div className="h-[0.6px] w-full bg-gray-500/30" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className=" w-full lg:max-w-lg flex flex-col justify-between items-stretch gap-16">
                    <h1 className=" text-start text-gray-600 text-base lg:text-xl! ">
                        At here, We customize each itinerary to fit your preferences, ensuring a
                        unique experience.
                    </h1>

                    <div className=" flex h-full justify-between items-stretch ">

                        <div className="max-w-1/2  flex flex-col justify-between items-start gap-10 lg:max-w-full">
                            {nmubersData1.map((item) => (
                                <div key={item.id} className="text-start">
                                    <h1 className="mb-2 text-4xl lg:text-7xl font-semibold text-blue-900">
                                        {item.number}
                                    </h1>
                                    <p className=" text-xs lg:text-lg! text-gray-600 uppercase">{item.Text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="max-w-1/2 flex flex-col justify-between items-start gap-10">
                            {nmubersData2.map((item) => (
                                <div key={item.id} className="text-start">
                                    <h1 className="mb-2 text-4xl lg:text-7xl font-semibold text-blue-900">
                                        {item.number}
                                    </h1>
                                    <p className="text-xs lg:text-lg! text-gray-600 uppercase">{item.Text}</p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home_WhyChooseUs;
