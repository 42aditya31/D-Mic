import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", email: "", password: "" });

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Create Account</h2>
        <input name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" placeholder="Username" className="w-full mb-3 p-2 border rounded" />
        <input name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
        <input name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign Up</button>
        <p className="text-sm mt-2">Already registered? <Link to="/signin" className="text-blue-600">Sign In</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
