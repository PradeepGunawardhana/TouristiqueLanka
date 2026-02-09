import React from 'react'
import { Hero2 } from '../Components/Hero2'
import { Button } from 'flowbite-react'
import img3 from "../Assets/img3.jpg";

function Experiences() {

    const ExperiencesData = [
        {
            id: 1,
            title: "Tea Plantation Trek",
            category: "Adventure",
            duration: "Full Day",
            description: "Immerse yourself in the lush green tea estates of Nuwara Eliya and learn about Sri Lanka's world-famous tea production.",
            highlights: "Walk through terraced plantations, visit a working tea factory, enjoy tea tasting with local experts, and meet plantation workers.",
            includes: ["Guided plantation walk", "Tea factory tour", "Tea tasting session", "Traditional lunch", "Photography stops"],
            img: img3,
        },
        {
            id: 2,
            title: "Ancient Temple Spirituality",
            category: "Cultural",
            duration: "Half Day",
            description: "Connect with Sri Lanka's spiritual heritage by visiting sacred temples and learning about Buddhist traditions and rituals.",
            highlights: "Experience authentic temple ceremonies, meditate with monks, explore ancient architecture, and understand Buddhist philosophy.",
            includes: ["Temple guidance", "Meditation session", "Ritual participation", "Cultural briefing", "Blessing ceremony"],
            img: img3,
        },
        {
            id: 3,
            title: "Wildlife Safari Adventure",
            category: "Nature",
            duration: "Full Day",
            description: "Discover Sri Lanka's incredible biodiversity through an exciting safari experience in Yala or Udawalawe National Park.",
            highlights: "Spot leopards, elephants, and exotic birds, enjoy jeep safaris through natural habitats, and learn about conservation efforts.",
            includes: ["Safari jeep tour", "Expert naturalist", "Binoculars & equipment", "Wildlife photography guide", "Park entrance fees"],
            img: img3,
        },
        {
            id: 4,
            title: "Coastal Beach Escape",
            category: "Relaxation",
            duration: "Half Day",
            description: "Unwind on pristine sandy beaches, enjoy water sports, and experience the vibrant beach culture of Sri Lanka's southern coast.",
            highlights: "Surfing lessons, snorkeling, beachside yoga, sunset viewing, and fresh seafood dining.",
            includes: ["Beach access", "Water sports equipment", "Professional instructor", "Yoga session", "Refreshments"],
            img: img3,
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
                                    <p className="text-sm text-gray-700 leading-6">
                                        {experience.description}
                                    </p>

                                    {/* Highlights */}
                                    <div>
                                        <h4 className="text-sm font-bold text-blue-900 mb-2">What to Expect</h4>
                                        <p className="text-sm text-gray-600 leading-6">
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