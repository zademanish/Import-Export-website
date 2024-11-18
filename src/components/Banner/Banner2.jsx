import React from "react";
import BannerPng from "../../assets/banner.png";
import FarmerImg from "../../assets/Farmer.png"
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Who We Are.?
            </h1>
            <p className="text-white">
Agro Export World is an agricultural export company committed to offering fair prices to farmers, specifically for their Red Chilli harvests. We work closely with farmers to help them grow and sell their produce at competitive prices, ensuring that their efforts are valued globally.

            </p>
            <p className="text-white">
        Our goal is to create lasting relationships with farmers, deliver premium Red Chilli products, and build sustainable agricultural practices that benefit everyone involved.
        </p>
            <a
              href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
              className="secondary-btn !mt-6"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={FarmerImg}
            alt="banner img"
            className="w-[350px] h-96 rounded-md md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
