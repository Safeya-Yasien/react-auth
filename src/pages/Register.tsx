import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  registerSchema,
  TRegisterFormInputs,
} from "../validations/registerSchema";
import Input from "../components/Form/Input";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormInputs>({
    mode: "onBlur",
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<TRegisterFormInputs> = (data) => {
    console.log(data);
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
            type="confirm_password"
            id="confirm_password"
            placeholder="Repeat Password"
            name="confirm_password"
            register={register}
            error={errors.password?.message}
          />

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            Register
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
