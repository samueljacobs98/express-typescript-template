import { z } from "zod";

export const createUserSchema = z
  .object({
    body: z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
    }),
  })
  .transform((data) => ({
    name: data.body.name,
    email: data.body.email,
    password: data.body.password,
  }));
