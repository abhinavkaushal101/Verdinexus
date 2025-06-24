import React from 'react'
import { useParams } from 'react-router-dom';

const Serviceitems = [
    {
        name: 'ESG 101 for SMEs: A Beginner’s Guide to Sustainable Success',
        description: "In today's business world, Environmental, Social, and Governance (ESG) isn’t just a buzzword—it’s a blueprint for long-term growth, resilience, and reputation. While large corporations often dominate ESG conversations, small and medium enterprises (SMEs) have a vital role to play. In fact, adopting ESG practices can unlock real benefits for SMEs, from improved efficiency to greater trust with customers and investors But where should SMEs begin?'",
        key: {
            list1: 'Environmental: How your business impacts the planet (e.g., energy use, waste, carbon emissions).',
            list2: 'Social: How your business treats people (e.g., employee welfare, community engagement, customer data privacy).',
            list3: 'Governance: How your business is run (e.g., transparency, compliance, ethical leadership).'
        },
        description2: '💼 Why ESG Matters for SMEs',
        key2: {
            list1: 'Customer Demand: Consumers are becoming more eco-conscious and socially aware. They prefer brands that align with their values.',
            list2: 'Investor Attraction: Investors and lenders increasingly assess ESG performance before funding businesses.',
            list3: 'Cost Savings: ESG practices like energy efficiency or waste reduction can lower operating costs.'
        },
        btn: 'Get Snapshot'
    },
    {
        name: 'ESG 101 for SMEs: A Beginner’s Guide to Sustainable Success',
        description: "In today's business world, Environmental, Social, and Governance (ESG) isn’t just a buzzword—it’s a blueprint for long-term growth, resilience, and reputation. While large corporations often dominate ESG conversations, small and medium enterprises (SMEs) have a vital role to play. In fact, adopting ESG practices can unlock real benefits for SMEs, from improved efficiency to greater trust with customers and investors But where should SMEs begin?'",
        key: {
            list1: 'Environmental: How your business impacts the planet (e.g., energy use, waste, carbon emissions).',
            list2: 'Social: How your business treats people (e.g., employee welfare, community engagement, customer data privacy).',
            list3: 'Governance: How your business is run (e.g., transparency, compliance, ethical leadership).'
        },
        description2: '💼 Why ESG Matters for SMEs',
        key2: {
            list1: 'Customer Demand: Consumers are becoming more eco-conscious and socially aware. They prefer brands that align with their values.',
            list2: 'Investor Attraction: Investors and lenders increasingly assess ESG performance before funding businesses.',
            list3: 'Cost Savings: ESG practices like energy efficiency or waste reduction can lower operating costs.'
        },
        btn: 'Get Snapshot'
    },
    {
        name: 'ESG 101 for SMEs: A Beginner’s Guide to Sustainable Success',
        description: "In today's business world, Environmental, Social, and Governance (ESG) isn’t just a buzzword—it’s a blueprint for long-term growth, resilience, and reputation. While large corporations often dominate ESG conversations, small and medium enterprises (SMEs) have a vital role to play. In fact, adopting ESG practices can unlock real benefits for SMEs, from improved efficiency to greater trust with customers and investors But where should SMEs begin?'",
        key: {
            list1: 'Environmental: How your business impacts the planet (e.g., energy use, waste, carbon emissions).',
            list2: 'Social: How your business treats people (e.g., employee welfare, community engagement, customer data privacy).',
            list3: 'Governance: How your business is run (e.g., transparency, compliance, ethical leadership).'
        },
        description2: '💼 Why ESG Matters for SMEs',
        key2: {
            list1: 'Customer Demand: Consumers are becoming more eco-conscious and socially aware. They prefer brands that align with their values.',
            list2: 'Investor Attraction: Investors and lenders increasingly assess ESG performance before funding businesses.',
            list3: 'Cost Savings: ESG practices like energy efficiency or waste reduction can lower operating costs.'
        },
        btn: 'Get Snapshot'
    },
    {
        name: 'ESG 101 for SMEs: A Beginner’s Guide to Sustainable Success',
        description: "In today's business world, Environmental, Social, and Governance (ESG) isn’t just a buzzword—it’s a blueprint for long-term growth, resilience, and reputation. While large corporations often dominate ESG conversations, small and medium enterprises (SMEs) have a vital role to play. In fact, adopting ESG practices can unlock real benefits for SMEs, from improved efficiency to greater trust with customers and investors But where should SMEs begin?'",
        key: {
            list1: 'Environmental: How your business impacts the planet (e.g., energy use, waste, carbon emissions).',
            list2: 'Social: How your business treats people (e.g., employee welfare, community engagement, customer data privacy).',
            list3: 'Governance: How your business is run (e.g., transparency, compliance, ethical leadership).'
        },
        description2: '💼 Why ESG Matters for SMEs',
        key2: {
            list1: 'Customer Demand: Consumers are becoming more eco-conscious and socially aware. They prefer brands that align with their values.',
            list2: 'Investor Attraction: Investors and lenders increasingly assess ESG performance before funding businesses.',
            list3: 'Cost Savings: ESG practices like energy efficiency or waste reduction can lower operating costs.'
        },
        btn: 'Get Snapshot'
    },
]


const BlogDetails = () => {
    const tool = [
        { name: 'Green Ctaim Verifier', status: 'Start Now', },
        { name: 'ESG Snapshot Generator', status: 'Start Now', },
        { name: 'Carbon Footprint Estimator', status: 'Start Now' },
        { name: 'ESG Policy & Code Generator', status: 'Start Now' },
        { name: 'Sustainable Procurement Audit', status: 'Start Now' },
        { name: 'Sustainability Content Rewriter', status: 'Start Now' },
        { name: 'ESG Reporting Format Converter', status: 'Start Now' },
        { name: 'Sustainability Content Rewriter', status: 'Coming Soon' },
        { name: 'Employee ESG Awareness Quiz', status: 'Start Now', },
    ];


    const { blogId } = useParams();
    const items = Serviceitems[blogId]
    if (!items) {
        return <div className="p-6">Service not found.</div>;
    } else {
        return (
            <>
            {/* particular Blog Details are shown there dynamically */}
            <div className='bg-green-950 h-[40vh] flex justify-center items-end text-3xl text-white pb-4'><h1>Blogs</h1></div>
                <div className='w-[100%] min-h-screen flex justify-between items-start my-8'>
                    <div className="leftDetails w-[100%] border-2 px-20 space-y-10 rounded-2xl min-h-screen ">

                        <h1 className='text-4xl text-center mt-8'>{items.name}</h1>
                        <img className='md:w-[450px] mx-auto' src="https://xenergy.hr/uploads/2025/05/nada-dizdarevic.jpg" alt="" />
                        <div>
                            <p className='md:text-2xl text-sm'>{items.description}</p>

                            <ul className='list-disc my-5 md:text-xl text-sm'>
                                <li>{items.key.list1}</li>
                                <li>{items.key.list2}</li>
                                <li>{items.key.list3}</li>
                                <li>{items.key.list4}</li>
                            </ul>
                            <p className='md:text-2xl text-sm'>{items.description2}</p>
                            <ul className='list-disc my-5 md:text-xl text-sm '>
                                <li>{items.key2.list1}</li>
                                <li>{items.key2.list2}</li>
                                <li>{items.key2list3}</li>

                            </ul>
                            <button className='px-4 py-3 bg-green-400 rounded-bl-xl rounded-tr-xl my-6'>{items.btn}</button>
                        </div>
                    </div>
                    <div className="right hidden md:block w-[30%] border-2 rounded-2xl min-h-screen bg-green-200">
                        <h1 className='py-8 ml-4 text-2xl'>Related</h1>
                        <ul className='px-4 space-y-5'>
                            {tool.map((items) => (
                                <li>{items.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
export default BlogDetails;