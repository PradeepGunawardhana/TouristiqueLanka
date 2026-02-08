import React from 'react'
import { Hero2 } from '../Components/Hero2'
import { Button } from 'flowbite-react'
import img3 from "../Assets/img3.jpg";

function Tours() {

    const ToursData = [
        {
            id: 1,
            title: "Cultural Heritage Tour",
            time: "3 Nights / 4 Days",
            description: "Discover the ancient temples, colonial architecture, and vibrant culture of Sri Lanka's central highlands.",
            introduction: "Explore the spiritual heart of Sri Lanka through our curated cultural tour. Visit sacred temples in Kandy, experience the misty highlands of Nuwara Eliya, and explore the colonial charm of hill stations.",
            includes: ["Kandy Temple Tour", "Nuwara Eliya Trek", "Colombo Colonial Walk", "Local Cuisine Tasting"],
            img: img3,
            price: "$599",
            rating: 4.8,
            reviews: 128
        },
        {
            id: 2,
            title: "Tea & Nature Escape",
            time: "2 Nights / 3 Days",
            description: "Immerse yourself in lush tea plantations, scenic waterfalls, and pristine natural landscapes.",
            introduction: "Experience the tranquility of Sri Lanka's tea country. Walk through rolling green hills, visit working tea factories, enjoy authentic tea tastings, and meet local plantation workers.",
            includes: ["Plantation Walk", "Tea Factory Tour", "Waterfall Hike", "Local Lunch"],
            img: img3,
            price: "$449",
            rating: 4.9,
            reviews: 95
        },
    ]

    return (
        <div className="w-full bg-gradient-to-b from-blue-50 to-white">
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
                                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold">
                                        ⏱ {tour.time}
                                    </div>
                                    {/* Rating Badge */}
                                    <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                        ⭐ {tour.rating} ({tour.reviews})
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col gap-5 flex-grow">
                                    
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
                                    <div>
                                        <h4 className="text-sm font-bold text-blue-900 mb-3">Tour Highlights</h4>
                                        <ul className="grid grid-cols-2 gap-2">
                                            {tour.includes.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Price & Button */}
                                    <div className="flex items-center justify-between pt-4 mt-auto">
                                        <div className="text-2xl font-bold text-blue-900">
                                            {tour.price}
                                        </div>
                                        <Button
                                            color="blue"
                                            className="h-10 cursor-pointer rounded-lg bg-blue-600! px-6 text-sm font-semibold transition-all duration-300 outline-none! hover:bg-blue-700! focus:ring-0! focus:outline-none! shadow-md hover:shadow-lg"
                                        >
                                            Reserve Now
                                        </Button>
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