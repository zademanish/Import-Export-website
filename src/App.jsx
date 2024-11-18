import React from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import FeaturesPage from "./components/FeaturePage/FeaturesPage";
import Footers from "./components/Footer/Footers";
const App = () => {
  return (
    <main id="mainBody" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 overflow-x-hidden bg-white text-dark">
      <Hero/>
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Banner3/>
      <FeaturesPage/>
      <Footers />
    </main>
  );
};

export default App;
