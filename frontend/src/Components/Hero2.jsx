import { Button, Carousel } from "flowbite-react";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";
import img6 from "../Assets/img6.jpg";
import img7 from "../Assets/img7.jpeg";
import img8 from "../Assets/img8.jpg";
import img9 from "../Assets/img9.jpg";
import img10 from "../Assets/img10.jpg";

export function Hero2({title,subtext}) {
  return (
    <div className="relative h-100 sm:h-135 w-full overflow-hidden">
      {/* <div className="pointer-events-none absolute top-0 left-0 z-40 h-screen w-full  bg-black/25" /> */}
      <Carousel
        pauseOnHover
        slideInterval={2000}
        indicators={false}
        className=" brightness-80! group h-full  rounded-none!"
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
        {/* <img src={img1} className="h-full w-full object-cover rounded-none!" alt="slide 1" />
        <img src={img2} className="h-full w-full object-cover rounded-none!" alt="slide 2" /> */}
        <img src={img3} className="h-full w-full object-cover rounded-none!" alt="slide 3" />
        <img src={img4} className="h-full w-full object-cover rounded-none!" alt="slide 4" />
        <img src={img5} className="h-full w-full object-cover rounded-none!" alt="slide 5" />
        <img src={img6} className="h-full w-full object-cover rounded-none!" alt="slide 6" />
        <img src={img7} className="h-full w-full object-cover rounded-none!" alt="slide 7" />
        <img src={img8} className="h-full w-full object-cover rounded-none!" alt="slide 8" />
        <img src={img9} className="h-full w-full object-cover rounded-none!" alt="slide 9" />
        <img src={img10} className="h-full w-full object-cover rounded-none!" alt="slide 10" />

      </Carousel>

      <div className="absolute top-0 left-0  inset-0 px-4 flex flex-col text-center justify-center items-center z-40 gap-5 text-white!">


        <h1 className=" p-5 text-3xl lg:text-6xl! font-bold uppercase font-montserrat">{title||''} </h1>
         <p className=" mb-5 text-xs leading-5! text-white font-medium lg:text-lg! max-w-4xl  md:mb-15! lg:mb-20 lg:leading-8!" >{subtext||''}</p>
    


      </div>


    </div>
  );
}
