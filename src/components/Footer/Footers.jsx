import React from 'react';

function Footers() {
  return (
    <section className="contact py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="title text-3xl font-bold text-center mb-10 text-[#1e3551]">Contact Me</h2>
        <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="column left space-y-6">
            <div className="text text-xl font-semibold text-[#1e3551]">Get in Touch</div>
            <p className="text-gray-600">
            Are you a Red Chilli farmer looking for a trusted partner to ensure fair value for your produce? Or a buyer seeking premium Red Chilli for your market? Partner with Agro Export World today!

            </p>
            <div className="icons space-y-4">
              <div className="row flex items-center space-x-4">
                <i className="fa-solid fa-user-large text-xl text-[#1e3551]"></i>
                <div className="info">
                  <div className="head font-semibold">Name</div>
                  <div className="sub-title text-gray-500">Ashish Zade</div>
                </div>
              </div>

              <div className="row flex items-center space-x-4">
                <i className="fa-solid fa-location-dot text-xl text-[#1e3551]"></i>
                <div className="info">
                  <div className="head font-semibold">Address</div>
                  <div className="sub-title text-gray-500">
                    At-Tejapur, Post-Adegaon Tah-Wani <br />
                    Dist-Yavatmal Maharashtra-411041
                  </div>
                </div>
              </div>

              <div className="row flex items-center space-x-4">
                <i className="fa-solid fa-envelope text-xl text-[#1e3551]"></i>
                <div className="info">
                  <div className="head font-semibold">Email</div>
                  <div className="sub-title text-gray-500">
                    <a href="mailto:manishzademz7@gmail.com" className="text-decoration-none text-[#1e3551]">ashishzade@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="row flex items-center space-x-4">
                <i className="bi bi-translate text-xl text-[#1e3551]"></i>
                <div className="info">
                  <div className="head font-semibold">Language Known</div>
                  <div className="sub-title text-gray-500">Hindi, English, Marathi</div>
                </div>
              </div>
            </div>

            <div className="social-menu flex space-x-4 mt-4">
              <a href="https://github.com/zademanish" className="text-[#1e3551] text-2xl"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/manish-zade-9a76bb13a" className="text-[#1e3551] text-2xl"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/77x_manish_x77?utm_source=qr&igsh=MTl1eHlveXRsNzA1aQ==" className="text-[#1e3551] text-2xl"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-[#1e3551] text-2xl"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" title="Get Educate with Us" className="text-[#1e3551] text-2xl"><i className="fa-solid fa-graduation-cap"></i></a>
            </div>
          </div>

          {/* Right Column */}
          <div className="column right space-y-6">
            <div className="text text-xl font-semibold text-[#1e3551]">Message me</div>
            <form action="#" className="space-y-4">
              <div className="fields grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="field">
                  <input type="text" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3551]" />
                </div>
                <div className="field">
                  <input type="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3551]" />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3551]" />
              </div>
              <div className="field">
                <textarea cols="30" rows="5" placeholder="Message.." required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3551]"></textarea>
              </div>
              <div className="button-area">
                <button type="submit" className="bg-[#1e3551] text-white px-6 py-2 rounded hover:bg-[#ff4efc] transition duration-300">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footers;
