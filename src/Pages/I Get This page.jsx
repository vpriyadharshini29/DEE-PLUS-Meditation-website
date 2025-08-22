import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ApproachForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const therapyName = location.state?.therapyName || "Therapy";
  const selectedTitle =
    location.state?.selectedTitle || "Approach for Mental Health";

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true); // show popup instead of window.confirm
  };

  const handleConfirm = () => {
    setShowPopup(false);
    navigate("/pay", {
      state: { therapyName, selectedTitle },
    });
  };

  return (
    <div className="bg-pink-100 px-6 py-12 flex justify-center font-['Roboto']">
      <div className="w-full max-w-2xl bg-white rounded-lg p-8 shadow">
        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-purple-900 mb-2">
          {selectedTitle}
        </h2>
        <h3 className="text-center text-lg font-bold mb-8">
          {therapyName} – Approach Form
        </h3>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* First + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2"
              />
            </div>
          </div>

          {/* Mobile No */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile No
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-Mail Id
            </label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2"
            />
          </div>

          {/* Therapy Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              No. Of Therapy Day
            </label>
            <select className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>Weekly</option>
            </select>
          </div>

          {/* Family Members Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Family Members Count
            </label>
            <input
              type="number"
              className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              rows="3"
              className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2"
            ></textarea>
          </div>

          {/* Time Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Time Availability
            </label>
            <select className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2">
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>

          {/* Current City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Current City
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-md border-0 bg-purple-200 focus:ring-2 focus:ring-purple-500 px-3 py-2"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Confirmation Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 250 }}
              className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-6 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
              >
                <X size={24} />
              </button>

              <h2 className="text-xl font-bold text-gray-900 text-center mb-4">
                Confirm Submission
              </h2>
              <p className="text-gray-700 text-center mb-6">
                Are you sure you want to submit this form and proceed to payment?
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setShowPopup(false)}
                  className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform"
                >
                  Yes, Proceed
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
