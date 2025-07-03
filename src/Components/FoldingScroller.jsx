import React from 'react'
import { useTranslation } from 'react-i18next'
import ImageSlider from './ImageSlider';
import { motion } from 'framer-motion';
import About from '../Pages/About'
const FoldingScroller = () => {
    const { t } = useTranslation();
    return (
        // Folding Scroller div boxes shown on home page
        <div className='divboxes flex justify-between flex-col'>
            <div className="divbox imgslider">
                <ImageSlider />
                {/* <About/> */}
                
            </div>
            <div className="divbox ">
                <div className='boxesss  w-full'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .5 }}
                        className="right md:px-24 ">
                        <h1 className='md:mb-12 font-semibold md:text-6xl'>{t('text_head')}</h1>
                        <div>
                            <p>{t('text_paragraph')}</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        className="left md:px-10 md:mt-32 md:w-[150%] rounded-xl "><img className=' rounded-xl' src="https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></motion.div>
                </div>
            </div>
            <div className="divbox">
                <div className='boxesss w-full'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        transition={{ duration: .5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="left md:px-15 md:w-[100%] md:mt-32 rounded-xl "><img className=' rounded-xl' src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></motion.div>
                </div>
                <div className="right md:w-[100%] md:px-20">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .5 }}

                        className='md:mb-12 font-semibold md:text-6xl'>{t('next_heading')}</motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: -10 }}
                        transition={{ duration: .5 }}

                        className='parag'>
                        {/* <li>{t('next_paragraph.para1')}</li>
                    <li>{t('next_paragraph.para2')}</li>
                    <li>{t('next_paragraph.para3')}</li>
                    <li>{t('next_paragraph.para4')}</li> */}
                        <p>{t('next_paragraph')}</p>

                    </motion.div>
                </div>

            </div>
            <div className="divbox">
                <div className='boxesss w-full'>
                    <div className="right md:w-[100%] md:px-24">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .5 }}

                            className='md:mb-12 font-semibold md:text-6xl'>{t('next_heading1')}</motion.h1>
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5 }}
                            >{t('next_heading2')}</motion.p>
                            {/* <li>{t('next_heading2.para1')}</li>
                    <li>{t('next_heading2.para2')}</li>
                    <li>{t('next_heading2.para3')}</li>
                    <li>{t('next_heading2.para4')}</li> */}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        className="left md:px-15 md:w-[100%] md:mt-32 rounded-xl "><img className=' rounded-xl' src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></motion.div>
                </div>
            </div>
  <div className="divbox">
                <div className='boxesss w-full'>
                    <div className="right md:w-[100%] md:px-24">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .5 }}

                            className='md:mb-12 font-semibold md:text-6xl'>{t('next_heading1')}</motion.h1>
                        <div>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5 }}
                            >{t('next_heading2')}</motion.p>
                            {/* <li>{t('next_heading2.para1')}</li>
                    <li>{t('next_heading2.para2')}</li>
                    <li>{t('next_heading2.para3')}</li>
                    <li>{t('next_heading2.para4')}</li> */}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        className="left md:px-15 md:w-[100%] md:mt-32 rounded-xl "><img className=' rounded-xl' src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></motion.div>
                </div>
            </div>
        </div>
    )
}

export default FoldingScroller