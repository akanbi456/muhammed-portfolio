import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 py-16 text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-4 text-4xl font-bold text-center text-purple-700 dark:text-white">
          Get in Touch
        </h2>
        <p className="mb-10 text-center text-gray-600 dark:text-gray-300">
          Have a project in mind or just want to say hello? Let’s connect!
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-purple-600" size={20} />
              <span>+234 08141584744</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-purple-600" size={20} />
              <span>muhammedakanbi041@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-purple-600" size={20} />
              <span>Lagos, Nigeria</span>
            </div>
            <a
              href="https://wa.me/2348141584744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2 text-white transition bg-purple-700 rounded hover:bg-purple-800rounded "
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form className="p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-transparent border border-gray-300 rounded dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-transparent border border-gray-300 rounded dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 bg-transparent border border-gray-300 rounded dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-white transition bg-purple-700 rounded hover:bg-purple-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
