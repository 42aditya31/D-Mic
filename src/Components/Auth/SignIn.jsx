import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../utils/authUtils";
import { addUserInfo } from "../../store/userSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: input.email,
          password: input.password,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Login failed");

      setToken(data.jwt);
      dispatch(addUserInfo(data.user));
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-bl from-blue-50 to-blue-200">
      <div className="md:w-1/2 bg-gradient-to-br from-blue-200 to-blue-50 flex items-center justify-center p-6">
        <img
          src="https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg"
          alt="SignIn Illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-xl rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h2>

          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
            className="mb-4 p-2 border rounded w-full"
            required
          />
          <input
            name="password"
            value={input.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border rounded w-full"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Sign In
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            No account?{" "}
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
