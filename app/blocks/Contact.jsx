import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify the CAPTCHA before submitting.");
      return;
    }
    // Handle form submission logic here
    alert("Form submitted successfully!");
  };

  return (
    <div className="h-fit bg-white w-full text-black py-12">
      <div className="mx-auto container flex flex-col gap-12">
        <p className="font-crispy text-4xl">Contact</p>
        <div className="flex gap-4">
          <div className="col-span-1 flex flex-col gap-2 text-gray-400">
            <div className="font-crispy text-xl">
              Let's talk about everything!
            </div>
            <div>Don’t like forms? Send me an email. 👋</div>
          </div>
          <div className="col-span-2">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-2 gap-x-4 gap-y-6"
            >
              <input
                type="text"
                className="shadow py-4 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="shadow py-4 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Your Email"
              />
              <input
                type="email"
                className="shadow py-4 px-6 col-span-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Your Email"
              />
              <textarea
                className="shadow py-4 px-6 col-span-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Your Message"
                rows="4"
              ></textarea>

              <div className="col-span-2">
                <ReCAPTCHA
                  sitekey={process.env.SITEKEY || "SITEKEY"}
                  onChange={handleCaptchaChange}
                />
              </div>

              <button
                type="submit"
                className="col-span-2 bg-red-700 text-white py-4 px-6 rounded-full hover:bg-red-800 transition-colors duration-300"
                disabled={!captchaVerified}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
