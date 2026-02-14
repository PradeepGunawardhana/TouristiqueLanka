import React from 'react'
import { Hero2 } from '../Components/Hero2'
import { Button } from 'flowbite-react'

import img1 from "../Assets/tourimg1.jpg";
import img2 from "../Assets/tourimg2.jpg";
import img3 from "../Assets/tourimg3.jpg";
import img4 from "../Assets/tourimg4.jpg";

function Tours() {

    const ToursData = [
        {
            id: 1,
            title: "Sri Lanka Golden Experience Tour",
            time: "6 Nights / 7 Days",
            description: "Discover the heart of Sri Lanka on a beautifully balanced journey through ancient wonders, misty mountains, and vibrant city life.",
            introduction: "From the moment you arrive in Katunayake, this tour takes you through the golden coastline of Negombo, the legendary Sigiriya Rock Fortress, the spiritual charm of Kandy, and the refreshing tea hills of Nuwara Eliya before ending in the lively capital city of Colombo.",
            includes: [
                "Katunayake",
                "Negombo",
                "Sigiriya",
                "Kandy",
                "Nuwara Eliya",
                "Colombo"
            ],
            img: img1,
            price: "$690",
            rating: 4.9,
            reviews: 302,
            headCount: "person"
        },


        {
            id: 2,
            title: "Mini Tour: Essential Sri Lanka Escape",
            time: "3 Nights / 4 Days",
            description: "Perfect for travelers short on time but eager to experience Sri Lanka’s most iconic highlights.",
            introduction: "Starting from Katunayake, explore the majestic Sigiriya Rock Fortress, immerse yourself in the cultural soul of Kandy, unwind by the beaches of Negombo, and experience the modern energy of Colombo, all in one compact yet unforgettable journey.",
            includes: [
                "Katunayake",
                "Sigiriya",
                "Kandy",
                "Colombo",
                "Negombo"
            ],
            img: img2,
            price: "$390",
            rating: 4.7,
            reviews: 302,
            headCount: "person"
        },
        {
            id: 3,
            title: "Cultural Heritage Tour",
            time: "9 Nights / 10 Days",
            description: "An unforgettable island adventure covering Sri Lanka’s cultural treasures, breathtaking hill country, wildlife safaris, and tropical beaches.",
            introduction: "This immersive journey begins in Katunayake and takes you through the iconic Sigiriya Rock Fortress, the sacred city of Kandy, the cool landscapes of Nuwara Eliya and Ella, thrilling safaris in Yala, and relaxing beach escapes in Mirissa and Bentota before concluding in Colombo.",
            includes: [
                "Katunayake",
                "Sigiriya",
                "Kandy",
                "Nuwara Eliya",
                "Ella",
                "Yala",
                "Mirissa",
                "Bentota",
                "Colombo"
            ],
            img: img3,
            price: "$965",
            rating: 5.0,
            reviews: 302,
            headCount: "person"
        },

        {
            id: 4,
            title: "Romantic Honeymoon Tour",
            time: "6 Nights / 7 Days",
            description: "Celebrate your new beginning with a romantic journey through Sri Lanka’s misty mountains and golden beaches.",
            introduction: "From your arrival in Katunayake, enjoy intimate moments in the cultural city of Kandy, stroll hand-in-hand through the cool tea gardens of Nuwara Eliya, and unwind together on the peaceful shores of Mirissa — designed especially for couples seeking love, relaxation, and unforgettable memories.",
            includes: [
                "Katunayake",
                "Kandy",
                "Nuwara Eliya",
                "Mirissa"
            ],
            img: img4,
            price: "$1250",
            rating: 4.9,
            reviews: 189,
            headCount: "couple"
        }

    ]

    return (
        <div className="w-full bg-linear-to-b from-blue-50 to-white">
            <Hero2
                title={'Tours'}
                subtext={"Explore our curated selection of tours across Sri Lanka."}
            />

            <section className="flex flex-col w-full items-center justify-center bg-white gap-12 py-12 md:py-20 px-4">

                {/* Tour Grid */}
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {ToursData.map((tour) => {
                        return (
                            <div
                                key={tour.id}
                                className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden bg-gray-200">
                                    <img
                                        src={tour.img}
                                        alt={tour.title}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Duration Badge */}
                                    <div className="absolute top-4 left-4 bg-blue-800 text-white px-4 py-2 rounded-full text-xs font-bold">
                                        ⏱ {tour.time}
                                    </div>
                                    {/* Rating Badge */}
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                        ⭐ {tour.rating} ({tour.reviews})
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col gap-5 grow">

                                    {/* Title */}
                                    <h2 className="text-2xl font-bold text-blue-900 leading-tight">
                                        {tour.title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-sm text-gray-700 leading-6">
                                        {tour.description}
                                    </p>

                                    {/* Divider */}
                                    <div className="w-12 h-1 bg-blue-600 rounded-full"></div>

                                    {/* Introduction */}
                                    <div>
                                        <h4 className="text-sm font-bold text-blue-900 mb-2">About This Tour</h4>
                                        <p className="text-xs text-gray-600 leading-6">
                                            {tour.introduction}
                                        </p>
                                    </div>

                                    {/* Includes */}
                                    {/* <div>
                                        <h4 className="text-sm font-bold text-blue-900 mb-3">Tour Highlights</h4>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {tour.includes.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div> */}

                                    <div>
                                        <h4 className="text-sm font-bold text-blue-900 mb-2">Destinations</h4>
                                        <ul className="text-xs text-gray-600 space-y-1">
                                            {tour.includes.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-blue-600 mr-2">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Price & Button */}
                                    <div className="flex items-center justify-between pt-4 mt-auto">
                                        <div className="text-2xl font-bold text-blue-900">
                                            {tour.price} <span className="text-sm font-normal text-gray-600">/ {tour.headCount}</span>
                                        </div>
                                        <a href="/contactUs">
                                            <Button
                                                color="blue"

                                                className="h-8 sm:h-10! cursor-pointer rounded-lg bg-blue-600! px-2 sm:px-6!  text-xs sm:text-sm! font-semibold transition-all duration-300 outline-none! focus:ring-0! focus:outline-none! shadow-md hover:shadow-lg hover:bg-blue-900!"
                                            >
                                                Reserve Now
                                            </Button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Tours