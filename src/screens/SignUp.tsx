import { useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { errorToast, success } from "./Toast";
import React from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const handleSignUp = async (event: any) => {
    event.preventDefault();

    if (email.trim() === "" || name.trim() === "" || password.trim() === "") {
      errorToast("One or more empty fields.");
      return;
    }

    try {
      await axios.post(
        `https://udemy-clone-backend-ochre.vercel.app/User/signup`,
        {
          name,
          email,
          password,
        }
      );
      success("Registration Completed! Now login.");
    } catch (error) {
      console.error(error);
      error("Something went wrong.");
    }
  };

  return (
    <div className="bg-gray-900 h-screen">
      <div className="px-4 py-16 text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-12 text-green-400">Sign Up</h2>
        <div className="max-w-xs mx-auto">
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus:outline-none text-slate-800 w-full mb-6 px-4 py-3 rounded"
          />
          <input
            required
            type="text"
            placeholder="Email/Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus:outline-none text-slate-800 w-full mb-6 px-4 py-3 rounded"
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="focus:outline-none text-slate-800 w-full mb-6 px-4 py-3 rounded"
          />
          <input
            required
            type="text"
            placeholder="Student OR Instructor"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="focus:outline-none text-slate-800 w-full mb-6 px-6 py-3 rounded"
          />
          <button
            type="submit"
            onClick={handleSignUp}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full"
          >
            Sign Up
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
