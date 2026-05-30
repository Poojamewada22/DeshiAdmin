"use client";

import React, {
  useState,
} from "react";

import axios from "axios";

import { useRouter } from "next/navigation";

export default function LoginPage() {

  // ================= STATES =================
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const router = useRouter();

  // ================= LOGIN FUNCTION =================
  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    // Validation
    if (!email || !password) {

      alert(
        "Please fill all fields"
      );

      return;
    }

    try {

      setLoading(true);

      // ================= API CALL =================
      const res = await axios.post(
        "https://deshibackend.onrender.com/api/admin/login",
        {
          email,
          password,
        }
      );

      console.log(
        "Login Success:",
        res.data
      );

      // ================= SAVE TOKEN =================
      localStorage.setItem(
        "adminToken",
        res.data.token
      );

      localStorage.setItem(
        "adminData",
        JSON.stringify(
          res.data.admin
        )
      );

      alert("Login Successful");

      // ================= REDIRECT =================
      router.push("/dashboard");

      setLoading(false);

    } catch (error: any) {

      console.log(error);

      setLoading(false);

      alert(
        error?.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#032B3A] px-5">

      <div className="bg-white p-10 rounded-2xl w-full max-w-[420px] shadow-2xl">

        {/* ================= TITLE ================= */}
        <h1 className="text-4xl font-bold mb-3 text-center text-[#032B3A]">

          Admin Login
        </h1>

        <p className="text-center text-gray-500 mb-8">

          Login to your dashboard
        </p>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleLogin}
        >

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="w-full border border-gray-300 p-4 rounded-xl mb-5 outline-none focus:border-[#d9b56d]"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border border-gray-300 p-4 rounded-xl mb-6 outline-none focus:border-[#d9b56d]"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#d9b56d] hover:bg-[#c7a45a] py-4 rounded-xl font-bold text-black transition"
          >

            {loading
              ? "Logging..."
              : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

