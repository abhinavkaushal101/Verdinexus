import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import Earthvideo from '/Earthvideo.mp4'
import bg2 from '/bg2.mp4'
import image from '/image.jpg'
import './Jayris.css'
const Jayris = () => {

    const { scrollYProgress } = useScroll({
        // target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

    return (
        <div className='Hero_Section'>
            <motion.div
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY,
                }}
                className='section relative overflow-hidden h-screen '>
                <video className='h-[100%] w-[100%] object-cover' autoPlay muted loop><source src={Earthvideo} /></video>
                <div className='absolute z-20 top-[90%] w-[100%] md:w-[55%] left-1/2 h-[100%] transfrom -translate-x-[50%] -translate-y-[50%] text-center text-white '>
                    <motion.h1
                        style={{ y: textY }}
                        className='text-xl md:text-6xl'><span className='text-orange-400'>Shape </span>the Future. Build Your Career <span className='text-orange-400'>With </span> Jayaris</motion.h1>
                        <br />

                    <motion.p style={{ y: textY }} className='md:text-sm text-[10px] w-[80%] mx-auto' >At Jayaris, careers are more than just roles. We empower talent with purpose, ownership, and growth opportunities that create lasting impact.
                    </motion.p>
                    <br />
                    <br />
                    <div> 
                    <button>Scroll <span className='text-orange-300'>Down</span></button>
                    <p className='text-orange-300'>&#129175;</p>
                    </div>
                </div>
            </motion.div>
            <div className='section_1 '>
                {/* <video className='h-[100%] w-[100%] object-cover' autoPlay muted loop><source src={Earthvideo} /></video> */}
                {/* <video className='w-[100%] h-[100%] object-cover' autoPlay muted loop><source src={bg2} /></video> */}

                <motion.div
                    initial={{ opacity: 0, y: 100, }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5, duration: .5 }}
                    className='h-[20vh] my-[10%] md:my-[5%] flex justify-center items-end'>
                    <motion.h1

                        className='md:text-4xl text-xl text-white text-center' >Overview of <span className='text-orange-300'>Opportunities</span>
                    </motion.h1>
                </motion.div>

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 100, }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: .5, duration: .5 }}
                        className='md:flex justify-between items-center mx-auto w-[90%] h-[60vh] text-white md:pt-2 md:px-10' >
                        <div className="box1 md:w-1/2 md:px-8">
                            <ul className='space-y-4 text-xs md:text-lg items-start '>
                                <p className='text-orange-300'>Open for Freshers (Internships)</p>
                                <li>Start strong with immersive internships that let you work on live projects, collaborate with real teams, and develop skills that matter in the real world</li>
                                <p className='text-orange-300'>Experienced Professionals Welcome</p>
                                <li>Bring your experience to the table and join a company where innovation meets execution. We value leaders who are ready to build, mentor, and grow.
                                </li>
                            </ul>
                        </div>
                        <div className="box2 md:w-1/2 md:px-8">
                            <ul className='space-y-4 text-xs md:text-lg items-start '>
                                <p className='text-orange-300'>Live, Industry-Grade Projects</p>
                                <li>Get involved in real client work from day one. Our projects span across industries and technologies, helping you build a portfolio that stands out.
                                </li>
                                <p className='text-orange-300'>Mentorship by Expert Teams</p>
                                <li>You’ll never work alone. Our senior team members guide, support, and mentor every step to help you elevate your skills and career trajectory.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    <br />
                    <br />
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        className='w-[75%] mx-auto'>
                        <video className='w-[100%]' loop autoPlay muted> <source src='https://videos.pexels.com/video-files/854278/854278-hd_1280_720_30fps.mp4' /></video>
                    </motion.div>
                </div>

                <div className='boxesss mt-10 text-white overflow-hidden w-[90%] mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="right md:px-24 w-[80%] ">
                        <h1 className='md:mb-12 font-semibold md:text-6xl text-orange-500'>Web Development</h1>
                        <div>
                            <ul className='list-disc'>
                                <li>Frontend Development Intern (React.js, HTML/CSS, JavaScript)</li>
                                <li>Backend Development Intern (Node.js, Express, APIs)</li>
                                <li>Full Stack Development Intern (MERN/MEAN Stack)</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="left md:px-10 md:mt-20 md:w-[80%] rounded-xl "><img className=' rounded-xl' src="https://cdn.pixabay.com/photo/2024/09/08/08/51/man-9031564_1280.jpg" alt="" /></motion.div>
                </div>

                <br />
                <br />

                <div className='boxesss mt-10 text-white overflow-hidden w-[90%] mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="left md:px-10 md:mt-20 md:w-[80%] rounded-xl "><img className=' rounded-xl' src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png" alt="" /></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="right md:px-24 w-[80%] ">
                        <h1 className='md:mb-12 font-semibold md:text-6xl text-orange-500'>App Development</h1>
                        <div>
                            <ul className='list-disc'>
                                <li>Android Development Intern (Java/Kotlin)</li>
                                <li>iOS Development Intern (Swift)</li>
                                <li>Cross-Platform App Development Intern (Flutter/React Native)</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>

                <br />
                <br />
                <div className='boxesss mt-10 text-white overflow-hidden w-[90%] mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="right md:px-24 w-[80%] ">
                        <h1 className='md:mb-12 font-semibold md:text-6xl text-orange-500'>UI/UX Design</h1>
                        <div>
                            <ul className='list-disc'>
                                <li>UI Design Intern (Figma, Adobe XD)</li>
                                <li>UX Research & Wireframing Intern</li>
                                <li>Product Design Intern (Prototyping & User Testing)</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="left md:px-10 md:mt-20 md:w-[80%] rounded-xl "><img className=' rounded-xl' src="https://cdn.pixabay.com/photo/2024/09/08/08/51/man-9031564_1280.jpg" alt="" /></motion.div>
                </div>

                <br />
                <br />
                   <div className='boxesss mt-10 text-white overflow-hidden w-[90%] mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="left md:px-10 md:mt-20 md:w-[80%] rounded-xl "><img className=' rounded-xl' src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png" alt="" /></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: .5 }}
                        className="right md:px-24 w-[80%] ">
                        <h1 className='md:mb-12 font-semibold md:text-6xl text-orange-500'>SEO & Digital Marketing</h1>
                        <div>
                            <ul className='list-disc'>
                                <li>SEO Intern (On-page, Off-page, Analytics)</li>
                                <li>Digital Marketing Intern (Google Ads, Meta Ads, Funnels)</li>
                                <li>Social Media Marketing Intern (Strategy, Content, Scheduling)</li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default Jayris