import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-pink-100 min-h-screen py-12 px-6 md:px-20 font-['Roboto']">
      {/* Banner */}
      <div className="max-w-5xl mx-auto">
        <img
          src="./images/contact.png"
          alt="Meditation"
          className="rounded-md w-full h-84 object-cover"
        />
       
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Left side - Info */}
        <div className="text-gray-800 space-y-6">
          <h2 className="font-bold text-center text-lg">Contact DEE PLUS</h2>

          <div>
            <p className="font-semibold">Address:</p>
            <p>
              6, Hethhendran Street, <br />
              Kongu Nagar, <br />
              Karur - 26
            </p>
          </div>

          <div>
            <p>
              <span className="font-semibold">Mobile No:</span> +9532 32556
            </p>
            <p>
              <span className="font-semibold">E-Mail Id:</span>{" "}
              deesplusdwell@gmail.com
            </p>
          </div>

          <div>
            <p className="font-semibold">General Enquirers</p>
            <p>
              Got a general question? Please use this Contact Form to reach out
              to us.
            </p>
          </div>

          <div>
            <p className="font-semibold">Feedback</p>
            <p>
              Do you have something to say about The Guided Meditation Site? 
              Feel free to give us your feedback via this Contact Form.
            </p>
          </div>

          <div>
            <p className="font-semibold">Opening Time</p>
            <p>
              Monday - Sunday <br />
              9.00 AM To 9.00 PM
            </p>
          </div>
        </div>

        {/* Right side - Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="text"
            placeholder="Mobile No"
            className="w-full border rounded-md px-3 py-2"
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="w-full border rounded-md px-3 py-2"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full border rounded-md px-3 py-2"
          ></textarea>

          {/* Captcha Placeholder */}
          <div className="flex items-center space-x-3">
            <input type="checkbox" className="w-5 h-5 border rounded" />
            <span>I am Not Robot</span>
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="captcha"
              className="h-10 ml-auto"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2 rounded-md hover:bg-purple-900 transition"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}
