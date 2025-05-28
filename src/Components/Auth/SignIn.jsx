import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addUserInfo } from "../../store/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: input.email,
          password: input.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error?.message || "Login failed");
      }

      localStorage.setItem("token", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch(addUserInfo(data.user))

      
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <div className="text-4xl font-bold text-gray-600 tracking-wide text-center mb-4">
          Conne<span className="text-black">Xity</span>
        </div>
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            type="text"
            placeholder="Username or Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
