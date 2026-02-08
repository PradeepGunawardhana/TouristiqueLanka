import { Button } from 'flowbite-react'
import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import MapView from './MapView'

function Home_Experiences() {
  return (
    <section className="flex h-dvh md:h-screen grow w-full items-center justify-center bg-slate-100">

      <div className=" w-full pt-10 pb-5 px-5 flex flex-col h-full items-center justify-center gap-5 xl:px-0 lg:max-w-7xl ">

        {/* Text Container Row */}
        <div className="  flex flex-col gap-4 md:flex-row md:items md:gap-0-center w-full items-start justify-between">

          <div className="flex max-w-2xl! flex-col justify-center items-start gap-5">
            <h1 className=" font-volkhov text-2xl lg:text-4xl! font-semibold  text-blue-900 uppercase" >Experience Sri Lanka </h1>
            <p className=" text-sm lg:text-lg! text-gray-600 font-montserrat font-medium">
              Explore the magic of Sri Lanka's most popular destinations. From
              ancient cities to misty highlands and sun-kissed beaches, discover
              our island's best.
            </p>
          </div>

          {/* <Button    color="blue"  className="h-8 cursor-pointer rounded-2xl px-3 text-xs transition-colors duration-300 outline-none! bg-blue-800/90! hover:bg-blue-900! focus:ring-0! focus:outline-none sm:h-9 sm:px-3 md:h-10 md:px-5 md:text-sm lg:px-5 lg:text-base!">
            
            
            Discover More
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />

          </Button> */}

        </div>

        {/* Outline */}
        <div className=" flex flex-col gap-10 md:flex-row justify-between items-center w-full h-full bg-blue-200 p-2 md:p-4">

          {/* Card Container Row */}
          <div className='flex flex-col gap-2 md:flex-row md:gap-3 lg:gap-10 justify-between items-center w-full h-full bg-white rounded-lg shadow-lg'>

            <div className=' flex flex-1 w-full md:w-1/2 lg:w-1/3 h-full '>
              <MapView />
            </div>

            <div className='flex-1 flex flex-col h-full justify-between items-center p-2 md:p-4'>

              <div className=' flex flex-col items-start justify-between h-fit gap-2 text-start lg:py-7'>
                <h1 className=' text-lg md:text-3xl lg:text-4xl  text-blue-500 uppercase font-montserrat font-semibold'>Knuckles Mountain Range</h1>
                <h2 className=' text-sm  text-gray-600 font-semibold  md:text-xl lg:text-2xl'>Knuckles</h2>
                <p className='  text-xs md:text-sm text-gray-600  text-justify'>Discover the breathtaking allure of the Knuckles Mountain Range as it beckons you to its glorious territories through misty veils. A hiker’s paradise that allows one to explore the mountain range and nature. The peaks of the mountain range are quite fascinating to behold even from a distance. A remarkable array of flora and fauna also flourishes here.</p>
              </div>

              <div className=' flex justify-end! w-full'>
                <Button color="blue" className="h-8 cursor-pointer rounded-2xl px-3 text-xs transition-colors duration-300 outline-none! bg-blue-800/90! hover:bg-blue-900! focus:ring-0! focus:outline-none sm:h-9 sm:px-3 md:h-10 md:px-5 md:text-sm lg:px-5 lg:text-base!">

                  View More

                </Button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Home_Experiences