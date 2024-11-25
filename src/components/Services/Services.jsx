import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    heading:'Fair Trade Practices',
    title:"We provide fair compensation to farmers for their Red Chilli crops, ensuring they get the recognition they deserve.",
    link: "#",
    src:'https://www.shutterstock.com/image-photo/money-bag-wooden-blocks-word-260nw-1293789484.jpg',
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    heading:'Top-Quality Red Chilli',
    title: "We ensure that all Red Chilli exported meets the highest international standards.",
    link: "#",
    src:'https://t3.ftcdn.net/jpg/08/67/83/30/360_F_867833051_z83WvO4NAHhWXwMW7I4X4Ec22AYidBC6.jpg',
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    heading:'Sustainability',
    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vgQZALEFVGINb9eV2IN0zYMLmWV5kJB3BQ&s',
    title: "We promote environmentally responsible farming practices for a sustainable future.",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "We ensure on-time deliveries and work directly with buyers to meet their exact needs.",
    heading:'Reliable Service',
    src:'https://praxisinfosolutions.com/blog/wp-content/uploads/2024/05/Reliable-SAP-Business-One-Mumbai.jpg',
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "We deliver the best of Indian Red Chilli to customers around the world, ensuring the highest level of satisfaction.",
    heading:"Global Reach",
    src:'https://commodity-board.com/wordpress/wp-content/uploads/2022/05/MAIPTGJPB5PQHMTZ43KXALGYW4.jpg',
    link: "#",
    icon: <IoPulseOutline />,
    delay: 0.6,
  }
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section className="bg-white md:flex justify-center " id="services">
      <div className="container pb-14 pt-8 md:mt-8 md:px-4">
        <h1 className="text-4xl font-bold  text-center pb-10">
        Why Choose Agro Export World for <span className="text-red-600">Red Chilli </span>.?
        </h1>
        <div className="grid grid-cols-1 mx-2 md:mx-0  sm:grid-cols-3 md:grid-cols-5  gap-8  justify-center md:mt-4 ">
          {ServicesData.map((service) => (
            // <motion.div
            //   variants={SlideLeft(service.delay)}
            //   initial="initial"
            //   whileInView={"animate"}
            //   viewport={{ once: true }}
            //   className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            // >
            //   <h2 className="text-lg text-center font-bold mb-4"> {service.heading}</h2>
            //   <p className="text-md font-normal text-center px-3">
            //     {service.title}
            //   </p>
            //   <p className="text-sm font-semibold text-right px-3">
            //     {service.author}
            //   </p>
            // </motion.div>
             <motion.div variants={SlideLeft(service.delay)}  initial="initial" whileInView={"animate"} viewport={{ once: true }} className="max-w-sm rounded overflow-hidden shadow-lg  bg-[#f4f4f4] hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
<div className="w-full md:h-40">
<img className="w-full md:h-full md:object-cover" src={service.src} alt="Sunset in the mountains"/>
</div>
  <div className="px-6 py-4 md:mt-4">
    <div className="font-bold text-xl mb-2">{service.heading}</div>
    <p className="text-gray-700 text-base">{service.title}
    </p>
  </div>
  {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
</motion.div>
           
          ))}
        </div>
        
       
      </div>
    </section>
  );
};

export default Services;
