import ImageSlider from '../Components/ImageSlider'
import Boxes from '../Components/Boxes'
import FoldingScroller from '../Components/FoldingScroller'
import Company from '../Components/Company'
import { useTranslation } from 'react-i18next'
import ContactUs from '../Forms/ContactUs'
import ServicesLanding from '../Components/ServicesLanding'
import { Link } from 'react-router-dom'
// import { motion } from 'framer-motion'
import { motion} from "framer-motion";


const Home = () => {

  const { t, i18n } = useTranslation();

  return (
    <>


      <div >
        {/* <ImageSlider /> */}
        <div className='absolute w-[70%] h-screen text-center top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2  md:text-7xl  text-2xl font-bold text-white z-10 '>
          <div className='py-1.5 mb-1 w-[50%] md:w-[15%] flex justify-center bg-gradient-to-r from-teal-400 to-yellow-200 text-amber-950 items-center rounded-full text-xl' >
            {t('Logo')}</div>
          <motion.h1
     initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 , delay:.1}}
        
  
          >Empowering  <span className=''>European SMEs</span> </motion.h1>
          <motion.p
           initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 , delay:.1}}
        
          className='md:text-sm text-xs py-4 my-4 md:px-20px '>to Embrace ESG and Comply with EU Sustainability Mandates – Affordably, Automatically, and Effectively.” A smarter way to handle sustainability reporting, carbon footprints, and policy gaps — without hiring a full-time team.
          </motion.p>
          <div className='TextHovers text-xl py-4 md:w-[40%] mx-auto rounded-full bg-gradient-to-r from-teal-400 to-yellow-200 text-green-950 '>
            <h2>Start Your ESG Journey Today →</h2>
            <br />
            <h2>Start Your ESG Journey Today →</h2></div>

        </div>
      </div>
      <FoldingScroller />

      <div className='BordersBox flex flex-col my-10 dark:bg-green-950 dark:text-white '>
        <ServicesLanding />
        {/* <Link className='mx-auto md:hidden block' to='/services'><button className='my-8 items-center mx-auto bg-green-950 dark:bg-white dark:text-green-950 text-white w-[200px] h-[50px] rounded-full font-semibold hover:bg-green-300 hover:text-green-950 transition-all ease-in-out duration-700'>Show All</button></Link>
        <Link to='/services' className='hidden mx-auto md:block'><button className='textHovers bg-green-950 text-xl w-[200px] dark:bg-white dark:text-green-950 text-white rounded-full font-semibold hover:bg-green-300 hover:text-green-950 transition-all space-y-2 ease-in-out duration-700'><h3 className='pt-1'>Show All</h3><h3>Show All</h3></button></Link> */}
      </div>
      <div className='boxes flex justify-center flex-col dark:bg-green-950 dark:text-white md:h-[130vh] items-center'>
        <Boxes />
        <Link to='/blog'><button className='textHovers my-10 bg-green-950 text-xl w-[200px] dark:bg-white dark:text-green-950 text-white rounded-full font-semibold hover:bg-green-300 hover:text-green-950 transition-all space-y-2 ease-in-out duration-700'><h3 className='pt-1'>Read more</h3><h3>Read more</h3></button></Link>
      </div>
      <div className='w-[90%] md:w-[80%]  md:h-[100vh] my-2 flex flex-col text-center items-center justify-center mx-auto'>
        <div className='md:my-24 '><h1 className='md:text-4xl py-4'>Client Testimonials </h1>
          <p className='md:text-md text-xs'>Our network gathers numerous reputable domestic and international partners </p>
        </div>
        <Company />
      </div>
      <ContactUs />

    </>
  )
}

export default Home