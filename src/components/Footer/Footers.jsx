import React from 'react';

function Footers() {
  return (
    <section className="contact py-5 bg-slate-600" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="title text-3xl font-bold text-center mb-10 text-black">Contact Me</h2>
        <div className="contact-content grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="column left space-y-6">
            <div className="text text-xl font-semibold text-black">Get in Touch</div>
            <p className="text-white">
            Are you a Red Chilli farmer looking for a trusted partner to ensure fair value for your produce? Or a buyer seeking premium Red Chilli for your market? Partner with Agro Export World today!

            </p>
            <div className="icons space-y-4">
              <div className="row flex items-center space-x-4">
                <i className="fa-solid fa-user-large text-xl text-[#1e3551]"></i>
                <div className="info">
                  <div className="head font-semibold text-black">Name</div>
                  <div className="sub-title text-white">Ashish Zade</div>
                </div>
              </div>

              <div className="row flex items-center space-x-4">
                <i className="fa-solid fa-location-dot text-xl text-[#1e3551]"></i>
                <div className="info">
                  <div className="head font-semibold  text-black">Address</div>
                  <div className="sub-title text-white">
                    At-Tejapur, Post-Adegaon Tah-Wani <br />
                    Dist-Yavatmal Maharashtra-445304
                  </div>
                </div>
              </div>

              <div className="row flex items-center space-x-4">
                <i className="fa-solid fa-envelope text-xl text-[#1e3551]"></i>
                <div className="info">
                  <div className="head font-semibold text-black">Email</div>
                  <div className="sub-title ">
                    <a href="mailto:ashishzade@gmail.com" className="text-decoration-none text-white">ashishzade@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="row flex items-center space-x-4">
                <i className="bi bi-translate text-xl text-white"></i>
                <div className="info">
                  <div className="head font-semibold text-black">Language Known</div>
                  <div className="sub-title text-white">Hindi, English, Marathi</div>
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
            <div className="text text-xl font-semibold text-black">Message me</div>
            <form action="#" className="space-y-4">
              <div className="fields grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="field">
                  <input type="text" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300   rounded focus:outline-none focus:ring-2 focus:ring-[#1e3551]" />
                </div>
                <div className="field">
                  <input type="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3551]" />
                </div>
              </div>
              <div className="field">
                <input type="text" placeholder="Subject" required className="w-full px-4 py-2 border border-gray-300  rounded focus:outline-none focus:ring-2 focus:ring-[#1e3551]" />
              </div>
              <div className="field">
                <textarea cols="30" rows="5" placeholder="Message.." required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3551]"></textarea>
              </div>
              <div className="button-area">
                <button type="submit" className="secondary-btn text-white px-6 py-2 rounded hover:bg-[#ff4efc] transition duration-300">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footers;
