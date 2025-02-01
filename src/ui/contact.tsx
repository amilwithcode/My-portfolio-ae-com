/* eslint-disable */
"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { useTranslations } from "next-intl";

function Contact() {
  const form = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS ilə form göndərmə
    emailjs
      .sendForm(
        "service_rz85h8q",
        "template_79hxz7i",
        e.target as HTMLFormElement,
        "JmviAg3e4W8YkX5cl"
      )
      .then(
        (result) => {
          alert("Mesajınız uğurla göndərildi!");
        },
        (error) => {
          alert("Xəta baş verdi, zəhmət olmasa təkrar cəhd edin!");
        }
      );
  };

  return (
    <main>
      <section className="max-w-7xl mx-auto p-8 border rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Əlaqə
        </h2>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-6 flex flex-col gap-10"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Adınız
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Göndər
          </button>
        </form>
        {status && (
          <p
            className={`mt-4 text-center font-semibold ${
              status.includes("uğurla") ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </section>
    </main>
  );
}

export default Contact;
