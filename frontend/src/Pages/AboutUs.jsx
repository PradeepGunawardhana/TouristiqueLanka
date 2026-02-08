import React from "react";
import { FiAward, FiHeart, FiGlobe, FiUsers } from "react-icons/fi";
import { Hero2 } from "../Components/Hero2";

function AboutUs() {
  const values = [
    {
      id: 1,
      icon: <FiHeart className="size-6 lg:size-8 text-blue-600 shrink-0" />,
      title: "Passion for Travel",
      description: "We're driven by a genuine love for creating unforgettable journeys that transform the way you see the world.",
    },
    {
      id: 2,
      icon: <FiAward className="size-6 lg:size-8 text-blue-600 shrink-0" />,
      title: "Excellence in Service",
      description: "Our commitment to quality ensures every detail of your trip exceeds expectations, from booking to arrival.",
    },
    {
      id: 3,
      icon: <FiGlobe className="size-6 lg:size-8 text-blue-600 shrink-0" />,
      title: "Global Expertise",
      description: "With decades of experience across continents, we bring insider knowledge to every destination we serve.",
    },
    {
      id: 4,
      icon: <FiUsers className="size-6 lg:size-8 text-blue-600 shrink-0" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We tailor every experience to match your unique preferences and dreams.",
    },
  ];

  const achievements = [
    {
      id: 1,
      number: "50K+",
      text: "Happy Travelers",
    },
    {
      id: 2,
      number: "120+",
      text: "Destinations Worldwide",
    },
    {
      id: 3,
      number: "98%",
      text: "Customer Satisfaction",
    },
    {
      id: 4,
      number: "24/7",
      text: "Support Available",
    },
  ];

  return (
    <div className="w-full bg-linear-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <Hero2 title={'About Us'}/>


      {/* Main Content Section */}
      <section className="flex h-max w-full items-center justify-center bg-white">
        <div className="flex flex-col h-full w-full items-center justify-between gap-16 px-5 py-20 lg:flex-row lg:items-start lg:max-w-7xl xl:gap-20 xl:px-0">

          {/* Left Column - Our Story */}
          <div className="flex h-full w-full lg:max-w-xl flex-col items-start justify-start gap-12">
            <div>
              <h2 className=" text-2xl sm:text-3xl font-volkhov lg:text-5xl font-semibold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className=" text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                What began as a small family business has grown into one of the region's
                most trusted travel companies. Our foundation is built on personal connections,
                attention to detail, and a deep understanding of what makes travel truly special.
              </p>
            </div>

            <div className="flex h-full flex-col items-start justify-center gap-6">
              {values.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full flex-col items-start justify-start gap-4 pb-6 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg lg:text-xl font-semibold text-blue-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Mission & Stats */}
          <div className="w-full lg:max-w-lg flex flex-col justify-start items-stretch gap-12">
            <div className="bg-linear-to-br from-blue-900 to-blue-700 rounded-2xl p-8 lg:p-10 shadow-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-volkhov font-semibold text-white mb-4">
                Our Mission
              </h2>
              <p className=" text-sm sm:text-base lg:text-lg text-blue-50 leading-relaxed">
                To inspire and enable travelers to explore the world with confidence,
                creating memories that last a lifetime through personalized service,
                sustainable practices, and genuine care for every journey we craft.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-volkhov font-semibold text-blue-900 mb-8 text-center lg:text-left">
                Our Impact
              </h3>
              <div className="grid grid-cols-2 gap-8 lg:gap-10">
                {achievements.map((item) => (
                  <div key={item.id} className="text-center lg:text-left">
                    <h4 className="mb-3 text-4xl lg:text-6xl font-bold text-blue-900">
                      {item.number}
                    </h4>
                    <p className="text-xs lg:text-base text-gray-600 uppercase tracking-wide leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 lg:p-10 border border-blue-100">
              <h3 className="text-xl lg:text-2xl font-semibold text-blue-900 mb-4">
                Join Our Journey
              </h3>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6">
                Whether you're planning a family vacation, a romantic getaway, or an
                adventure of a lifetime, we're here to make it extraordinary.
              </p>
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
                Start Planning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex h-max w-full items-center justify-center bg-linear-to-b from-white to-blue-50">
        <div className="flex h-full w-full max-w-7xl flex-col items-center gap-12 px-5 py-20 xl:px-0">
          <div className="text-center w-full sm:w-2xl">
            <h2 className=" text-2xl sm:text-3xl  font-volkhov lg:text-5xl font-semibold text-blue-900 mb-4">
              Meet Our Team
            </h2>
            <p className=" text-sm sm:text-base lg:text-lg text-gray-600">
              Our dedicated professionals bring expertise, enthusiasm, and a personal
              touch to every interaction, ensuring your travel dreams become reality.
            </p>
          </div>

          <div className="w-full bg-blue-900 rounded-2xl p-8 lg:p-12 text-center shadow-xl">
            <p className=" text-xs sm:text-lg lg:text-2xl text-blue-50 italic leading-relaxed">
              "We don't just plan trips—we create experiences that stay with you forever.
              Every journey is a story waiting to be told, and we're honored to help write yours."
            </p>
            <p className="mt-6 text-sm sm:text-base! lg:text-lg! text-blue-200 font-medium">
              — The Team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;