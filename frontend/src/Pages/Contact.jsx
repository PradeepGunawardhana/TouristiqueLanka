import React, { useState } from 'react'
import { Hero2 } from '../Components/Hero2'
import { Button } from 'flowbite-react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        adults: '',
        howFindUs: '',
        arrivalDate: '',
        children: '',
        infants: '',

        // selected predefined tour
        selectedTour: '',

        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Form submitted:', formData)
    }

    return (
        <div className="w-full bg-linear-to-b from-blue-50 to-white">
            <Hero2 title={'Contact Us'} subtext={"We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible."} />

            <section className="flex h-fit  md:h-screen w-full items-center justify-center bg-white">

                <div className="flex h-full md:w-7xl flex-col md:flex-row items-center justify-center gap-20 md:gap-5   px-5 py-20 xl:px-0!">

                    <div className=' order-2 md:order1! max-w-3xl flex flex-col gap-10 md:gap-16 mb-10 md:mb-0'>

                        <div className=''>
                            <div className='mb-4'>
                                <h3 className=' text-base text-blue-800 mb-1'>Email</h3>
                                <div className=' h-[0.5px] bg-blue-800/30' />
                            </div>
                            <p className='text-sm text-gray-500 lowercase'>touristiquelanka@gmail.com</p>
                        </div>
                        <div className=''>
                            <div className='mb-4'>
                                <h3 className=' text-base text-blue-800 mb-1'>Address</h3>
                                <div className=' h-[0.5px] bg-blue-800/30' />
                            </div>
                            <p className='text-sm text-gray-500'>Aitken Spence Travels (Pvt.) Ltd.
                                Fourth Floor, Aitken Spence Tower Two, 315, Vauxhall Street, Colombo 02, Sri Lanka.</p>
                        </div>
                        <div className=''>
                            <div className='mb-4'>
                                <h3 className=' text-base text-blue-800 mb-1'>Phone</h3>
                                <div className=' h-[0.5px] bg-blue-800/30' />
                            </div>
                            <p className='text-sm text-gray-500'>+94 11 234 5678 / <span className='hover:text-green-500' title='Open Whatsapp'><a href="#">076 123 4567 (whatsapp)</a></span></p>
                        </div>


                        {/* Social icons */}

                        <div className=''>
                            <div className='mb-4'>
                                <h3 className=' text-base text-blue-800 mb-1'>Follow Us</h3>
                                <div className=' h-[0.5px] bg-blue-800/30' />
                            </div>


                            <div className='flex items-center gap-5 text-gray-500 text-3xl transition-colors duration-300'>
                                <FaFacebookF className='hover:text-blue-600 cursor-pointer transition-colors duration-300' />
                                <FaInstagram className='hover:text-blue-600 cursor-pointer transition-colors duration-300' />
                                <AiFillTikTok className='hover:text-blue-600 cursor-pointer transition-colors duration-300' />
                                <FaWhatsapp className='hover:text-green-400 cursor-pointer transition-colors duration-300' />
                            </div>


                        </div>

                    </div>

                    <form onSubmit={handleSubmit} className=" order-1 md:order-2! w-full md:p-10 flex flex-col gap-6 md:gap-8    ">

                        {/* Name & COntact */}
                        <div className="grid md:grid-cols-2 gap-6 ">

                            <div className="relative z-0 w-full group">
                                <input
                                    required
                                    type="tel"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer "
                                    placeholder=" "
                                />
                                <label htmlFor="name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Name <span className="text-red-500">*</span></label>
                            </div>
                            <div className="relative z-0 w-full group">
                                <input
                                    required
                                    type="text"

                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                />
                                <label htmlFor="phone" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Contact Number <span className="text-red-500">*</span></label>
                            </div>

                        </div>

                        {/* Email & Country */}
                        <div className="grid md:grid-cols-2  gap-6 ">

                            <div className="relative z-0 w-full group">
                                <input
                                    required
                                    type="tel"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                />
                                <label htmlFor="email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600 uppercase">Email <span className="text-red-500">*</span></label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    required
                                    type="text"
                                    name="country"
                                    id="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                />
                                <label htmlFor="country" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Country (Your From ?) <span className="text-red-500">*</span></label>
                            </div>

                        </div>


                        {/* Adults & Children & Infants */}
                        <div className="grid md:grid-cols-3 gap-6 ">

                            <div className="relative z-0 w-full group">
                                <input
                                    type="number"
                                    name="adults"
                                    id="adults"
                                    min={0}
                                    max={100}
                                    value={formData.adults}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                />
                                <label htmlFor="adults" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Adults</label>
                            </div>

                            <div className="relative z-0 w-full group">
                                <input
                                    type="number"
                                    name="infants"
                                    id="infants"
                                    min={0}
                                    max={100}
                                    value={formData.infants}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                />
                                <label htmlFor="infants" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Infants (0-2 years)</label>
                            </div>

                            <div className="relative z-0 w-full group ">
                                <input
                                    type="number"
                                    name="children"
                                    id="children"
                                    min={0}
                                    max={100}
                                    value={formData.children}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                />
                                <label htmlFor="children" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600 uppercase">Children (3-11 years)</label>
                            </div>

                        </div>

                        {/* Arival Date & How did you find us */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="relative z-0 w-full group">
                                <input
                                    required
                                    type="date"
                                    name="arrivalDate"
                                    id="arrivalDate"
                                    value={formData.arrivalDate}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                />
                                <label htmlFor="arrivalDate" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Arrival Date <span className="text-red-500">*</span></label>
                            </div>

                            <div className="relative z-0 w-full group">

                                <input

                                    type="text"
                                    name="howFindUs"
                                    id="howFindUs"
                                    value={formData.howFindUs}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                                    placeholder=" "
                                />
                                <label htmlFor="howFindUs" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">How did you find us?</label>
                            </div>

                        </div>


                        {/* Subject Field */}
                        {/* Predefined Tours Select */}
                        <div className="relative z-0 w-full group">
                            <select
                                name="selectedTour"
                                id="selectedTour"
                                value={formData.selectedTour}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                            >
                                <option value="">Select a tour </option>
                                <option value="Sri Lanka Golden Experience Tour">Sri Lanka Golden Experience Tour</option>
                                <option value="Mini Tour: Essential Sri Lanka Escape">Mini Tour: Essential Sri Lanka Escape</option>
                                <option value="Cultural Heritage Tour">Cultural Heritage Tour</option>
                                <option value="Romantic Honeymoon Tour">Romantic Honeymoon Tour</option>
                                <option value="Other Custom Tour">Other Custom Tour</option>
                            </select>
                            <label htmlFor="selectedTour" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Select a Tour <span className="text-red-500">*</span></label>
                        </div>

                        <div className="relative z-0 w-full  group">
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer "
                                placeholder=" "

                            />
                            <label htmlFor="subject" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Subject</label>
                        </div>


                        {/* Message Field */}
                        <div className="relative z-0 w-full  group">
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer resize-none"
                                placeholder=" "
                                required
                            ></textarea>
                            <label htmlFor="message" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-gray-600  uppercase">Message</label>
                        </div>

                        {/* <button type="submit" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Send Message</button> */}

                        <Button
                            color="blue"
                            type='submit'
                            className="  h-8 cursor-pointer rounded-2xl bg-blue-800/90! px-3 text-xs transition-colors duration-300 outline-none! hover:bg-blue-900!  focus:ring-0! focus:outline-none sm:h-9 sm:px-3 md:h-10 md:px-5 md:text-sm lg:px-5  lg:text-base!"
                        >
                            Send Message
                        </Button>
                    </form>


                </div>
            </section>
        </div>
    )
}

export default Contact