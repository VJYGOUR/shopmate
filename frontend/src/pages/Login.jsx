import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        data
      );
      const resData = response?.data;
      if (resData?.success) {
        localStorage.setItem("username", resData.name);
        toast.success(resData.message);

        reset();
        setTimeout(() => navigate("/"), 1500);
      } else {
        toast.error(resData.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 to-indigo-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-white"
      >
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
              })}
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out
"
            />
            {errors.email && (
              <p className="text-red-300 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
              className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out
"
            />
            {errors.password && (
              <p className="text-red-300 text-sm mt-1">password is required</p>
            )}
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <Link to="#" className="hover:underline text-blue-300">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-2 rounded-lg text-white font-semibold shadow-lg"
          >
            {loading ? "signing in.." : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;
