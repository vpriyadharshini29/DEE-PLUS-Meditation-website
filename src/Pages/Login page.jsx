import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("❌ No registered user found. Please register first.");
      return;
    }

    if (email === user.email && password === user.password) {
      alert(`✅ Welcome back, ${user.firstName}!`);
      navigate("/"); // redirect to home page
    } else {
      alert("❌ Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-['Roboto'] bg-pink-100">
      <div className="bg-white shadow-md rounded-xl px-8 py-10 w-full max-w-md">
        <h2 className="text-center text-purple-900 font-bold text-xl mb-6">
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
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
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-purple-700 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-800 to-pink-600 text-white py-2 rounded-md font-semibold hover:opacity-90"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-purple-700 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}