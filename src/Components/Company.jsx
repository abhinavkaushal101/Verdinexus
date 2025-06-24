import { motion } from "framer-motion";

const boxes = [
  {
    img:"https://xenergy.hr/uploads/2025/05/nada-dizdarevic.jpg",
    content:'“VerdiNexus gave us a complete ESG overview in under 5 days — without a single call. Game-changer!” – Lars E., Denmark',
  },
   {
    img:"https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/6b39933e-73ad-4b24-965c-17884b5a8e77/be9da804-63a0-4d5c-8a09-af29209133ce.png",
    content:'“VerdiNexus gave us a complete ESG overview in under 5 days — without a single call. Game-changer!” – Lars E., Denmark',
  },
   {
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxpTZCmFkj1ydyZrkkxlyxEvijxB0aNtDCeQ&s",
    content:'“Finally, a service that understands small manufacturers like us. Affordable and effective.” – Ana M., Spain',
  }
];

const Company = () => {
  return (
    // Testimonials Section 
    <div className="overflow-hidden  whitespace-nowrap w-full md:h-100vh ">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...boxes, ...boxes].map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] h-[280px] text-wrap bg-white border border-gray-300 text-center py-6 px-2 shadow-md rounded-xl text-lg font-medium text-gray-700"
          >
            <img className="items-center object-cover flex justify-center my-2 w-[150px] h-[150px]  rounded-[50%] mx-auto" src={item.img} alt="" />
            <p className="w-[100%] text-sm flex-wrap">{item.content}</p>
          </div>
        ))}
        
      </motion.div> <br />
    </div>
    

  );
};

export default Company;
