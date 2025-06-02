// Components/Auth/SignIn.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../utils/authUtils";
import { addUserInfo } from "../../store/userSlice";


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: input.email, password: input.password }),
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        <input name="email" value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="text" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
        <input name="password" value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Sign In</button>
        <p className="text-sm mt-2">No account? <Link to="/signup" className="text-blue-600">Sign Up</Link></p>
      </form>
    </div>
  );
};

export default SignIn;
