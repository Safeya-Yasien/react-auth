import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(30, { message: "Password must not exceed 30 characters" }),
});

export type TLoginFormInputs = z.infer<typeof loginSchema>;
