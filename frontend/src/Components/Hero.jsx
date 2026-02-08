import { Button, Carousel } from "flowbite-react";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* <div className="pointer-events-none absolute top-0 left-0 z-40 h-screen w-full  bg-black/25" /> */}
      <Carousel
        pauseOnHover
        slideInterval={2000}
        indicators={false}
        className=" brightness-70! group h-full  rounded-none!"
        theme={{
          control: {
            base: "  inline-flex h-12 w-12 items-center justify-center rounded-none! bg-black text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/70 focus:outline-none",
            icon: "h-5 w-5",
          },
          indicator: {
            base: "mx-1 h-3 w-3 rounded-full bg-white/50",
            active: "bg-white-500",
          },
          scrollContainer: {
            base: " rounded-none!",
          },
        }}
      >
        <img src={img1} className="h-full w-full object-cover rounded-none!" alt="slide 1" />
        <img src={img2} className="h-full w-full object-cover rounded-none!" alt="slide 2" />
        <img src={img3} className="h-full w-full object-cover rounded-none!" alt="slide 3" />
      </Carousel>

      <div className="absolute top-0 left-0  inset-0 px-4 flex flex-col text-center justify-center items-center z-40 gap-5 text-white!">


        <h1 className=" p-5 text-3xl lg:text-6xl! font-bold uppercase font-montserrat">Discover the Beauty of Sri Lanka </h1>
        <p className=" mb-5 text-xs leading-5! text-white font-medium lg:text-lg! max-w-4xl  md:mb-15! lg:mb-20 lg:leading-8!" >Safe, guided, and memorable trips for every traveler. Explore stunning beaches, ancient temples, lush mountains, and vibrant local culture with our expertly crafted tours.</p>

        <div className=" flex justify-center items-center gap-7 ">

          <Button pill color="blue" className="h-8 cursor-pointer border-2  border-transparent! px-3  text-xs transition-colors duration-300 outline-none! bg-blue-800/90! hover:bg-blue-900! focus:ring-0! focus:outline-none sm:h-9 sm:px-3 md:h-12! md:px-5 md:text-sm lg:px-8! lg:py-7! lg:text-base! uppercase">

            Discover More

          </Button>
          <Button pill type="button" color="blue" className=" bg-transparent! border-2  border-white! h-8 cursor-pointer  px-3 text-xs transition-colors duration-300 outline-none!  hover:bg-blue-900! hover:border-transparent! focus:ring-0! focus:outline-none sm:h-9 sm:px-3 md:h-12! md:px-5 md:text-sm lg:px-8! lg:py-7! lg:text-base! uppercase">

            Inquiry Now

          </Button>

        </div>



      </div>


    </div>
  );
}
