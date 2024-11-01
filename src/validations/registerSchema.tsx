import { z } from "zod";

export const registerSchema = z
  .object({
    first_name: z
      .string()
      .min(2, { message: "First name must be at least 2 characters long" })
      .max(30, { message: "First name must not exceed 30 characters" }),

    last_name: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters long" })
      .max(30, { message: "Last name must not exceed 30 characters" }),

    email: z.string().email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(30, { message: "Password must not exceed 30 characters" })
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,30}$/, {
        message: "Password must contain at least one letter and one number",
      }),

    confirm_password: z
      .string()
      .min(8, {
        message: "Password confirmation must be at least 8 characters long",
      })
      .max(30, {
        message: "Password confirmation must not exceed 30 characters",
      }),
  })
  .refine((value) => value.password === value.confirm_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
  });

export type TRegisterFormInputs = z.infer<typeof registerSchema>;
