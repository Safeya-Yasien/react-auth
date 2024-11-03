import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TInputProps<TFiledValue extends FieldValues> = {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
  name: Path<TFiledValue>;
  register: UseFormRegister<TFiledValue>;
  error?: string;
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
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={
          "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        }
        {...register(name)}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
