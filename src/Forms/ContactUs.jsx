import React, { useState } from 'react';
import Contact from '../assets/graphic/Contact.png'
import { RxExit } from "react-icons/rx";

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
            <div className="h-auto bg-gray-100 flex-col md:flex-row flex items-center justify-center px-4 py-12">

                <div className='p-10 items-center mx-auto w-[100%]'>
                   {/* <div className='absolute top-3 z-0 left-4'><a href="/"> <RxExit size='30px' /></a></div> */}
                    <div className='w-[60%] mx-auto justify-center flex items-center'>
                        <img className='' src={Contact} alt="" />
                    </div>
                    <h1 className=' text-center items-center md:text-4xl'>Contact Us.</h1>
                    <p> Have questions about sustainability, compliance, or how VerdiNexus can help your business? Reach out below and our support team will get back to you within 24 hours.
                        Form Fields:</p>
                </div>
                <div className="w-[100%] max-w-3xl bg-white shadow-xl rounded-2xl p-8">
                    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

                    {submitted ? (
                        <div className="text-center p-8 text-green-600 text-xl">Thank you! We'll be in touch soon.</div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-1 text-sm font-medium text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label className="block mb-1 text-sm font-medium text-gray-600">Message</label>
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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