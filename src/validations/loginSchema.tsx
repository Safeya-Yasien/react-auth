import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(30, { message: "Password must not exceed 30 characters" })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,30}$/, {
      message: "Password must contain at least one letter and one number",
    }),
  remember_me: z.boolean(),
});

export type TLoginFormInputs = z.infer<typeof loginSchema>;
