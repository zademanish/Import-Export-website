import React from 'react';
import dryChilli from "../../assets/chilli.png"
import redChilli from "../../assets/redchilli.png"
const FeaturesPage = () => {
  return (
    <div className='bg-[#010428]'>
      <h1 className='text-center text-4xl text-white font-bold pt-9 md:text-6xl'>Our Red Chilli</h1>
    <div className="flex flex-col items-center justify-start min-h-fit  py-8 md:flex-row">
      {/* Heading */}
    

      {/* Feature Cards */}
      <div className="space-y-6 w-full max-w-sm md:mx-8 md:flex items-center justify-center gap-8 md:max-w-full">
        <h2 className='text-white text-2xl mx-2 md:max-w-md md:text-6xl font-serif'>We specialize in exporting a wide range of Red Chilli varieties, including
</h2>
        {/* Feature 1 */}
       <div>
        <div className="flex items-start mx-2 bg-gradient-to-r from-[#090E3F] to-[#010428] md:max-w-lg rounded-lg p-6 md:my-4 md:flex-none">
          <div className="flex items-center justify-between  gap-4 ">
            <div>
            <img src={dryChilli} className='bg-[#3F4E65] rounded-full h-20 w-30' alt="Mock Interviews" />
            </div>
            <div className='w-full'>
            <h3 className="text-white text-lg font-semibold mt-2 leading-6">Dried Red chilli</h3>
            <p className="text-[#94A3B8] mt-2">Perfect for global spice markets.
            </p>
            </div>
          </div>
        </div>
     

        {/* Feature 2 */}
        <div className="flex items-start mx-2 bg-gradient-to-r from-[#090E3F] to-[#010428] rounded-lg p-6 md:max-w-lg md:my-4 md:flex-none">
          <div className="flex items-center justify-between  gap-4 ">
            <div>
            <img src={redChilli} className='bg-[#3F4E65] h-20 w-[7rem] rounded-full' alt="Mock Interviews" />
            </div>
            <div className='w-full'>
            <h3 className="text-white text-lg font-semibold mt-2 leading-6">Red Chilli Powder</h3>
            <p className="text-[#94A3B8] mt-2"> Finely ground for export-quality use.
            </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start mx-2 bg-gradient-to-r from-[#090E3F] to-[#010428] rounded-lg p-6 md:max-w-lg md:my-4 md:flex-none ">
          <div className="flex items-center justify-between  gap-4 ">
            <div>
            <img src="https://manekancor.com/wp-content/uploads/2023/03/chilli-wholeStemless.jpg" className='bg-[#3F4E65] rounded-full h-20 w-[7rem]' alt="Mock Interviews" />
            </div>
            <div className='w-full'>
            <h3 className="text-white text-lg font-semibold mt-2 leading-6">Whole Red Chilli</h3>
            <p className="text-[#94A3B8] mt-2">Fresh and full of flavor for the most demanding international kitchens.
            </p>
            </div>
          </div>
        </div>
      </div>
        
      </div>
    </div>
    <div className='w-full'>

    <marquee className='text-white text-xl mx-4 font-serif md:mx-8'>Every batch is handpicked and processed to ensure maximum flavor, color, and potency, ensuring that it reaches global markets with the highest quality possible.
        </marquee>
    </div>
    </div>
  );
};

export default FeaturesPage;
 