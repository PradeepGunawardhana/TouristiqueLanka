import React from 'react'
import logo2 from '../../Assets/logo-2.png'
function FooterSection() {
    return (

        <footer className="bg-[#172671] rounded-base shadow-xs ">
            <div className="w-full mx-auto p-2 md:py-8 sm:px-10  sm:py-5! lg:px-16!">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="/" className="flex items-center mb-4 mt-4  sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo2} className=" h-12 md:h-18 w-auto " alt="Logo" />
                    
                    </a>
                    <ul className="flex     flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0 text-gray-100" >
                        <li>
                            <a href="/about" className="hover:underline me-3 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="/experiences" className="hover:underline me-3 md:me-6">Experiences</a>
                        </li>
                        <li>
                            <a href="/tours" className="hover:underline me-3 md:me-6">Tours</a>
                        </li>
                        <li>
                            <a href="/contactUs" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-[#FFC000]/70 sm:mx-auto lg:my-8" />
                <span className="block text-xs md:text-sm text-body sm:text-center text-gray-300">© 2026 <a href="#" className="hover:underline">TOURISTIQUE LANKA (PVT) LTD</a>. All Rights Reserved.</span>
            </div>
        </footer>



    )
}

export default FooterSection