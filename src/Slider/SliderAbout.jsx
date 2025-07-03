import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Optional: Move CSS to external file if preferred
import './SliderAbout.css';

const SliderAbout = () => {
    const Serviceitems = [
        {
            name: 'ESG Snapshot Report',
            description: 'A fast, 5-day assessment of your company’s environmental, social, and governance readiness. This includes gap identification and high-level action points to align with CSRD.',
            img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-4.png"
        },
        {
            name: 'Carbon Footprint Estimator',
            description: 'Estimate your Scope 1 & 2 emissions (and optionally Scope 3) based on basic company input. Perfect for internal audits, client transparency, or investor decks.',
            img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/untitled-design-4.png"

        },
        {
            name: 'Sustainability Policy Gap Detector',
            description: 'Check your company’s existing documents (HR, procurement, etc.) for alignment with EU Green Policies and social expectations. You’ll get a customized checklist of whats missing.',
            img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/untitled-design-2.png"

        },
        {
            name: 'EU ESG Reporting Format Converter (XBRL Ready)',
            description: 'Send us your raw sustainability data — we’ll convert it into EU CSRD-compliant digital format (XBRL-compatible). No manual formatting required.',
            img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-3.png"
        },
        {
            name: 'EEU Green Claim Verifier',
            description: 'Planning to make an eco-friendly product claim? This tool checks whether your claim complies with EU’s Green Claims Directive and backs it with scientific evidence or sourcing validation.',
            img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-2.png"
        },
        {
            name: 'Sustainability Content Rewriter',
            description: 'Send us your policy, website, or presentation content (up to 500 words), and we’ll rewrite it to be ESG-focused, professional, and aligned with EU tone and keywords.',
            img: "https://verdinexus.wordpress.com/wp-content/uploads/2025/06/verdinexus-2.jpg"

        },
      

    ]


    return (<>
                {/* <div  className='md:flex hidden bg-[#0f2c2c] h-[30vh] justify-center items-end text-4xl text-white pb-6'><h1>Services</h1></div> */}

        <div className='swiperWrapper bg-[#0f2c2c] h-screen relative'>
            
            <Swiper
                className="mySwiper"
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                navigation={true}
                // pagination={true}
                modules={[EffectCoverflow, Navigation, Pagination]}
            >
                {Serviceitems.map((item, index) => (
                    <SwiperSlide key={index} className='swiper-slides'>
                        <img src={item.img} />
                        <div className='textSlider'>
                            <h1 className='md:text-4xl '>{item.name}</h1>
                            {/* <p className='text-green-100'>{item.description}</p> */}
                        </div>
                    </SwiperSlide>

                ))}
               
            </Swiper>
        </div>
        </>

    );
};

export default SliderAbout;
