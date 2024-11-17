import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { IoMdHappy } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { IoPulseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    heading:'Fair Trade Practices',
    title:"We provide fair compensation to farmers for their Red Chilli crops, ensuring they get the recognition they deserve.",
    link: "#",
    icon: <TbWorldWww />,
    delay: 0.2,
  },
  {
    id: 2,
    heading:'Top-Quality Red Chilli',
    title: "We ensure that all Red Chilli exported meets the highest international standards.",
    link: "#",
    icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    heading:'Sustainability',
    title: "We promote environmentally responsible farming practices for a sustainable future.",
    link: "#",
    icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "We ensure on-time deliveries and work directly with buyers to meet their exact needs.",
    heading:'Reliable Service',
    link: "#",
    icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "We deliver the best of Indian Red Chilli to customers around the world, ensuring the highest level of satisfaction.",
    heading:"Global Reach",
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
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-left text-center pb-10">
        Why Choose Agro Export World for Red Chilli?

        </h1>
        <div className="grid grid-cols-1 mx-4 sm:grid-cols-3 md:grid-cols-5 gap-8  justify-center ">
          {ServicesData.map((service) => (
            <motion.div
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
            >
              <h2 className="text-lg text-center font-bold mb-4"> {service.heading}</h2>
              <p className="text-md font-normal text-center px-3">
                {service.title}
              </p>
              <p className="text-sm font-semibold text-right px-3">
                {service.author}
              </p>
            </motion.div>
           
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default Services;
