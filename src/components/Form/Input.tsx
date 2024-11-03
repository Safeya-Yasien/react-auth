import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TInputProps<TFiledValue extends FieldValues> = {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  name: Path<TFiledValue>;
  register: UseFormRegister<TFiledValue>;
  error?: string;
  rememberMe?: boolean;
};

const Input = <TFieldValue extends FieldValues>({
  label,
  type = "text",
  id,
  placeholder,
  name,
  register,
  error,
}: TInputProps<TFieldValue>) => {
  return (
    <div
      className={` ${
        type === "checkbox"
          ? "flex flex-row items-center gap-2"
          : "flex flex-col gap-2"
      }`}
    >
      <label htmlFor={id} className="block text-sm font-semibold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={
          type === "checkbox"
            ? "w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            : "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        }
        {...register(name)}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
