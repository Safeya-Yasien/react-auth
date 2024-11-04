"use client";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Cookies from "js-cookie";

import Input from "../components/Form/Input";
import { loginSchema, TLoginFormInputs } from "../validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosInstance } from "../services/axiosConfig";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<TLoginFormInputs> = async ({
    email,
    password,
  }) => {
    setLoading(true);
    try {
      const response = await axiosInstance({
        url: "/auth/login",
        method: "POST",
        data: { email, password },
      });
      alert("Login successful!");
      setAuth(true);
      const token = response.data.token;
      Cookies.set("token", token);
      navigate("/");
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            id="email"
            placeholder="Enter your email"
            name="email"
            register={register}
            error={errors.email?.message}
          />

          <Input
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            register={register}
            error={errors.password?.message}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-4 text-white ${
              loading ? "bg-gray-400" : "bg-blue-500"
            } rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1`}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
