import React, { useState } from 'react';
import Contact from '../assets/graphic/Contact.png'
import { RxExit } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";


function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here, you can add API call logic (Formspree, EmailJS, backend, etc.)
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <>
            <div style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://verdinexus.wordpress.com/wp-content/uploads/2025/06/untitled-design-2.png')` , backgroundSize:'cover',}}   className=" contactdesign h-auto  flex-col md:flex-row flex items-center justify-center px-4 py-12">

                <div className='p-10 items-center mx-auto relative text-white w-[100%]'>

                    {/* <div className='absolute top-[-10%] text-4xl hover:rounded-[50%] hover:bg-black px-2 py-2 hover:text-white transition-all .5s  left-4'><a href="/"><FaXmark/></a></div> */}
                    <div className='w-[60%]  mx-auto justify-center  flex items-center'>
                        <img className='' src={Contact} alt="" />
                    </div>
                    <h1 className=' text-center items-center md:text-4xl'>Contact Us.</h1>
                    <p> Have questions about sustainability, compliance, or how VerdiNexus can help your business? Reach out below and our support team will get back to you within 24 hours.
                        Form Fields:</p>
                </div>
                <div className="w-[100%] max-w-3xl  shadow-xl rounded-3xl  bg-white/40 backdrop-blur-md p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">Contact Us</h2>

                    {submitted ? (
                        <div className="text-center p-8 text-green-600 text-xl">Thank you! We'll be in touch soon.</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6 ">
                            {/* <div className='absolute top-[-12%] text-4xl right-0'><FaXmark/></div> */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-white">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                        placeholder='Enter your name'
                                        className="w-full px-4 py-2 border placeholder-gray-700 border-gray-300 bg-transparent focus:bg-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-white">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder='Enter your Email'
                                        required
                                        className="w-full px-4 py-2 border placeholder-gray-700 border-gray-300 bg-transparent focus:bg-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-white">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    onChange={handleChange}
                                    required
                                    placeholder='Company Name'
                                    className="w-full px-4 placeholder-gray-700 py-2 border border-gray-300 rounded-md bg-transparent focus:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-white">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent focus:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-white">Message</label>
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent focus:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                                >
                                    Send Message
                                </button>
                                
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </>

    );
}
export default ContactUs;