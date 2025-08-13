import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    if (!captchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captcha: captchaToken }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit the form");
      }

      setFormData({ name: "", email: "", subject: "", message: "" });
      setCaptchaToken("");
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError(
        error.message ||
          "There was an error submitting the form. Please try again."
      );
    }
  };

  return (
    <div
      className="h-fit bg-white w-full text-black py-12 px-6 lg:px-0"
      id="contact"
    >
      <div className="mx-auto container flex flex-col gap-12">
        <p className="font-crispy text-4xl">Contact</p>
        <div className="flex gap-4">
          <div className="col-span-1 flex-col gap-2 text-gray-400 hidden lg:flex">
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow py-4 px-6 rounded-full"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow py-4 px-6 rounded-full"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow py-4 px-6 col-span-2 rounded-full"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow py-4 px-6 col-span-2 rounded-lg"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>

              <div className="col-span-2">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
              </div>

              {error && <p className="col-span-2 text-red-500">{error}</p>}

              <button
                type="submit"
                className="col-span-2 bg-red-700 text-white py-4 px-6 rounded-full hover:bg-red-800"
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
