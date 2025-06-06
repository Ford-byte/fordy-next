import React, { useState, useEffect } from "react";
import { client } from "../sanity/client";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      const newForm = {
        _type: "contact",
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        submittedAt: new Date().toISOString(),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newForm),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(erro      alert("Form submitted successfully!");
        rData.error || "Failed to submit the form");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError(
        error.message ||
          "There was an error submitting the form. Please try again."
      );
    }
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
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow py-4 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Your Name"
                aria-label="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow py-4 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Your Email"
                aria-label="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow py-4 px-6 col-span-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Subject"
                aria-label="Subject"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow py-4 px-6 col-span-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                placeholder="Your Message"
                aria-label="Your Message"
                rows="4"
                required
              ></textarea>

              {error && <p className="col-span-2 text-red-500">{error}</p>}

              <button
                type="submit"
                className="col-span-2 bg-red-700 text-white py-4 px-6 rounded-full hover:bg-red-800 transition-colors duration-300"
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
