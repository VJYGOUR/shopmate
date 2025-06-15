// components/SignupPage.jsx
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { IconBrandGoogle, IconBrandGithub } from "@tabler/icons-react";

export default function SignupFormDemo() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        data
      );
      alert(response.data.mssg);
      reset();
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      {/* Left Side */}
      <div className="md:w-1/2 flex items-center justify-center p-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
            Welcome to EcomApp
          </h1>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Join our platform to experience the most seamless and stylish
            shopping ever.
          </p>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="md:w-1/2 flex items-center justify-center p-6 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Create Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 rounded-xl bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum length is 6 characters",
                },
              })}
              placeholder="Password"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition-all shadow-md"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center gap-2 my-6">
            <div className="flex-grow h-px bg-white/20" />
            <span className="text-sm text-white/50">or continue with</span>
            <div className="flex-grow h-px bg-white/20" />
          </div>

          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-2 w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl">
              <IconBrandGoogle className="w-5 h-5" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 w-full py-2 bg-white/10 hover:bg-white/20 rounded-xl">
              <IconBrandGithub className="w-5 h-5" />
              GitHub
            </button>
          </div>

          <p className="text-center mt-6 text-sm text-white/60">
            Already have an account?{" "}
            <a href="#" className="text-purple-400 hover:underline">
              Sign in
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
