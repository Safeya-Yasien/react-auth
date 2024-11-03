import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import Input from "../components/Form/Input";
import { loginSchema, TLoginFormInputs } from "../validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<TLoginFormInputs> = (data) => console.log(data);

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
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            Login
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
