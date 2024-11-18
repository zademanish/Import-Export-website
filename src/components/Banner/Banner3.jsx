import React from "react";
import BannerPng from "../../assets/banner.png";
import farmerTrust from "../../assets/farmertrust.png"
import Rupees from "../../assets/rupees.png"

import { motion } from "framer-motion";

const Banner3 = () => {
  return (
    <section className="bg-white">
      <div className="container py-14 md:grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 ">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center "
        >
          <div className="text-center space-y-4 md:text-left lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">Our Mission</h1>
            <p className="text-black">
              To provide fair prices for Red Chilli and other agricultural
              products. To ensure farmers receive direct benefits from their
              crops. To deliver premium quality Red Chilli that meets global
              standards. To promote sustainable and ethical farming practices
              for a brighter future.
            </p>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={Rupees}
            alt="banner img"
            className="w-[350px] md:max-w-[450px] h-72 object-contain drop-shadow"
          />
        </div>
        <div>
          <h1 className="text-3xl text-center font-bold !leading-snug md:hidden">
            What We Do Fair Pricing for <span className="text-blue-900">Red Chilli Farmers</span>
          </h1>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={farmerTrust}
            alt="banner img"
            className="w-[350px] md:max-w-[350px] h-[26rem] object-cover drop-shadow"
          />
        </div>
        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
          <h1 className="hidden text-3xl font-bold !leading-snug md:block">
            What We Do Fair Pricing for <span className="text-blue-900">Red Chilli Farmers</span> 
          </h1>
          <p >
            We ensure that farmers receive fair compensation for their Red
            Chilli. Offering transparent pricing and ensuring timely payments to
            support farmers' financial stability.
          </p>
          <h2 className="text-2xl font-semibold text-black">
            Premium Red Chilli Exports
          </h2>
          <p >
            We carefully source high-quality Red Chilli from trusted farmers.
            Ensuring that each batch meets international quality standards for
            global customers.
          </p>
          <h2 className="text-2xl font-semibold text-black">Building Relationships and Trust
          </h2>
          <p>
          Creating long-term partnerships with Red Chilli farmers and international buyers.
Fostering a collaborative approach to growth and sustainability.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
