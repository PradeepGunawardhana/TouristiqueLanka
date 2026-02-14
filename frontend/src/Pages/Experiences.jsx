import React from 'react'
import { Hero2 } from '../Components/Hero2'
import { Button } from 'flowbite-react'
import img1 from "../Assets/tourimg1.jpg";
import img2 from "../Assets/exp2.jpg";
import img3 from "../Assets/exp3.jpg";
import img4 from "../Assets/exp4.png";

function Experiences() {

    const ExperiencesData = [
        {
            id: 1,
            title: "Cultural & Heritage Discovery",
            category: "Culture & History",
            duration: "2 Days",
            description: "Step into Sri Lanka’s ancient past and explore sacred temples, royal cities, and UNESCO-listed wonders.",
            highlights: "Climb the majestic Sigiriya Rock Fortress, witness the evening rituals at Kandy’s Temple of the Tooth, and explore ancient royal heritage sites that showcase Sri Lanka’s rich history.",
            includes: [
                "Sigiriya Rock Fortress Visit",
                "Temple of the Tooth Ceremony",
                "Professional Local Guide",
                "Private Transportation",
                "Entrance Fees to Heritage Sites"
            ],
            img: img1
        },
        {
            id: 2,
            title: "Tea Trails & Hill Country Escape",
            category: "Nature & Scenic",
            duration: "2 Days",
            description: "Breathe in the cool mountain air and explore the rolling tea plantations of Sri Lanka’s hill country.",
            highlights: "Walk through lush tea estates in Nuwara Eliya, visit a working tea factory, enjoy scenic viewpoints, and experience the famous hill country train journey.",
            includes: [
                "Guided Tea Plantation Walk",
                "Tea Factory Tour & Tasting",
                "Scenic Train Ride",
                "Private Transfers",
                "Photography Stops"
            ],
            img: img2
        },
        {
            id: 3,
            title: "Wildlife Safari Adventure",
            category: "Wildlife & Nature",
            duration: "1 Day",
            description: "Get up close with Sri Lanka’s incredible wildlife in an unforgettable safari experience.",
            highlights: "Explore Yala National Park in a 4x4 safari jeep, spot elephants, leopards, crocodiles, and exotic bird species in their natural habitat.",
            includes: [
                "4x4 Safari Jeep",
                "Experienced Safari Guide",
                "National Park Entrance Fees",
                "Refreshments",
                "Hotel Pickup & Drop-off"
            ],
            img: img3
        },
        {
            id: 4,
            title: "Coastal Bliss & Whale Watching",
            category: "Beach & Marine",
            duration: "1 Day",
            description: "Discover the beauty of Sri Lanka’s southern coastline and witness majestic marine life.",
            highlights: "Enjoy a whale watching tour in Mirissa, relax on golden beaches, and experience the laid-back coastal lifestyle.",
            includes: [
                "Whale Watching Boat Tour",
                "Safety Equipment",
                "Professional Marine Guide",
                "Beach Leisure Time",
                "Hotel Transfers"
            ],
            img: img4
        },
    ]

    return (
        <div className="w-full bg-linear-to-b from-blue-50 to-white">
            <Hero2
                title={'Experiences in Sri Lanka'}
                subtext={"Create unforgettable memories with authentic, immersive experiences across the island."}
            />

            <section className="flex flex-col w-full items-center justify-center bg-white gap-12 py-8 md:py-16 px-4">

                {/* Category Filter Info */}
                <div className="w-full max-w-6xl text-center mb-4">
                    <p className="text-gray-600 font-semibold text-sm md:text-lg!">
                        Discover unique ways to experience the essence of Sri Lanka
                    </p>
                </div>

                {/* Experiences Grid */}
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ExperiencesData.map((experience) => {
                        return (
                            <div
                                key={experience.id}
                                className="flex flex-col border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden bg-gray-200">
                                    <img
                                        src={experience.img}
                                        alt={experience.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        {experience.category}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col gap-4 grow">

                                    {/* Title & Duration */}
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                                            {experience.title}
                                        </h3>
                                        <div className="inline-block bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                                            ⏱ {experience.duration}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-gray-700 leading-6 text-justify">
                                        {experience.description}
                                    </p>

                                    {/* Highlights */}
                                    <div>
                                        <h4 className="text-sm font-bold text-blue-900 mb-2">What to Expect</h4>
                                        <p className="text-sm text-gray-600 leading-6 text-justify">
                                            {experience.highlights}
                                        </p>
                                    </div>

                                    {/* Includes */}
                                    <div>
                                        <h4 className="text-sm font-bold text-blue-900 mb-2">Includes</h4>
                                        <ul className="text-xs text-gray-600 space-y-1">
                                            {experience.includes.map((item, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <span className="text-blue-600 mr-2">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button */}
                                    <a href="/contactUs" target='blank'>


                                        <Button
                                            color="blue"
                                            className="mt-4 w-full h-10 cursor-pointer rounded-lg bg-blue-800/90! px-4 text-sm transition-colors duration-300 outline-none! hover:bg-blue-900! focus:ring-0! focus:outline-none!"
                                        >
                                            Book This Experience
                                        </Button>

                                    </a>


                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Experiences