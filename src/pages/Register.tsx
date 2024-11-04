import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  registerSchema,
  TRegisterFormInputs,
} from "../validations/registerSchema";
import Input from "../components/Form/Input";
import { axiosInstance } from "../services/axiosConfig";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<TRegisterFormInputs> = async ({
    first_name,
    last_name,
    email,
    password,
  }) => {
    const username = `${first_name} ${last_name}`;
    setLoading(true);
    try {
      await axiosInstance({
        url: "/auth/signup",
        method: "POST",
        data: {
          username,
          email,
          password,
        },
      });
      console.log("Registered successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error validating form:", error);
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="First name"
            id="first_name"
            placeholder="Enter your first name"
            name="first_name"
            register={register}
            error={errors.first_name?.message}
          />
          <Input
            label="Last name"
            id="last_name"
            placeholder="Enter your last name"
            name="last_name"
            register={register}
            error={errors.last_name?.message}
          />
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
          <Input
            label="Confirm password"
            type="password"
            id="confirm_password"
            placeholder="Repeat Password"
            name="confirm_password"
            register={register}
            error={errors.confirm_password?.message}
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 mt-4 text-white ${
              loading ? "bg-gray-400" : "bg-blue-500"
            } rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1`}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
