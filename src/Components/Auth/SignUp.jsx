import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    FirstName: "",
    LastName: "",
    Proffesion: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:1337/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: input.name,
          email: input.email,
          password: input.password,
          confirmed: true,
          FirstName: input.FirstName,
          LastName: input.LastName,
          Proffesion: input.Proffesion,
          role:2
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error?.message || "Signup failed");
      }

      alert("Account created. Please sign in.");
      navigate("/signin");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-6">
        <img
          src="https://img.freepik.com/premium-vector/user-profile-verification-flat-vector-illustration_750364-2107.jpg"
          alt="Signup Illustration"
          className="w-full max-w-md"
        />
      </div>

      <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-xl rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Create Account</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="FirstName"
              value={input.FirstName}
              onChange={handleChange}
              type="text"
              placeholder="First Name"
              className="p-2 border rounded"
              required
            />
            <input
              name="LastName"
              value={input.LastName}
              onChange={handleChange}
              type="text"
              placeholder="Last Name"
              className="p-2 border rounded"
              required
            />
          </div>

          <input
            name="Proffesion"
            value={input.Proffesion}
            onChange={handleChange}
            type="text"
            placeholder="Profession"
            className="mt-4 p-2 border rounded w-full"
            required
          />
          <input
            name="name"
            value={input.name}
            onChange={handleChange}
            type="text"
            placeholder="Username"
            className="mt-4 p-2 border rounded w-full"
            required
          />
          <input
            name="email"
            value={input.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="mt-4 p-2 border rounded w-full"
            required
          />
          <input
            name="password"
            value={input.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="mt-4 p-2 border rounded w-full"
            required
          />

          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Sign Up
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already registered?{" "}
            <Link to="/signin" className="text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
