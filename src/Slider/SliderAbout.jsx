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
            img: "https://cdn.pixabay.com/photo/2017/09/05/10/08/office-2717014_1280.jpg"
        },
        {
            name: 'Carbon Footprint Estimator',
            description: 'Estimate your Scope 1 & 2 emissions (and optionally Scope 3) based on basic company input. Perfect for internal audits, client transparency, or investor decks.',
            img: "https://cdn.pixabay.com/photo/2020/11/09/15/48/graph-5727061_1280.png"

        },
        {
            name: 'Sustainability Policy Gap Detector',
            description: 'Check your company’s existing documents (HR, procurement, etc.) for alignment with EU Green Policies and social expectations. You’ll get a customized checklist of whats missing.',
            img: "https://cdn.pixabay.com/photo/2020/11/09/15/48/graph-5727061_1280.png"

        },
        {
            name: 'EU ESG Reporting Format Converter (XBRL Ready)',
            description: 'Send us your raw sustainability data — we’ll convert it into EU CSRD-compliant digital format (XBRL-compatible). No manual formatting required.',
            img: "https://cdn.pixabay.com/photo/2024/11/18/10/20/businessman-9205819_1280.png"
        },
        {
            name: 'EEU Green Claim Verifier',
            description: 'Planning to make an eco-friendly product claim? This tool checks whether your claim complies with EU’s Green Claims Directive and backs it with scientific evidence or sourcing validation.',
            img: "https://cdn.pixabay.com/photo/2021/10/09/10/37/virtual-meeting-6693816_1280.png"
        },
        {
            name: 'Sustainability Content Rewriter',
            description: 'Send us your policy, website, or presentation content (up to 500 words), and we’ll rewrite it to be ESG-focused, professional, and aligned with EU tone and keywords.',
            img: "https://cdn.pixabay.com/photo/2020/11/09/15/48/graph-5727061_1280.png"

        },
        {
            name: 'EU ESG Trends Monthly Brief (Subscription)',
            description: 'Get the latest EU ESG regulation updates, sector-specific alerts, and sustainability insights each month directly in your inbox.',
            img: "https://cdn.pixabay.com/photo/2022/01/05/15/44/success-6917397_1280.png"

        },
        {
            name: 'Employee ESG Awareness Quiz + Certificate Tool',
            description: 'Give your team an online quiz to test their ESG knowledge. Upon passing, they receive a customized VerdiNexus ESG certificate.',
            img: "https://cdn.pixabay.com/photo/2020/11/09/15/48/graph-5727061_1280.png"

        },
        {
            name: 'Green HR Policy Pack',
            description: 'Get ready-to-use HR policies that support sustainability goals — including remote work, inclusive hiring, and ethical labor statements.',
            img: "https://cdn.pixabay.com/photo/2017/05/14/03/45/data-2311261_1280.png"
        },
        {
            name: 'Eco-Conscious Procurement Guide',
            description: 'This toolkit helps you redesign your procurement process to prioritize local, ethical, and low-carbon suppliers.',
            img: "https://cdn.pixabay.com/photo/2018/02/21/17/36/line-graph-3170988_1280.png"
        },
        {
            name: 'EU Regulation Tracker Tool',
            description: 'Track relevant ESG regulations for your industry and location. Updated quarterly to stay current with EU rules.',
            img: "https://cdn.pixabay.com/photo/2020/11/09/15/48/graph-5727061_1280.png"

        },
        {
            name: "Visual ESG Impact Report Template",
            description: 'Make your ESG report visually stunning with a plug-and-play template for PowerPoint or Canva, already aligned to CSRD design principles.',
            img: "https://cdn.pixabay.com/photo/2020/11/09/15/48/graph-5727061_1280.png"
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
