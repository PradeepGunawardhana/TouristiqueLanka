import { Route, Routes } from "react-router-dom";
import { Nav } from "./Components/Layout/Nav";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import FooterSection from "./Components/Layout/FooterSection";
import Contact from "./Pages/Contact";
import Tours from "./Pages/Tours";
import Experieces from "./Pages/Experiences";

export default function App() {


  return (
    <>
      <div className="  min-h-screen flex flex-col justify-center  bg-white">
        <Nav />
        <main className="grow bg-white">

          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs />}/>
            <Route path="/contactUs" element={<Contact/>}/>
            <Route path="/tours" element={<Tours/>}/>
            <Route path="/experiences" element={<Experieces/>}/>

          </Routes>

        </main>
        <FooterSection/>
      </div>
    </>
  );
}
