import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedMethod) {
      alert("Please select a payment method.");
      return;
    }
    setShowPopup(true);
    // Redirect after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
      navigate("/");
    }, 2000);
  };

  return (
    <div className="bg-pink-100 px-6 py-12 flex justify-center relative font-['Roboto']">
      <div className="w-full max-w-2xl space-y-8">
        {/* Payment Details */}
        <div className="bg-purple-100 p-6 rounded-lg shadow">
          <h2 className="text-center text-lg font-semibold text-purple-900 mb-4">
            Payment Details
          </h2>
          <div className="flex justify-between py-1">
            <span>Therapist Fee Per Session</span>
            <span>Rs.2,500.00</span>
          </div>
          <div className="flex justify-between py-1">
            <span>No. of Session 25</span>
            <span>Rs.62,500.00</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Vehicle Fees</span>
            <span>Rs.1,500.00</span>
          </div>
          <div className="flex justify-between py-1">
            <span>Councelling Fees</span>
            <span>Rs.4,500.00</span>
          </div>
          <hr className="my-2 border-gray-400" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rs.68,500.00</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-purple-100 p-6 rounded-lg shadow">
          <h2 className="text-center text-lg font-semibold text-purple-900 mb-4">
            Payment Method
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Debit / Credit */}
            <div className="flex items-center justify-between">
              <span>Debit / Credit Card</span>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={selectedMethod === "card"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-5 h-5"
              />
            </div>

            {/* UPI */}
            <div className="ml-2 text-sm font-bold text-gray-700">UPI</div>

            {/* Google Pay */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/gpay.png"
                  alt="Google Pay"
                  className="h-6 w-6"
                />
                <span>Google Pay</span>
              </div>
              <input
                type="radio"
                name="payment"
                value="gpay"
                checked={selectedMethod === "gpay"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-5 h-5"
              />
            </div>

            {/* PhonePe */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/phnpe.png"
                  alt="PhonePe"
                  className="h-6 w-6"
                />
                <span>PhonePe</span>
              </div>
              <input
                type="radio"
                name="payment"
                value="phonepe"
                checked={selectedMethod === "phonepe"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-5 h-5"
              />
            </div>

            {/* Paytm */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/paytm.png"
                  alt="Paytm"
                  className="h-6 w-6"
                />
                <span>Paytm</span>
              </div>
              <input
                type="radio"
                name="payment"
                value="paytm"
                checked={selectedMethod === "paytm"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-5 h-5"
              />
            </div>

            {/* Amazon Pay */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/apay.png"
                  alt="Amazon Pay"
                  className="h-6 w-6"
                />
                <span>Amazon Pay</span>
              </div>
              <input
                type="radio"
                name="payment"
                value="amazon"
                checked={selectedMethod === "amazon"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-5 h-5"
              />
            </div>

            {/* WhatsApp Pay */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="./images/wp.png"
                  alt="WhatsApp"
                  className="h-6 w-6"
                />
                <span>WhatsApp</span>
              </div>
              <input
                type="radio"
                name="payment"
                value="whatsapp"
                checked={selectedMethod === "whatsapp"}
                onChange={(e) => setSelectedMethod(e.target.value)}
                className="w-5 h-5"
              />
            </div>

            {/* Confirm Payment */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-700 to-pink-600 text-white font-semibold py-3 rounded-md hover:opacity-90 transition"
              >
                Confirm Payment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Animated Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 text-center"
              initial={{ scale: 0.5, opacity: 0, y: 100 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: -100 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-purple-700">
                Sessions Booked!
              </h2>
              <p className="text-gray-600 mt-2">
                Redirecting to Home Page...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
