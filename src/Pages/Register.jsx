import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user details in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName, email, password })
    );

    alert("✅ Registration successful!");
    navigate("/"); // redirect to home page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 font-['Roboto']
    ">
      <div className="bg-white shadow-md rounded-xl px-8 py-10 w-full max-w-md">
        <h2 className="text-center text-purple-900 font-bold text-xl mb-6">
          Create Account
        </h2>

        <form className="space-y-5" onSubmit={handleRegister}>
          {/* Name */}
          <div className="flex space-x-3">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-800 to-pink-600 text-white py-2 rounded-md font-semibold hover:opacity-90"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
        <Link to="/login" className="text-purple-700 font-semibold hover:underline">
  Login
</Link>
        </p>
      </div>
    </div>
  );
}
